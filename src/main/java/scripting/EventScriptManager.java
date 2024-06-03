/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package scripting;

import handling.channel.ChannelServer;
import handling.world.World;

import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

import org.slf4j.LoggerFactory;

import tools.FileoutputUtil;

/**
 *
 * @author Matze
 */
public class EventScriptManager extends AbstractScriptManager {
    private static final org.slf4j.Logger log = LoggerFactory.getLogger(EventScriptManager.class);
    private static final String INJECTED_VARIABLE_NAME = "em";
    private static EventEntry fallback;
    private final Map<String, EventEntry> events = new ConcurrentHashMap<>();
    private boolean active = false;
    private static final AtomicInteger runningInstanceMapId = new AtomicInteger(0);

    private static class EventEntry {

        public EventEntry(Invocable iv, EventManager em) {
            this.iv = iv;
            this.em = em;
        }

        public Invocable iv;
        public EventManager em;
    }

    public static int getNewInstanceMapId() {
        return runningInstanceMapId.addAndGet(1);
    }

    public EventScriptManager(final ChannelServer channel, String[] scripts) {
        for (String script : scripts) {
            if (!script.isEmpty()) {
                events.put(script, initializeEventEntry(script, channel));
            }
        }

        init();
        fallback = events.remove("0_EXAMPLE");
    }

    public EventManager getEventManager(String event) {
        EventEntry entry = events.get(event);
        if (entry == null) {
            return fallback.em;
        }
        return entry.em;
    }

    public boolean isActive() {
        return active;
    }

    public final void init() {
        for (EventEntry entry : events.values()) {
            try {
                entry.iv.invokeFunction("init", (Object) null);
            } catch (Exception ex) {
                log.error("Error on script: {}", entry.em.getName(), ex);
            }
        }

        active = events.size() > 1; // bootup loads only 1 script
    }

    private void reloadScripts() {
        Set<Map.Entry<String, EventEntry>> eventEntries = new HashSet<>(events.entrySet());
        if (eventEntries.isEmpty()) {
            return;
        }

        ChannelServer channel = eventEntries.iterator().next().getValue().em.getChannelServer();
        for (Map.Entry<String, EventEntry> entry : eventEntries) {
            String script = entry.getKey();
            events.put(script, initializeEventEntry(script, channel));
        }
    }

    private EventEntry initializeEventEntry(String script, ChannelServer channel) {
        ScriptEngine engine = getInvocableScriptEngine("event/" + script + ".js");
        Invocable iv = SynchronizedInvocable.of((Invocable) engine);
        EventManager eventManager = new EventManager(channel, iv, script);
        engine.put(INJECTED_VARIABLE_NAME, eventManager);
        return new EventEntry(iv, eventManager);
    }

    // Is never being called
    public void reload() {
        cancel();
        reloadScripts();
        init();
    }

    public void cancel() {
        active = false;
        for (EventEntry entry : events.values()) {
            entry.em.cancel();
        }
    }

    public void dispose() {
        if (events.isEmpty()) {
            return;
        }

        Set<EventEntry> eventEntries = new HashSet<>(events.values());
        events.clear();

        active = false;
        for (EventEntry entry : eventEntries) {
            entry.em.cancel();
        }
    }
}

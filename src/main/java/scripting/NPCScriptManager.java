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

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import client.MapleCharacter;
import client.MapleClient;
import handling.world.MaplePartyCharacter;
import tools.packet.CWvsContext;

public class NPCScriptManager extends AbstractScriptManager {
   private static final Logger log = LoggerFactory.getLogger(NPCScriptManager.class);
   private static final NPCScriptManager instance = new NPCScriptManager();

   private final Map<MapleClient, NPCConversationManager> cms = new HashMap<>();
   private final Map<MapleClient, Invocable> scripts = new HashMap<>();

   public static NPCScriptManager getInstance() {
      return instance;
   }

   public boolean isNpcScriptAvailable(MapleClient c, String fileName) {
      ScriptEngine engine = null;
      if (fileName != null) {
         engine = getInvocableScriptEngine("npc/" + fileName + ".js", c);
      }

      return engine != null;
   }

   public boolean start(MapleClient c, int npc, MapleCharacter chr) {
      return start(c, npc, -1, chr);
   }

   public boolean start(MapleClient c, int npc, int oid, MapleCharacter chr) {
      return start(c, npc, oid, null, chr);
   }

   public boolean start(MapleClient c, int npc, String fileName, MapleCharacter chr) {
      return start(c, npc, -1, fileName, chr);
   }

   public boolean start(MapleClient c, int npc, int oid, String fileName, MapleCharacter chr) {
      return start(c, npc, oid, fileName, chr, false, "cm");
   }

   //   public boolean start(MapleClient c, ScriptedItem scriptItem, Character chr) {
   //      return start(c, scriptItem.getNpc(), -1, scriptItem.getScript(), chr, true, "im");
   //   }

   public void start(String filename, MapleClient c, int npc, List<MaplePartyCharacter> chrs) {
      try {
         final NPCConversationManager cm = new NPCConversationManager(c, npc, chrs, true);
         cm.dispose();
         if (cms.containsKey(c)) {
            return;
         }
         cms.put(c, cm);
         ScriptEngine engine = getInvocableScriptEngine("npc/" + filename + ".js", c);

         if (engine == null) {
            c.getPlayer().dropMessage(1, "NPC " + npc + " is uncoded.");
            cm.dispose();
            return;
         }
         engine.put("cm", cm);

         Invocable invocable = (Invocable) engine;
         scripts.put(c, invocable);
         try {
            invocable.invokeFunction("start", chrs);
         } catch (final NoSuchMethodException nsme) {
            nsme.printStackTrace();
         }
      } catch (final Exception e) {
         log.error("Error starting NPC script: {}", npc, e);
         dispose(c);
      }
   }

   private boolean start(MapleClient c, int npc, int oid, String fileName, MapleCharacter chr, boolean itemScript,
                         String engineName) {
      try {
         final NPCConversationManager cm = new NPCConversationManager(c, npc, oid, fileName, itemScript);
         if (cms.containsKey(c)) {
            dispose(c);
         }
         if (c.canClickNPC()) {
            cms.put(c, cm);
            ScriptEngine engine = null;
            if (!itemScript) {
               if (fileName != null) {
                  engine = getInvocableScriptEngine("npc/" + fileName + ".js", c);
               }
            } else {
               if (fileName != null) {     // thanks MiLin for drafting NPC-based item scripts
                  engine = getInvocableScriptEngine("item/" + fileName + ".js", c);
               }
            }
            if (engine == null) {
               engine = getInvocableScriptEngine("npc/" + npc + ".js", c);
               cm.resetItemScript();
            }
            if (engine == null) {
               dispose(c);
               return false;
            }
            engine.put(engineName, cm);

            Invocable iv = (Invocable) engine;
            scripts.put(c, iv);
            c.setClickedNPC();
            try {
               iv.invokeFunction("start");
            } catch (final NoSuchMethodException nsme) {
               try {
                  iv.invokeFunction("start", chr);
               } catch (final NoSuchMethodException nsma) {
                  nsma.printStackTrace();
               }
            }
         } else {
            c.announce(CWvsContext.enableActions());
         }
         return true;
      } catch (Exception e) {
         log.error("Error starting NPC script: {}", npc, e);
         dispose(c);

         return false;
      }
   }

   public void action(MapleClient c, byte mode, byte type, int selection) {
      Invocable iv = scripts.get(c);
      if (iv != null) {
         try {
            c.setClickedNPC();
            iv.invokeFunction("action", mode, type, selection);
         } catch (ScriptException | NoSuchMethodException t) {
            if (getCM(c) != null) {
               log.error("Error performing NPC script action for npc: {}", getCM(c).getNpc(), t);
            }
            dispose(c);
         }
      }
   }

   public void dispose(NPCConversationManager cm) {
      MapleClient c = cm.getClient();
      cms.remove(c);
      scripts.remove(c);

      String scriptFolder = (cm.isItemScript() ? "item" : "npc");
      if (cm.getScriptName() != null) {
         resetContext(scriptFolder + "/" + cm.getScriptName() + ".js", c);
      } else {
         resetContext(scriptFolder + "/" + cm.getNpc() + ".js", c);
      }
   }

   public void dispose(MapleClient c) {
      NPCConversationManager cm = cms.get(c);
      if (cm != null) {
         dispose(cm);
      }
   }

   public NPCConversationManager getCM(MapleClient c) {
      return cms.get(c);
   }
}

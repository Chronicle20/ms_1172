/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
package scripting;

import client.MapleClient;
import server.MapleItemInformationProvider;
import server.quest.MapleQuest;

/**
 * @author RMZero213
 */
public class QuestActionManager extends NPCConversationManager {
   private final boolean start; // this is if the script in question is start or end
   private final int quest;

   public QuestActionManager(MapleClient c, int quest, int npc, boolean start) {
      super(c, npc, null);
      this.quest = quest;
      this.start = start;
   }

   public int getQuest() {
      return quest;
   }

   @Override
   public void dispose() {
      QuestScriptManager.getInstance().dispose(this, getClient());
   }

   public boolean forceStartQuest() {
      return forceStartQuest(quest);
   }

   public boolean forceCompleteQuest() {
      return forceCompleteQuest(quest);
   }

   public boolean isStart() {
      return start;
   }

   // For compatibility with some older scripts...
   public void startQuest() {
      forceStartQuest();
   }

   // For compatibility with some older scripts...
   public void completeQuest() {
      forceCompleteQuest();
   }

   @Override
   public void gainMeso(int gain) {
      getPlayer().gainMeso(gain);
   }

   @Override
   public void gainExp(int gain) {
      c.getPlayer().gainExp(gain, true, true, true);
   }
}

export enum SceneCommands {
  BAR_SCENE = "bar_scene",
  SHOP_SCENE = "shop_scene",
  WAREHOUSE_SCENE = "warehouse_scene",
  HOME_SCENE = "home_scene",
  BANK_SCENE = "bank_scene",
  START_ROUTE_SCENE = "start_dungeon_scene",
  END_ROUTE_SCENE = "end_dungeon_scene",
  PLAYER_SCENE = "player_scene",
  INVENTORY_SCENE = "inventory_scene",
  ROUTES_SCENE = "routes_scene"
}

export enum ActionCommands {
  MOVE = "move",
  LOOK = "look",
  ATTACK = "attack",
  RUN = "run",
  REST = "rest",
  DEFENCE = "defence",
  USE_ITEM = "use_item",
  EQUIP_ITEM = "equip_item",
  TAKE_ITEM = "take_item",
  TALK = "talk",
  TRADE = "trade",
  LEARN = "learn",
  CRAFT_ITEM = "craft_item",
  CRAFT_MEDICINE ="craft_medicine",
  ACCEPT_QUEST = "accept_quest",
  COMPLETE_QUEST = "complete_quest",
  START_ROUTE = "start_route",
  STOP_ROUTE = "stop_route",
  BUY_ITEM = "buy_item",
  UNEQUIP_ITEM = "unequip_item"
}

export const GameCommands = {
  ...SceneCommands,
  ...ActionCommands
}

export const gameSceneLabels: {[key: string]: string} = {
  [SceneCommands.BAR_SCENE]: "Бар",
  [SceneCommands.SHOP_SCENE]: "Магазин",
  [SceneCommands.HOME_SCENE]: "Дом",
  [SceneCommands.WAREHOUSE_SCENE]: "Хранилище",
  [SceneCommands.START_ROUTE_SCENE]: "Информация о вылазке",
  [SceneCommands.BANK_SCENE]: "Банк",
  [SceneCommands.END_ROUTE_SCENE]: "Вылазка закончена",
  [SceneCommands.INVENTORY_SCENE]: "Инвентарь",
  [SceneCommands.PLAYER_SCENE]: "Персонаж",
  [SceneCommands.ROUTES_SCENE]: "Вылазки",
};

export const gameActionLabels: {[key: string]: string} = {
  [ActionCommands.MOVE]: "Идти дальше",
  [ActionCommands.LOOK]: "Осмотреться",
  [ActionCommands.REST]: "Разбить лагерь",
  [ActionCommands.ATTACK]: "Атака",
  [ActionCommands.RUN]: "Убежать",
  [ActionCommands.DEFENCE]: "Защита",
  [ActionCommands.EQUIP_ITEM]: "Одеть",
  [ActionCommands.UNEQUIP_ITEM]: "Снять",
  [ActionCommands.BUY_ITEM]: "Купить",
  [ActionCommands.ACCEPT_QUEST]: "Принять",
  [ActionCommands.COMPLETE_QUEST]: "Завершить",
  [ActionCommands.START_ROUTE]: "Начать вылазку",
  [ActionCommands.STOP_ROUTE]: "Закончить вылазку",
  [ActionCommands.USE_ITEM]: "Использовать",
  [ActionCommands.TAKE_ITEM]: "Подобрать",
  [ActionCommands.TALK]: "Поговорить",
  [ActionCommands.TRADE]: "Торговать",
  [ActionCommands.LEARN]: "Изучить",
  [ActionCommands.CRAFT_ITEM]: "Создать",
  [ActionCommands.CRAFT_MEDICINE]: "Сварить",
}

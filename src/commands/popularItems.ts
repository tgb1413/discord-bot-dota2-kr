import * as heroes from "../lib/heroes";
import items, { Item } from "../data/items";

const getItem = (itemId: number): Item => {
  const arrLength = items.length;
  for (let i = 0; i < arrLength; i++) {
    if (items[i].id === itemId) {
      return items[i];
    }
  }
};

type PopularItem = Item & {
  buy: number;
};

const popularItems = (heroId: number) => {
  return heroes.getItemPopularity(heroId).then((resolvedData) => {
    if (resolvedData.start_game_items["0"] === 0) {
      return [[], [], [], []];
    }
    const {
      start_game_items,
      early_game_items,
      mid_game_items,
      late_game_items,
    } = resolvedData;

    const keysStartGameItems = Object.keys(start_game_items).map((element) => {
      return {
        itemId: Number(element),
        buy: start_game_items[element],
      };
    });
    const keysEarlyGameItems = Object.keys(early_game_items).map((element) => {
      return {
        itemId: Number(element),
        buy: early_game_items[element],
      };
    });
    const keysMidGameItems = Object.keys(mid_game_items).map((element) => {
      return {
        itemId: Number(element),
        buy: mid_game_items[element],
      };
    });
    const keysLateGameItems = Object.keys(late_game_items).map((element) => {
      return {
        itemId: Number(element),
        buy: late_game_items[element],
      };
    });

    const resultStartGameItems = keysStartGameItems.map(
      (element): PopularItem => {
        const item = getItem(element.itemId);
        return {
          ...item,
          buy: element.buy,
        };
      }
    );
    const resultEarlyGameItems = keysEarlyGameItems.map(
      (element): PopularItem => {
        const item = getItem(element.itemId);
        return {
          ...item,
          buy: element.buy,
        };
      }
    );
    const resultMidGameItems = keysMidGameItems.map(
      (element): PopularItem => {
        const item = getItem(element.itemId);
        return {
          ...item,
          buy: element.buy,
        };
      }
    );
    const resultLateGameItems = keysLateGameItems.map(
      (element): PopularItem => {
        const item = getItem(element.itemId);
        return {
          ...item,
          buy: element.buy,
        };
      }
    );

    return [
      resultStartGameItems,
      resultEarlyGameItems,
      resultMidGameItems,
      resultLateGameItems,
    ];
  });
};

export default popularItems;

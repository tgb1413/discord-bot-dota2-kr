import dotaAPI from "./api/dotaAPI";

const get = (url: string) => dotaAPI.get("/heroes" + url);

type ItemPopularity = {
  start_game_items: {
    [itemId: number]: number;
  };
  early_game_items: {
    [itemId: number]: number;
  };
  mid_game_items: {
    [itemId: number]: number;
  };
  late_game_items: {
    [itemId: number]: number;
  };
};

export const getItemPopularity = async (
  heroId: number
): Promise<ItemPopularity> => {
  const error: ItemPopularity = {
    start_game_items: {
      0: 0,
    },
    early_game_items: {
      0: 0,
    },
    mid_game_items: {
      0: 0,
    },
    late_game_items: {
      0: 0,
    },
  };

  try {
    const response = await get("/" + heroId + "/itemPopularity");

    if (response.status !== 200) {
      return error;
    } else {
      const result = response.data as ItemPopularity;

      return result;
    }
  } catch (e) {
    return error;
  }
};

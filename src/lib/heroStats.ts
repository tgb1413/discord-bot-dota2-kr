import dotaAPI from "./api/dotaAPI";

const get = () => dotaAPI.get("/heroStats");

type HeroStats = {
  id: number;
  name: string;
  localized_name: string;
  img: string;
  icon: string;
  pro_win: number;
  pro_pick: number;
  hero_id: number;
  pro_ban: number;
  "1_pick": number;
  "1_win": number;
  "2_pick": number;
  "2_win": number;
  "3_pick": number;
  "3_win": number;
  "4_pick": number;
  "4_win": number;
  "5_pick": number;
  "5_win": number;
  "6_pick": number;
  "6_win": number;
  "7_pick": number;
  "7_win": number;
  "8_pick": number;
  "8_win": number;
  turbo_pick: number;
  turbo_win: number;
};

export const getHeroStats = async (heroId: number) => {
  const errorValue = {
    id: 0,
    name: "error",
    localized_name: "error",
    img: "error",
    icon: "error",
    pro_win: 0,
    pro_pick: 0,
    hero_id: 0,
    pro_ban: 0,
    "1_pick": 0,
    "1_win": 0,
    "2_pick": 0,
    "2_win": 0,
    "3_pick": 0,
    "3_win": 0,
    "4_pick": 0,
    "4_win": 0,
    "5_pick": 0,
    "5_win": 0,
    "6_pick": 0,
    "6_win": 0,
    "7_pick": 0,
    "7_win": 0,
    "8_pick": 0,
    "8_win": 0,
    turbo_pick: 0,
    turbo_win: 0,
  };

  try {
    const response = await get();

    if (response.status !== 200) {
      return errorValue;
    } else {
      const result = response.data as Array<HeroStats>;

      for (let i = 0; i < result.length; i++) {
        if (result[i].hero_id === heroId) {
          return result[i];
        }
      }

      return errorValue;
    }
  } catch (e) {
    return errorValue;
  }
};

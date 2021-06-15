import * as heroStats from "../lib/heroStats";

const winRate = (heroId: number, tierId: number) => {
  return heroStats.getHeroStats(heroId).then((resolvedData) => {
    if (resolvedData.name === "error") {
      return -1;
    }
    const { pro_pick, pro_win } = resolvedData;
    // NOTE 키 이름의 맨 앞글자가 숫자라서 일일이 이렇게 했다.
    const heraldPick = resolvedData["1_pick"];
    const guardianPick = resolvedData["2_pick"];
    const crusaderPick = resolvedData["3_pick"];
    const archonPick = resolvedData["4_pick"];
    const legendPick = resolvedData["5_pick"];
    const ancientPick = resolvedData["6_pick"];
    const divinePick = resolvedData["7_pick"];
    const immortalPick = resolvedData["8_pick"];

    const heraldWin = resolvedData["1_win"];
    const guardianWin = resolvedData["2_win"];
    const crusaderWin = resolvedData["3_win"];
    const archonWin = resolvedData["4_win"];
    const legendWin = resolvedData["5_win"];
    const ancientWin = resolvedData["6_win"];
    const divineWin = resolvedData["7_win"];
    const immortalWin = resolvedData["8_win"];

    // 전체 승률
    if (tierId === 0) {
      const totalPick =
        pro_pick +
        heraldPick +
        guardianPick +
        crusaderPick +
        archonPick +
        legendPick +
        ancientPick +
        divinePick +
        immortalPick;

      const totalWin =
        pro_win +
        heraldWin +
        guardianWin +
        crusaderWin +
        archonWin +
        legendWin +
        ancientWin +
        divineWin +
        immortalWin;

      return totalWin / totalPick;
    } else {
      switch (tierId) {
        case 1:
          return heraldWin / heraldPick;
        case 2:
          return guardianWin / guardianPick;
        case 3:
          return crusaderWin / crusaderPick;
        case 4:
          return archonWin / archonPick;
        case 5:
          return legendWin / legendPick;
        case 6:
          return ancientWin / ancientPick;
        case 7:
          return divineWin / divinePick;
        case 8:
          return immortalWin / immortalPick;
        case 9:
          return pro_win / pro_pick;
        default:
          return 0;
      }
    }
  });
};

export default winRate;

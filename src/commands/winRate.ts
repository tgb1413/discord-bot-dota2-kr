import * as heroStats from "../lib/heroStats";

const winRate = (heroId: number) => {
  return heroStats.getHeroStats(heroId).then((resolvedData) => {
    if (resolvedData.name === "error") {
      return [];
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

    const totalWinRate = totalWin / totalPick;
    const heraldWinRate = heraldWin / heraldPick;
    const guardianWinRate = guardianWin / guardianPick;
    const crusaderWinRate = crusaderWin / crusaderPick;
    const archonWinRate = archonWin / archonPick;
    const legendWinRate = legendWin / legendPick;
    const ancientWinRate = ancientWin / ancientPick;
    const divineWinRate = divineWin / divinePick;
    const immortalWinRate = immortalWin / immortalPick;
    const proWinRate = pro_win / pro_pick;

    // NOTE tier 의 아이디와 이 반환 배열의 인덱스를 서로 매핑함.
    // (totalWinRate 는 id : 0 으로 간주)
    return [
      totalWinRate,
      heraldWinRate,
      guardianWinRate,
      crusaderWinRate,
      archonWinRate,
      legendWinRate,
      ancientWinRate,
      divineWinRate,
      immortalWinRate,
      proWinRate,
    ];
  });
};

export default winRate;

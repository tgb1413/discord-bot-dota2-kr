import * as Discord from "discord.js";
import * as dotenv from "dotenv";

import winRate from "./commands/winRate";

import heroes from "./data/heroes";
import tiers from "./data/tiers";

const getHeroId = (name: string) => {
  let heroId = 0;

  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].name.indexOf(name) !== -1) {
      heroId = heroes[i].id;
      break;
    }
  }

  return heroId;
};

const getTierId = (name: string) => {
  let tierId = 0;

  for (let i = 0; i < tiers.length; i++) {
    if (tiers[i].name === name) {
      tierId = tiers[i].id;
    }
  }

  return tierId;
};

dotenv.config();

const client = new Discord.Client();
const token: string = process.env.DISCORD_TOKEN as string;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/**
 * NOTE 명령어
 *
 * 1. /승률
 * /승률/{영웅} : 전체 티어에서의 해당 영웅 승률 보여주기
 * /승률/{영웅}/{티어} : 해당 티어에서의 해당 영웅 승률 보여주기
 *
 * 2.
 */
client.on("message", async (message) => {
  if (message.author.bot) return;

  // 0번 인덱스 : 명령어, 그 후 : 파라미터
  const commands = message.content.split("/");

  if (commands[1] === "승률") {
    const heroId = getHeroId(commands[2]);
    const tierId = getTierId(commands[3]);

    const heroWinRate = await winRate(heroId, tierId);
    if (tierId === 0) {
      message.reply(
        commands[2] +
          "의 전체 승률은 " +
          (heroWinRate * 100).toFixed(2) +
          "% 입니다."
      );
    } else {
      message.reply(
        commands[2] +
          "의 " +
          commands[3] +
          " 티어 승률은 " +
          (heroWinRate * 100).toFixed(2) +
          "% 입니다."
      );
    }
  } else {
    message.reply("업데이트 할 지도");
  }
});

client.login(token);
// 선구자, 수호자, 성전사, 집정관, 전설, 거장, 신, 불멸자

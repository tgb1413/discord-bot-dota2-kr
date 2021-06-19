import { MessageEmbed, Message } from "discord.js";

import winRate from "./commands/winRate";

import heroes, { Hero } from "./data/heroes";
import tiers from "./data/tiers";

const getHeroObject = (name: string) => {
  let heroObject: Hero = { id: 0, name: ["default"], image: "default" };

  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].name.indexOf(name) !== -1) {
      heroObject = heroes[i];
      break;
    }
  }

  return heroObject;
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

const handler = async (
  channel: Message["channel"],
  command: string,
  ...args: string[]
) => {
  let embedMessage = new MessageEmbed().setColor(0xff0000);
  let messageTitle = "도슬람_한국";
  let messageDescription = "";
  let messageFields: { name: string; value: string; inline?: boolean }[] = [];
  let messageImage = "";

  /**
   * NOTE 명령어
   *
   * 1. /승률
   * /승률/{영웅} : 전체 티어에서의 해당 영웅 승률 보여주기
   * /승률/{영웅}/{티어} : 해당 티어에서의 해당 영웅 승률 보여주기
   *
   * 2.
   */
  switch (command) {
    case "도움말":
      messageDescription = "🇰🇷 현재 사용 가능한 명령어\n";
      messageDescription += "1. /도움말 ===> 도움말 출력\n";
      messageDescription += "2. /승률 ===> 승률 검색";
      break;
    case "승률":
      if (typeof args[0] === undefined) {
        messageDescription = "'/승률/도움말'을 입력해보세요.";
      } else if (args[0] === "도움말") {
        messageDescription = "🇰🇷 현재 사용 가능한 명령어\n\n";
        messageDescription += "1. /승률/{영웅} ===> 영웅의 전체 승률 출력\n";
        messageDescription +=
          "2. /승률/{영웅}/{티어} ===> 영웅의 티어별 승률 출력";
      } else {
        const heroObject = getHeroObject(args[0]);
        if (heroObject.id === 0) {
          messageDescription = "검색하고자하는 영웅 이름을 확인해주세요";
          break;
        }

        const heroWinRate = await winRate(heroObject.id);

        messageFields = tiers.map((tier) => {
          return {
            name: tier.name,
            value: (heroWinRate[tier.id] * 100).toFixed(2),
            inline: true,
          };
        });
        messageFields.unshift({
          name: "전체",
          value: (heroWinRate[0] * 100).toFixed(2),
        });
        messageDescription = args[0] + "의 승률입니다.";
        messageImage = heroObject.image;

        embedMessage.addFields(messageFields);
        embedMessage.setImage(messageImage);
      }
      break;
    default:
      messageTitle = "디스코드 봇 '도슬람' 입니다.";
      messageDescription = "'/도움말' 을 입력하세요";
  }

  embedMessage.setTitle(messageTitle);
  embedMessage.setDescription(messageDescription);
  channel.send(embedMessage);
};

export default handler;

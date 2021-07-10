import { MessageEmbed, Message } from "discord.js";

import winRate from "./commands/winRate";
import popularItems from "./commands/popularItems";

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

type MessageField = {
  name: string;
  value: string;
  inline?: boolean;
};

const handler = async (
  channel: Message["channel"],
  command: string,
  ...args: string[]
) => {
  let embedMessage = new MessageEmbed().setColor(0xff0000);
  let messageTitle = "도슬람_한국";
  let messageDescription = "";
  let messageFields: MessageField[] = [{ name: "\u200B", value: "\u200B" }];
  let messageThumbnail = "";

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
      messageDescription = "🇰🇷 현재 사용 가능한 명령어\n\n";
      messageDescription += "1. /도움말 ===> 도움말 출력\n";
      messageDescription += "2. /승률 ===> 승률 검색\n";
      messageDescription += "3. /인기템 ===> 아이템 선호도 검색";
      break;
    case "승률":
      if (typeof args[0] === undefined) {
        messageDescription = "'/승률/도움말'을 입력해보세요.";
      } else if (args[0] === "도움말") {
        messageDescription = "🇰🇷 현재 사용 가능한 명령어\n\n";
        messageDescription += "1. /승률/도움말 ===> 도움말 출력\n";
        messageDescription += "2. /승률/{영웅} ===> 영웅의 전체 승률 출력";
      } else {
        const heroObject = getHeroObject(args[0]);
        if (heroObject.id === 0) {
          messageDescription = "⌨️ 입력한 명령어 : /승률/{영웅}\n\n";
          messageDescription += "검색하고자하는 영웅 이름을 확인해주세요";
          break;
        }

        const heroWinRate = await winRate(heroObject.id);

        messageFields = messageFields.concat({
          name: "전체",
          value: (heroWinRate[0] * 100).toFixed(2),
        });
        messageFields = messageFields.concat(
          tiers.map((tier) => {
            return {
              name: tier.name,
              value: (heroWinRate[tier.id] * 100).toFixed(2),
              inline: true,
            };
          })
        );

        messageDescription = args[0] + "의 승률입니다.";
        messageThumbnail = heroObject.image;

        embedMessage.addFields(messageFields);
        embedMessage.setThumbnail(messageThumbnail);
      }
      break;
    case "인기템":
      // TODO 여기 하던 중
      if (typeof args[0] === undefined) {
        messageDescription = "'/인기템/도움말'을 입력해보세요.";
      } else if (args[0] === "도움말") {
        messageDescription = "🇰🇷 현재 사용 가능한 명령어\n\n";
        messageDescription += "1. /인기템/도움말 ===> 도움말 출력\n";
        messageDescription +=
          "2. /인기템/{영웅}/{시간대} ===> 영웅의 특정 시간대의 인기 아이템 출력";
      } else {
        const heroObject = getHeroObject(args[0]);
        if (heroObject.id === 0) {
          messageDescription = "⌨️ 입력한 명령어 : /인기템/{영웅}/{시간대}\n\n";
          messageDescription += "검색하고자하는 영웅 이름을 확인해주세요";
          break;
        }

        /**
         * NOTE 게임 시기를 저장하는 변수
         * startGameItems : 0
         * earlyGameItems : 1
         * midGameItems : 2
         * lateGameItems : 3
         */
        let time: number = -1;

        switch (args[1]) {
          case "시작":
            time = 0;
            break;
          case "초반":
            time = 1;
            break;
          case "중반":
            time = 2;
            break;
          case "후반":
            time = 3;
            break;
        }

        if (time === -1) {
          messageDescription = "⌨️ 입력한 명령어 : /인기템/{영웅}/{시간대}\n\n";
          messageDescription += "시간대 입력을 확인해주세요.\n";
          messageDescription += "가능한 시간대 입력 : 시작, 초반, 중반, 후반";
          break;
        }

        const heroPopularItems = await popularItems(heroObject.id);

        const tmpMessageFields: {
          name: string;
          value: string;
          inline?: boolean;
        }[] = heroPopularItems[time.toString()].map((element) => {
          return {
            name: element.name,
            value: "구매 횟수 : " + element.buy,
            inline: true,
          };
        });

        messageFields = messageFields.concat(tmpMessageFields);

        messageDescription = args[0] + "의 " + args[1] + " 인기아이템입니다.";
        messageThumbnail = heroObject.image;

        embedMessage.addFields(messageFields);
        embedMessage.setThumbnail(messageThumbnail);
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

import * as Discord from "discord.js";
import * as dotenv from "dotenv";

import handler from "./handler";

dotenv.config();

const client = new Discord.Client();
const token: string = process.env.DISCORD_TOKEN as string;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (message) => {
  if (message.author.bot) return;

  // 0번: empty, 1번 인덱스 : 명령어, 그 후 : 파라미터
  const inputs = message.content.split("/");
  const command = inputs[1];
  const args = inputs.slice(2);

  handler(message.channel, command, ...args);
});

client.login(token);
// 선구자, 수호자, 성전사, 집정관, 전설, 거장, 신, 불멸자

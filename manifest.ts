import { ZenraWorkflow } from "./src/workflow.ts";
import { Manifest } from "deno-slack-sdk/mod.ts";

export default Manifest({
  name: "zenra-bot",
  description: "Zenrize a message",
  icon: "assets/icon.png",
  workflows: [ZenraWorkflow],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "app_mentions:read",
  ],
});

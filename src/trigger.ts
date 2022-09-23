import { Trigger } from "deno-slack-api/types.ts";
import { ZenraWorkflow } from "./workflow.ts";
import env from "../env.ts";

const trigger: Trigger<typeof ZenraWorkflow.definition> = {
  type: "event",
  event: {
    event_type: "slack#/events/app_mentioned",
    channel_ids: [`${env.CHANNEL_ID}`], // TODO: Should use environment variables etc.
  },
  name: "Zenrize a message",
  description: "Starts the workflow to zenrize a message",
  workflow: "#/workflows/zenra",
  "inputs": {
    "text": {
      value: "{{data.text}}",
    },
    "userId": {
      value: "{{data.user_id}}",
    },
    "channelId": {
      value: "{{data.channel_id}}",
    },
  },
};

export default trigger;

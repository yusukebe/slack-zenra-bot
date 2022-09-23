import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { ZenraFunction } from "./functions/zenra.ts";
import { ExtractFunction } from "./functions/extract.ts";

export const ZenraWorkflow = DefineWorkflow({
  callback_id: "zenra",
  title: "Zenra Workflow",
  input_parameters: {
    properties: {
      text: {
        type: Schema.types.string,
      },
      userId: {
        type: Schema.types.string,
      },
      channelId: {
        type: Schema.types.string,
      },
    },
    required: ["text", "userId", "channelId"],
  },
});

const extractStep = ZenraWorkflow.addStep(ExtractFunction, {
  bodyString: ZenraWorkflow.inputs.text,
});

const zenraStep = ZenraWorkflow.addStep(ZenraFunction, {
  stringForZenra: extractStep.outputs.messageString,
});

ZenraWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: ZenraWorkflow.inputs.channelId,
  message: `<@${ZenraWorkflow.inputs.userId}> ${zenraStep.outputs.zenraString}`,
});

export default ZenraWorkflow;

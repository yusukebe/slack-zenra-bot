import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const ZenraFunction = DefineFunction({
  callback_id: "zenra-function",
  title: "Zenra",
  source_file: "src/functions/zenra.ts",
  input_parameters: {
    properties: {
      stringForZenra: {
        type: Schema.types.string,
      },
    },
    required: ["stringForZenra"],
  },
  output_parameters: {
    properties: {
      zenraString: {
        type: Schema.types.string,
      },
    },
    required: ["zenraString"],
  },
});

export default SlackFunction(ZenraFunction, ({ inputs }) => {
  console.log(`zenrizing ${inputs.stringForZenra}.`);
  const zenraString = "全裸で" + inputs.stringForZenra;
  return {
    outputs: { zenraString },
  };
});

import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const ExtractFunction = DefineFunction({
  callback_id: "extract",
  title: "Extract",
  description: "Extract message from body",
  source_file: "src/functions/extract.ts",
  input_parameters: {
    properties: {
      bodyString: {
        type: Schema.types.string,
      },
    },
    required: ["bodyString"],
  },
  output_parameters: {
    properties: {
      messageString: {
        type: Schema.types.string,
      },
    },
    required: ["messageString"],
  },
});

export default SlackFunction(ExtractFunction, ({ inputs }) => {
  console.log(`extract message from ${inputs.bodyString}.`);
  let messageString = "";
  const regExp = /\<\@.+?\>\s?(.+)?/;
  const match = inputs.bodyString.match(regExp);
  if (match) {
    messageString = match[1];
  }
  return {
    outputs: { messageString },
  };
});

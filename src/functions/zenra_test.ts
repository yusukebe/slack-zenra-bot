import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import ZenraFunction from "./zenra.ts";

const { createContext } = SlackFunctionTester("reverse");

Deno.test("Reverse string function test", async () => {
  const inputs = {
    stringForZenra: "おはよう！",
  };
  const { outputs } = await ZenraFunction(createContext({ inputs }));
  assertEquals(outputs?.zenraString, "全裸でおはよう！");
});

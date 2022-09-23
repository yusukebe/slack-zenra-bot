import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import ExtractFunction from "./extract.ts";

const { createContext } = SlackFunctionTester("reverse");

Deno.test("Reverse string function test", async () => {
  const inputs = {
    bodyString: "<@U0LAN0Z89> is it everything a river should be?",
  };
  const { outputs } = await ExtractFunction(createContext({ inputs }));
  assertEquals(outputs?.messageString, "is it everything a river should be?");
});

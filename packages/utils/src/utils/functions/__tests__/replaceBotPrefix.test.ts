import { describe, expect, it } from "vitest";
import { replaceBotPrefix } from "../replaceBotPrefix.js";

const EXPECTED_TOKEN = "ANY_DISCORD_BOT_TOKEN";

describe("Function: replaceBotPrefix", () => {
  it("Returns the original token.", () => expect(EXPECTED_TOKEN).toBe(EXPECTED_TOKEN));

  it("Removes the leading and trailing spaces from the token and returns the original token.", () => {
    expect(replaceBotPrefix(`     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`${EXPECTED_TOKEN}     `)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`     ${EXPECTED_TOKEN}     `)).toBe(EXPECTED_TOKEN);
  });

  it("Removes the 'Bot' prefix with all uppercase or lowercase characters and returns the original token.", () => {
    expect(replaceBotPrefix(`BOT ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`bot ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });

  it("Removes the 'Bot' prefix with mixed lowercase and uppercase characters and returns the original token.", () => {
    expect(replaceBotPrefix(`bOt ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`BoT ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });

  it("Removes the 'Bot' prefix without the space between the prefix and token and returns the original token.", () =>
    expect(replaceBotPrefix(`Bot${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN));

  it("Removes the 'Bot' prefix with many spaces between the prefix and token and returns the original token.", () =>
    expect(replaceBotPrefix(`Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN));

  it("Removes the 'Bot' prefix with leading and trailing spaces from the prefix and returns the original token.", () => {
    expect(replaceBotPrefix(`     Bot ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`     Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });
});

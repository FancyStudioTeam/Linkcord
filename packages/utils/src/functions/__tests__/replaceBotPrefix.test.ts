import { describe, expect, it } from "vitest";
import { replaceBotPrefix } from "../replaceBotPrefix.js";

const EXPECTED_TOKEN = "ANY_DISCORD_BOT_TOKEN";

describe("Function: replaceBotPrefix", () => {
  it("Given a token without the 'Bot' prefix, should return the token without the prefix.", () =>
    expect(EXPECTED_TOKEN).toBe(EXPECTED_TOKEN));

  it("Given a token without the 'Bot' prefix and with either or both leading or trailing spaces in the token, should return the token without the prefix.", () => {
    expect(replaceBotPrefix(`     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`${EXPECTED_TOKEN}     `)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`     ${EXPECTED_TOKEN}     `)).toBe(EXPECTED_TOKEN);
  });

  it("Given a token with either all lowercase or uppercase characters in the 'Bot' prefix, should return the token without the prefix.", () => {
    expect(replaceBotPrefix(`BOT ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`bot ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });

  it("Given a token with mixed uppercase and lowercase characters in the 'Bot' prefix, should return the token without the prefix.", () => {
    expect(replaceBotPrefix(`bOt ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`BoT ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });

  it("Given a token without the space between the 'Bot' prefix and the original token, should return the token without the prefix.", () =>
    expect(replaceBotPrefix(`Bot${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN));

  it("Given a token with many spaces between the 'Bot' prefix and the original token, should return the token without the prefix.", () =>
    expect(replaceBotPrefix(`Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN));

  it("Given a token with either or both leading or trailing spaces in the 'Bot' prefix, should return the token without the prefix.", () => {
    expect(replaceBotPrefix(`     Bot ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`     Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });
});

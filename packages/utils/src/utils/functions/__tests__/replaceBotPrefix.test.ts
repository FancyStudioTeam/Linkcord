import { describe, expect, it } from "vitest";
import { replaceBotPrefix } from "../replaceBotPrefix.js";

/**
 * @remarks
 * - Not a real token. Borrowed from the Discord API documentation.
 */
const EXPECTED_TOKEN = "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs";

describe("Function: replaceBotPrefix", () => {
  it("Returns the original token.", () => expect(EXPECTED_TOKEN).toBe(EXPECTED_TOKEN));

  it("Removes the trailing and leading spaces from the token.", () => {
    expect(replaceBotPrefix(`     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`${EXPECTED_TOKEN}     `)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`     ${EXPECTED_TOKEN}     `)).toBe(EXPECTED_TOKEN);
  });

  it("Removes the token prefix with either all uppercase, all lowercase, or a mixture of both cases.", () => {
    expect(replaceBotPrefix(`BOT ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`bot ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`bOt ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`BoT ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });

  it("Removes the token prefix without the space between the prefix and token.", () =>
    expect(replaceBotPrefix(`Bot${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN));

  it("Removes the trailing and leading spaces from the token prefix.", () => {
    expect(replaceBotPrefix(`     Bot ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
    expect(replaceBotPrefix(`     Bot     ${EXPECTED_TOKEN}`)).toBe(EXPECTED_TOKEN);
  });

  it("Throws a 'TypeError' when the token is not a valid string.", () =>
    // @ts-expect-error
    expect(() => replaceBotPrefix(null)).toThrow("The token is not a valid string."));
});

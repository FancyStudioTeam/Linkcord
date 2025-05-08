import { describe, expect, it } from "vitest";
import { replaceBotPrefix } from "../index.js";

describe("Function: replaceBotPrefix", () => {
  it("Given a token without the 'Bot' prefix, should return the original token.", () => {
    const tokenWithoutPrefix = "ANY_DISCORD_BOT_TOKEN";
    const result = replaceBotPrefix(tokenWithoutPrefix);

    expect(result).toBe(tokenWithoutPrefix);
  });

  it("Given a token without the 'Bot' prefix and with leading or trailing spaces in the token, should return the original token.", () => {
    const tokenWithLeadingSpaces = "     ANY_DISCORD_BOT_TOKEN";
    const tokenWithTrailingSpaces = "ANY_DISCORD_BOT_TOKEN     ";
    const tokenWithLeadingAndTrailingSpaces = "     ANY_DISCORD_BOT_TOKEN     ";

    const resultWithLeadingSpaces = replaceBotPrefix(tokenWithLeadingSpaces);
    const resultWithTrailingSpaces = replaceBotPrefix(tokenWithTrailingSpaces);
    const resultWithLeadingAndTrailingSpaces = replaceBotPrefix(tokenWithLeadingAndTrailingSpaces);

    expect(resultWithLeadingSpaces).toBe("ANY_DISCORD_BOT_TOKEN");
    expect(resultWithTrailingSpaces).toBe("ANY_DISCORD_BOT_TOKEN");
    expect(resultWithLeadingAndTrailingSpaces).toBe("ANY_DISCORD_BOT_TOKEN");
  });

  it("Given a token with either all lowercase or uppercase characters in the 'Bot' prefix, should return the token without the prefix.", () => {
    const uppercaseBotPrefixToken = "BOT ANY_DISCORD_BOT_TOKEN";
    const lowercaseBotPrefixToken = "bot ANY_DISCORD_BOT_TOKEN";

    const resultUppercase = replaceBotPrefix(uppercaseBotPrefixToken);
    const resultLowercase = replaceBotPrefix(lowercaseBotPrefixToken);

    expect(resultUppercase).toBe("ANY_DISCORD_BOT_TOKEN");
    expect(resultLowercase).toBe("ANY_DISCORD_BOT_TOKEN");
  });

  it("Given a token with mixed uppercase and lowercase characters in the 'Bot' prefix, should return the token without the prefix.", () => {
    const tokenWithMixedCasePrefix1 = "bOt ANY_DISCORD_BOT_TOKEN";
    const tokenWithMixedCasePrefix2 = "BoT ANY_DISCORD_BOT_TOKEN";

    const resultMixedCase1 = replaceBotPrefix(tokenWithMixedCasePrefix1);
    const resultMixedCase2 = replaceBotPrefix(tokenWithMixedCasePrefix2);

    expect(resultMixedCase1).toBe("ANY_DISCORD_BOT_TOKEN");
    expect(resultMixedCase2).toBe("ANY_DISCORD_BOT_TOKEN");
  });

  it("Given a token without the space between the 'Bot' prefix and the original token, should return the token without the prefix.", () => {
    const tokenWithoutSpacePrefix = "BotANY_DISCORD_BOT_TOKEN";
    const result = replaceBotPrefix(tokenWithoutSpacePrefix);

    expect(result).toBe("ANY_DISCORD_BOT_TOKEN");
  });

  it("Given a token with many spaces between the 'Bot' prefix and the original token, should return the token without the prefix.", () => {
    const tokenWithManySpacesPrefix = "Bot     ANY_DISCORD_BOT_TOKEN";
    const result = replaceBotPrefix(tokenWithManySpacesPrefix);

    expect(result).toBe("ANY_DISCORD_BOT_TOKEN");
  });

  it("Given a token with leading or trailing spaces in the 'Bot' prefix, should return the token without the prefix.", () => {
    const tokenWithLeadingBotSpaces = "     Bot ANY_DISCORD_BOT_TOKEN";
    const tokenWithTrailingBotSpaces = "Bot     ANY_DISCORD_BOT_TOKEN";
    const tokenWithLeadingAndTrailingBotSpaces = "     Bot     ANY_DISCORD_BOT_TOKEN";

    const resultWithLeadingBotSpaces = replaceBotPrefix(tokenWithLeadingBotSpaces);
    const resultWithTrailingBotSpaces = replaceBotPrefix(tokenWithTrailingBotSpaces);
    const resultWithLeadingAndTrailingBotSpaces = replaceBotPrefix(tokenWithLeadingAndTrailingBotSpaces);

    expect(resultWithLeadingBotSpaces).toBe("ANY_DISCORD_BOT_TOKEN");
    expect(resultWithTrailingBotSpaces).toBe("ANY_DISCORD_BOT_TOKEN");
    expect(resultWithLeadingAndTrailingBotSpaces).toBe("ANY_DISCORD_BOT_TOKEN");
  });
});

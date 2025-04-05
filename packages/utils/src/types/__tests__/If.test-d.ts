import { describe, expectTypeOf, it } from "vitest";
import type { If } from "../index.js";

describe("Types: If", () => {
  it("Should return 'string' when 'TrueResult' is 'true'.", () => {
    type Result = If<true, string, undefined>;

    expectTypeOf<Result>().toEqualTypeOf<string>();
  });

  it("Should return 'undefined' when 'TrueResult' is 'false'.", () => {
    type Result = If<false, string, undefined>;

    expectTypeOf<Result>().toEqualTypeOf<undefined>();
  });

  it("Should return 'null' when 'TrueResult' is 'false' and 'FalseResult' is not given.", () => {
    type Result = If<false, string>;

    expectTypeOf<Result>().toEqualTypeOf<null>();
  });

  it("Should return 'never' when 'Condition' is not a boolean.", () => {
    type Result = If<0, string, undefined>;

    expectTypeOf<Result>().toEqualTypeOf<never>();
  });
});

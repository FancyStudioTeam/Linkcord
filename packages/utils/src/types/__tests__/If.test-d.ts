import { describe, expectTypeOf, it } from "vitest";
import type { If } from "../index.js";

describe("Types: If", () => {
  it("Should return 'string' type when 'TrueResult' is 'true'.", () =>
    expectTypeOf<If<true, string, undefined>>().toEqualTypeOf<string>());

  it("Should return 'undefined' type when 'TrueResult' is 'false'.", () =>
    expectTypeOf<If<false, string, undefined>>().toEqualTypeOf<undefined>());

  it("Should return 'null' type when 'TrueResult' is 'false' and 'FalseResult' is not given.", () =>
    expectTypeOf<If<false, string>>().toEqualTypeOf<null>());
});

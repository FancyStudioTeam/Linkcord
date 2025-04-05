import { describe, expectTypeOf, it } from "vitest";
import type { Nullable } from "../index.js";

describe("Types: Nullable", () =>
  it("Should return 'boolean | null' when giving 'boolean'.", () => {
    type NullableBoolean = Nullable<boolean>;

    expectTypeOf<NullableBoolean>().toEqualTypeOf<boolean | null>();
  }));

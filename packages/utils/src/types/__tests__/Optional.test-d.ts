import { describe, expectTypeOf, it } from "vitest";
import type { Optional } from "../index.js";

describe("Types: Optional", () =>
  it("Should return 'boolean | undefined' when giving 'boolean'.", () => {
    type OptionalBoolean = Optional<boolean>;

    expectTypeOf<OptionalBoolean>().toEqualTypeOf<boolean | undefined>();
  }));

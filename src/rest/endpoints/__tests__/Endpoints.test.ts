import { describe, expect, it } from "vitest";
import { Endpoints } from "../Endpoints.js";

describe("Class: Endpoints", () =>
    it("Expects the object to be frozen.", () => expect(Object.isFrozen(Endpoints)).toBe(true)));

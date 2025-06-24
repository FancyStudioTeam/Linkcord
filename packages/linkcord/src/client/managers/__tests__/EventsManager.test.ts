import { describe, expect, it, vi } from "vitest";
import { EventsManager } from "../EventsManager.js";

describe("Class: EventsManager", () => {
  describe("Method: emit", () =>
    it("Registers an event listener and emits all listeners.", () => {
      const eventsManager = new EventsManager();
      const debugListener = vi.fn();

      eventsManager.register("debug", debugListener);
      eventsManager.register("debug", debugListener);
      eventsManager.emit("debug", "Hello, world!");

      expect(debugListener).toHaveBeenCalledTimes(2);
      expect(debugListener).toHaveBeenCalledWith("Hello, world!");
    }));

  describe("Method: register", () =>
    it("Registers an event listener.", () => {
      const eventsManager = new EventsManager();
      const debugListener = vi.fn();

      eventsManager.register("debug", debugListener);

      expect(eventsManager.listeners.size).toBe(1);
      expect(eventsManager.listeners.get("debug")).toBeInstanceOf(Array);

      expect(debugListener).toHaveBeenCalledTimes(0);
    }));
});

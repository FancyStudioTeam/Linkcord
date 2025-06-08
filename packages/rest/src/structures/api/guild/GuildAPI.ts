import { Mixin } from "ts-mixer";
import { Guild } from "./Guild.js";
import { Soundboard } from "./Soundboard.js";

/**
 * @public
 */
export class GuildAPI extends Mixin(Guild, Soundboard) {}

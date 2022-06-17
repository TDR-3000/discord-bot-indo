import "dotenv/config";
import { Config } from "../interfaces/Config";

let config: Config;

try {
  config = require("../config.json");
} catch (error) {
  config = {
    TOKEN: process.env.TOKEN || "OTUyNTgyMzY0OTUxODgzODU2.GNaUUt.Z7QIWUvc093nKj1SGtuefQUBbH3jUe44Ke3ExM",
    PREFIX: process.env.PREFIX || "!",
    MAX_PLAYLIST_SIZE: parseInt(process.env.MAX_PLAYLIST_SIZE!) || 10,
    PRUNING: process.env.PRUNING === "true" ? true : false,
    STAY_TIME: parseInt(process.env.STAY_TIME!) || 30,
    DEFAULT_VOLUME: parseInt(process.env.DEFAULT_VOLUME!) || 100,
    LOCALE: process.env.LOCALE || "id"
  };
}

export { config };

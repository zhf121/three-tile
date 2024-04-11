import pg from "../package.json";

export const version = pg.version;
export const author = pg.author;

// core
export * from "./tile";
// material
export * from "./material";
// geometry
export * from "./geometry";
// loader
export * from "./loader";
// source
export * from "./source";
// map
export * from "./map";

// build-in plugin
import * as plugin from "./plugin";
export { plugin };

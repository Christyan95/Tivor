import { pt } from "./pt";
import { en } from "./en";

export const dictionaries = {
    pt,
    en,
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof pt;

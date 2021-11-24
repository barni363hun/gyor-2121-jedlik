import { en } from "../locales/en.json";
import { hu } from "../locales/hu.json";

var lang = "en";

export function GetLang() {
  switch (lang) {
    case "en":
      return en;
    case "hu":
      return hu;
    default:
      return en;
  }
}

export function SetLang(language) {
  lang = language;
}

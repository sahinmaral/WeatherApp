import { I18n } from "i18n-js";
import { en, tr } from "./localizations";
import { getLocalizationCodeByLanguageType } from "../helpers/localizationCodeHelper";

function getI18n(language) {
  const i18n = new I18n({ en, tr });
  i18n.enableFallback = true;
  i18n.locale = getLocalizationCodeByLanguageType(language);
  return i18n;
}

export default getI18n;

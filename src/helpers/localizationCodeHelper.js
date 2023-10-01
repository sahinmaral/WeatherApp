import Language from "../enums/LanguageType";

const getLocalizationCodeByLanguageType = (languageType) => {
  switch (languageType) {
    case Language.Turkish:
      return "tr-TR";
    default:
      return "en-US";
  }
};

export { getLocalizationCodeByLanguageType };

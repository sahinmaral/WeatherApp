const getTodayFormattedDate = (i18n) => {
  const date = new Date();

  return `${i18n.t("days")[date.getDay()]} | ${date.toLocaleString(
    i18n.locale,
    {
      month: "long",
    }
  )} ${date.getDate()}`;
};

export { getTodayFormattedDate };

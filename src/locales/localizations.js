const en = {
  loading: "Loading",
  locationServiceDeniedByUserMessage:
    "To use this application, you need to provide location permission. Try closing the app and opening it again",
  settingsHeader: "Settings",
  unitSectionHeader: "UNITS",
  applicationSettingsSectionHeader: "APPLICATION SETTINGS",
  extraSectionHeader: "EXTRA",
  temperatureUnitRow: "Temperature Unit",
  windSpeedUnitRow: "Wind Speed Unit",
  atmosphericPressureUnitRow: "Atmospheric Pressure Unit",
  aboutRow: "About Us",
  authorRow: {
    header: "Author",
    content: "This application was created by Şahin MARAL",
  },
  languageRow: "Language",
  privacyPolicyRow: "Privacy Policy",
  chanceOfRain: "Chance of rain",
  wind: "Wind speed",
  pressure: "Pressure",
  currentDay: "Now",
  rain: "rain",
  humidity: "Humidity",
  rainDoesntKnown: "Unknown",
  languages: {
    ENG: "English",
    TR: "Turkish",
  },
  pressureUnits: {
    mb: "Milibars (mb)",
    atm: "Standart atmosphere (atm)",
    mmHg: "Milimeter of mercury (mmHg)",
    hPa: "Hektopascal (hPa)",
  },
  temperatureUnits: {
    "C°": "Celcius (C°)",
    "F°": "Fahrenheit (F°)",
    "K°": "Kelvin (K°)",
  },
  windSpeedUnits: {
    "km/h": "Kilometers/hour (km/h)",
    "mil/h": "Miles/hour (mil/h)",
    "m/s": "Meters/second (m/s)",
    "ft/s": "Feet/second (ft/s)",
    kt: "Knot (kt)",
  },
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  weatherConditions: {
    Thunderstorm: "Thunderstorm",
    Drizzle: "Drizzle",
    Rain: "Rain",
    Snow: "Snow",
    Atmosphere: "Atmosphere",
    Clear: "Clear",
    Clouds: "Clouds",
  },
  forecastFor7Days: "Forecast for 7 Days",
  multipleCountryWeatherReportMaintenance:
    "Multiple country weather report will be added too soon",
  privacyPolicyMaintenance: "Privacy policy will be added too soon",
  featuresRow: {
    header: "Features",
    currentWeatherRow: {
      header: "Current Weather",
      items: [
        "Temperature: Display the current temperature in degrees Fahrenheit or Celsius.",
        "Weather Condition: Show the current weather conditions (e.g.sunny, cloudy, rainy, snowy).",
        "Wind Speed and Direction: Provide information about the wind speed and direction.",
        "Humidity: Display the current humidity level as a percentage.",
      ],
    },
    hourlyForecast: {
      header: "Hourly Forecast",
      items: [
        "Hourly Temperature: Provide a temperature forecast for the upcoming hours.",
        "Weather Icons: Use icons to represent different weather conditions.",
        "Precipitation: Mention if rain, snow, or other precipitation is expected.",
      ],
    },
    dailyForecast: {
      header: "Daily Forecast",
      items: [
        "Daily High and Low Temperatures: Display the expected high and low temperatures for the day.",
        "Weather Summary: Summarize the day's weather conditions.",
        ,
        "Weather Icons: Use icons to visually represent the weather for each day.",
      ],
    },
    locationSearch: {
      header: "Location Search",
      items: [
        "Allow users to search for weather information in different locations by name or ZIP code.",
      ],
    },
    userSettings: {
      header: "User Settings",
      items: [
        "Provide options for users to customize units (e.g., Fahrenheit or Celsius) and other preferences.",
      ],
    },
  },
  networkError:
    "Error occured during fetching weather data from API. Try closing and reopening application again",
  askPermissions: "Ask location permission again",
};

const tr = {
  loading: "Yükleniyor",
  locationServiceDeniedByUserMessage:
    "Bu uygulamayı kullanabilmek için konum izni vermeniz gerekiyor. Uygulamayı kapatıp tekrar açmayı deneyin",
  settingsHeader: "Ayarlar",
  unitSectionHeader: "BİRİMLER",
  applicationSettingsSectionHeader: "UYGULAMA AYARLARI",
  extraSectionHeader: "EKSTRA",
  languageRow: "Dil",
  temperatureUnitRow: "Sıcaklık Birimi",
  windSpeedUnitRow: "Rüzgar Hızı Birimi",
  atmosphericPressureUnitRow: "Atmosfer Basınç Birimi",
  aboutRow: "Hakkımızda",
  privacyPolicyRow: "Gizlilik Politikası",
  wind: "Rüzgar hızı",
  pressure: "Basınç",
  humidity: "Nem",
  currentDay: "Bugün",
  featuresRow: {
    header: "Özellikler",
    currentWeatherRow: {
      header: "Mevcut Hava",
      items: [
        "Sıcaklık: Mevcut sıcaklığı Fahrenheit veya Celsius derecesi cinsinden gösterme.",
        "Hava Durumu: Mevcut hava koşullarını gösterme (örneğin güneşli, bulutlu, yağmurlu, karlı).",
        "Rüzgar Hızı ve Yönü: Rüzgar hızı ve yönü hakkında bilgi sağlama.",
        "Nem Oranı: Mevcut nem seviyesini yüzde olarak gösterme.",
      ],
    },
    hourlyForecast: {
      header: "Saatlik Hava Durumu",
      items: [
        "Saatlik Sıcaklık: Yaklaşan saatler için sıcaklık tahmini sağlama.",
        "Hava İkonları: Farklı hava koşullarını temsil etmek için simgeler kullanma.",
        "Yağış: Yağmur, kar veya diğer yağışların beklenip beklenmediğini belirtme.",
      ],
    },
    dailyForecast: {
      header: "Günlük Hava Durumu",
      items: [
        "Günlük Yüksek ve Düşük Sıcaklıklar: Günün beklenen yüksek ve düşük sıcaklıklarını gösterme.",
        "Hava Durumu Özeti: Günün hava koşullarını özetleme.",
        "Hava Durumu Simgeleri: Her gün için hava durumunu görsel olarak temsil etmek için simgeler kullanma.",
      ],
    },
    locationSearch: {
      header: "Konum Arama",
      items: [
        "Kullanıcılara isim veya posta koduyla farklı konumlarda hava durumu bilgisi arama izni verin.",
      ],
    },
    userSettings: {
      header: "Kullanıcı Ayarları",
      items: [
        "Kullanıcılara birimleri özelleştirme seçenekleri sunun (örneğin, Fahrenheit veya Celsius) ve diğer tercihler.",
      ],
    },
  },
  authorRow: {
    header: "Yazar",
    content: "Bu uygulama Şahin MARAL tarafndan oluşturulmuştur",
  },
  rain: "yağmur",
  rainDoesntKnown: "Bilinmiyor",
  languages: {
    ENG: "İngilizce",
    TR: "Türkçe",
  },
  chanceOfRain: "Yağmur yağma şansı",
  pressureUnits: {
    mb: "Milibar (mb)",
    atm: "Standart atmosfer (atm)",
    mmHg: "Milimetre cıva (mmHg)",
    hPa: "Hektopaskal (hPa)",
  },
  temperatureUnits: {
    "C°": "Celcius (C°)",
    "F°": "Fahrenheit (F°)",
    "K°": "Kelvin (K°)",
  },
  windSpeedUnits: {
    "km/h": "Kilometre/saat (km/h)",
    "mil/h": "Mil/saat (mil/h)",
    "m/s": "Metre/saniye (m/s)",
    "ft/s": "Feet/saniye (ft/s)",
    kt: "Knot (kt)",
  },
  days: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ],
  weatherConditions: {
    Thunderstorm: "Gök gürültülü fırtına",
    Drizzle: "Çiseleme",
    Rain: "Yağmur",
    Snow: "Kar",
    Atmosphere: "Atmosfer",
    Clear: "Açık",
    Clouds: "Bulutlu",
  },
  forecastFor7Days: "7 Günlük Hava Durumu",
  multipleCountryWeatherReportMaintenance:
    "Çoklu şehir hava durumu yakında eklenecek",
  privacyPolicyMaintenance: "Gizlilik sözleşmesi yakında eklenecek",
  networkError:
    "API dan hava durumu verilerini alırken hata oluştu. Uygulamayı kapatıp tekrar açmayı deneyin",
  askPermissions: "Konum iznini tekrar sorun",
};

export { tr, en };

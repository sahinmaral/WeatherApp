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
  noInternetConnection:
    "To use this application, you have to connect internet. ",
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
  privacyPolicy: {
    intro:
      "WeatherApp is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our app. By using the App, you consent to the practices described in this Privacy Policy.",
    first: {
      header: "1. Information We Collect",
      description:
        "Location Information: We may collect and store your device's GPS coordinates or other location information to provide you with accurate weather forecasts and location-based services. You can disable location services in your device settings, but this may limit certain features of the App.",
    },
    second: {
      header: "2. Disclosure of Your Information",
      descriptionIntro:
        "We may disclose your information in the following circumstances:",
      description:
        "a. Legal Requirements: To comply with applicable laws, regulations, legal processes, or government requests.",
    },
    third: {
      header: "3. Data Security",
      description:
        "We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.",
    },
    forth: {
      header: "4. Children's Privacy",
      description:
        " WeatherApp is designed to be safe for children. We do not knowingly collect personal information from children under the age of 13. The App's features and content are appropriate for users of all ages.",
    },
    contact: {
      header:"5. Contact Us",
      description:
        "If you have any questions or concerns regarding this Privacy Policy, please contact us at",
    },
  },
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
  noInternetConnection:
    "Uygulamayı kullanabilmek için internete bağlanmanız gerekir.",
  privacyPolicy: {
    intro:
      "WeatherApp, gizliliğinizi koruma taahhüdündedir. Bu Gizlilik Politikası, uygulamamızı kullanırken kişisel bilgilerinizi nasıl topladığımızı, kullanığımızı, açıkladığımızı ve koruduğumuzu açıklar. Uygulamayı kullanarak, bu Gizlilik Politikası'nda açıklanan uygulamalara izin vermiş olursunuz.",
    first: {
      header: "1. Topladığımız Bilgiler",
      description:
        "Konum Bilgileri: Hava durumu tahminleri ve konuma dayalı hizmetler sunmak için cihazınızın GPS koordinatlarını veya diğer konum bilgilerini toplayabilir ve saklayabiliriz. Cihazınızdaki ayarlarda konum hizmetlerini devre dışı bırakabilirsiniz, ancak bu, uygulamanın bazı özelliklerini sınırlayabilir.",
    },
    second: {
      header: "2. Bilgilerinizin Paylaşımı",
      descriptionIntro: "Bilgilerinizi aşağıdaki durumlarda açıklayabiliriz:",
      description:
        "a. Hukuki Gereksinimler: Geçerli yasalara, düzenlemelere, hukuki süreçlere veya hükümet taleplerine uygunluk sağlamak amacıyla.",
    },
    third: {
      header: "3. Veri Güvenliği",
      description:
        "Kişisel bilgilerinizi yetkisiz erişime veya ifşaya karşı korumak için makul önlemler alıyoruz. Ancak, lütfen internet üzerinden iletim veya elektronik saklamanın %100 güvenli olmadığını unutmayın.",
    },
    forth: {
      header: "4. Çocukların Gizliliği",
      description:
        "WeatherApp, çocuklar için güvenli olarak tasarlanmıştır. 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Uygulamanın özellikleri ve içeriği tüm yaş grupları için uygundur.",
    },
    contact: {
      header:"5. Bizimle İletişime Geç",
      description:
        "Bu Gizlilik Politikası ile ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen bize şu adresten ulaşın",
    },
  },
};

export { tr, en };

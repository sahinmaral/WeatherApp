# WeatherApp
1. [Türkçe](#weather-app-turkce)
2. [English](#weather-app-english)

<h1 id="weather-app-turkce">WeatherApp</h1>

- Bu proje , kullanıcının telefondaki lokasyonuna göre günlük , üç saat aralıklarla olacak şekilde saatlik ve bir haftalık hava durumu verilerini görüntülemesini sağlayan bir React Native mobil uygulamasıdır. React Native CLI olarak bare React Native kullanılmıştır.
- Kullanıcı , lokasyon iznini verdiği sürece uygulamayı kullanabilmektedir.
- Uygulamayı kullanırken internete bağlanmak zorundadır ve bu durum, anlık olarak kontrol edilmektedir.
- Kullanıcı, hava durumu bilgilerinde yer alan sıcaklık, basınç ve rüzgar hızı bilgilerini ülkesinde kullandığı birime göre değiştirebilir(Sıcaklık için celcius, fahrenheit veya kelvin seçmesi gibi).
- Kullanıcı, uygulamanın dilini değiştirebilir.
- Kullanıcı, ayarlar ekranından uygulama hakkında veya uygulamanın gizlilik politikası hakkında bilgi alabilir.

Tasarım olarak [bu linkte](https://www.figma.com/community/file/1047722264278445552/weather-mobile-app-design) yer alan FIGMA tasarımı kullanılmıştır.

Android işletim sistemli telefonunuzda test etmek için
[linkten](./android/app/build/outputs/apk/release/app-release.apk) APK olarak indirebilirsiniz

## Ekran görüntüleri

<img src="./screenshots/ask_location_service.png" width="200">
<p>Uygulamayı kullanabilmek için konum izni sorması</p>

<img src="./screenshots/denied_location_service.png" width="200">
<p>Konum izni reddedildiği taktirde hata mesajı göndermesi</p>

<img src="./screenshots/location_permission_granted_but_service_disabled_error.png" width="200">
<p>Konum iznini kabul etmesine rağmen ayarlardan konumu açmadığı taktirde hata mesajı göndermesi</p>

<img src="./screenshots/loading.png" width="200">
<p>Konum izni kabul edildikten sonra API ile haberleşirken yükleme ekranı</p>

<img src="./screenshots/homepage.jpg" width="200">
<p>Anasayfa ekranı</p>

<img src="./screenshots/homepage_english.png" width="200">
<p>Anasayfa ekranı - İngilizce</p>

<img src="./screenshots/homepage_extended.jpg" width="200">
<p>7 günlük hava durumu gösterildiğinde Anasayfa ekranı</p>

<img src="./screenshots/homepage_extended_english.png" width="200">
<p>7 günlük hava durumu gösterildiğinde Anasayfa ekranı - İngilizce</p>

<img src="./screenshots/settings.jpg" width="200">
<p>Ayarlar</p>

<img src="./screenshots/settings_english.jpg" width="200">
<p>Ayarlar - İngilizce</p>

<img src="./screenshots/settings_language.jpg" width="200">
<p>Ayarlar - Dil ayarları</p>

<img src="./screenshots/settings_temperature.jpg" width="200">
<p>Ayarlar - Sıcaklık birim ayarları</p>

<img src="./screenshots/settings_windspeed.jpg" width="200">
<p>Ayarlar - Rüzgar hızı birim ayarları</p>

<img src="./screenshots/settings_pressure.jpg" width="200">
<p>Ayarlar - Basınç birim ayarları</p>

<img src="./screenshots/privacyPolicy.jpg" width="200">
<p>Gizlilik sözleşmesi</p>

<img src="./screenshots/about.jpg" width="200">
<p>Hakkımızda</p>


<hr/>

<h1 id="weather-app-english">WeatherApp</h1>

- This project is a React Native mobile application that allows users to view hourly and weekly weather data based on the user's location on their phone, with hourly data available in three-hour intervals. Bare React Native is used as the React Native CLI.
- Users can use the application as long as they grant location permission.
- Internet connectivity is required while using the application, and this status is checked in real-time.
- Users can change the temperature, pressure, and wind speed units in the weather data to match their preferred unit of measurement (e.g., Celsius, Fahrenheit, or Kelvin).
- Users can also change the language of the application.
- Users can access information about the application or its privacy policy from the settings screen.
The design is based on the FIGMA design available at [this link](https://www.figma.com/community/file/1047722264278445552/weather-mobile-app-design)

To test it on an Android device, you can download the APK from [this link](./android/app/build/outputs/apk/release/app-release.apk).

Screenshots
<img src="./screenshots/ask_location_service.png" width="200">
<p>Requesting location permission to use the application</p>
<img src="./screenshots/denied_location_service.png" width="200">
<p>Displaying an error message when location permission is denied</p>
<img src="./screenshots/location_permission_granted_but_service_disabled_error.png" width="200">
<p>Displaying an error message when location permission is granted but location services are disabled in the settings</p>
<img src="./screenshots/loading.png" width="200">
<p>Loading screen while communicating with the API after location permission is granted</p>
<img src="./screenshots/homepage.jpg" width="200">
<p>Homepage</p>
<img src="./screenshots/homepage_english.png" width="200">
<p>Homepage - English</p>
<img src="./screenshots/homepage_extended.jpg" width="200">
<p>Homepage displaying a 7-day weather forecast</p>
<img src="./screenshots/homepage_extended_english.png" width="200">
<p>Homepage displaying a 7-day weather forecast - English</p>
<img src="./screenshots/settings.jpg" width="200">
<p>Settings</p>
<img src="./screenshots/settings_english.jpg" width="200">
<p>Settings - English</p>
<img src="./screenshots/settings_language.jpg" width="200">
<p>Settings - Language settings</p>
<img src="./screenshots/settings_temperature.jpg" width="200">
<p>Settings - Temperature unit settings</p>
<img src="./screenshots/settings_windspeed.jpg" width="200">
<p>Settings - Wind speed unit settings</p>
<img src="./screenshots/settings_pressure.jpg" width="200">
<p>Settings - Pressure unit settings</p>
<img src="./screenshots/privacyPolicy.jpg" width="200">
<p>Privacy Policy</p>
<img src="./screenshots/about.jpg" width="200">
<p>About Us</p>
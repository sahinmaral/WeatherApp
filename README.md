# WeatherApp

- Bu proje , kullanıcının telefondaki lokasyonuna göre günlük , üç saat aralıklarla olacak şekilde saatlik ve bir haftalık hava durumu verilerini görüntülemesini sağlayan bir React Native mobil uygulamasıdır. React Native CLI olarak bare React Native kullanılmıştır.
- Kullanıcı , lokasyon iznini verdiği sürece uygulamayı kullanabilmektedir.
- Uygulamayı kullanırken internete bağlanmak zorundadır ve bu durum, anlık olarak kontrol edilmektedir.
- Kullanıcı, hava durumu bilgilerinde yer alan sıcaklık, basınç ve rüzgar hızı bilgilerini ülkesinde kullandığı birime göre değiştirebilir(Sıcaklık için celcius, fahrenheit veya kelvin seçmesi gibi).
- Kullanıcı, uygulamanın dilini değiştirebilir.
- Kullanıcı, ayarlar ekranından uygulama hakkında veya uygulamanın gizlilik politikası hakkında bilgi alabilir.

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

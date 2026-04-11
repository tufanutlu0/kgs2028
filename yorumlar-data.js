/**
 * YILDIZ KURS - YORUM VERİ DOSYASI
 * ==================================
 * 
 * YENİ YORUM EKLEMEK İÇİN:
 * Aşağıdaki dizinin EN BAŞINA yeni bir obje ekleyin (en yeni yorum en üstte görünür).
 * 
 * Örnek:
 * {
 *     isim: "Veli Adı S.",
 *     sinif: "7. Sınıf Velisi",
 *     program: "LGS Hazırlık",
 *     puan: 5,
 *     yorum: "Yorum metni buraya yazılır."
 * },
 * 
 * NOT: Her yorumun sonuna virgül (,) koymayı unutmayın.
 * NOT: Puanı 1-5 arası verin (5 = 5 yıldız).
 * NOT: "isim" alanında sadece baş harf ve soyadın ilk harfini kullanın (gizlilik için).
 */

var yorumlarData = [
    // ═══════════ ANA SAYFA YORUMLARI (6 adet) ═══════════
    {
        isim: "Ayşe K.",
        sinif: "8. Sınıf Velisi",
        program: "LGS Hazırlık",
        puan: 5,
        yorum: "Oğlum LGS'de 480 puan alarak hayalindeki okula girdi. Hocaların birebir ilgisi ve haftalık deneme sistemi gerçekten fark yarattı."
    },
    {
        isim: "Mehmet T.",
        sinif: "5. Sınıf Velisi",
        program: "İlkokul Etüt",
        puan: 5,
        yorum: "Kızımı ilkokul etüt programına kaydettik. Servis ve yemek imkanı sayesinde iş çıkışı hiç endişelenmiyoruz, çok rahat bir sistem."
    },
    {
        isim: "Fatma Y.",
        sinif: "7. Sınıf Velisi",
        program: "Deneme Kulübü",
        puan: 5,
        yorum: "Dışarıdan sadece deneme sınavına gönderiyorduk. Karne analizleri sayesinde oğlumun eksikleri çok net ortaya çıktı, çok faydalı oldu."
    },
    {
        isim: "Hasan D.",
        sinif: "6. Sınıf Velisi",
        program: "KGS 2028",
        puan: 5,
        yorum: "KGS 2028 programı için Ankara'da tek yer burası. Çocuğumun yeni sınav sistemine erken hazırlanması bizi çok rahatlattı."
    },
    {
        isim: "Zeynep A.",
        sinif: "8. Sınıf Velisi",
        program: "LGS Hazırlık",
        puan: 5,
        yorum: "Kunduz uygulaması ve 7/24 soru çözüm desteği muhteşem. Oğlum artık akşamları bile sorularını çözebiliyor."
    },
    {
        isim: "Ali R.",
        sinif: "Yaz Okulu Velisi",
        program: "Yaz Okulu",
        puan: 5,
        yorum: "Çocuğum yaz okulunda hem eğlendi hem de yaz ödevlerini bitirdi. Yüzme ve satranç etkinlikleri çok güzeldi, gelecek yıl yine gidecek."
    },

    // ═══════════ EK YORUMLAR (20 adet) ═══════════
    {
        isim: "Elif B.",
        sinif: "8. Sınıf Velisi",
        program: "LGS Hazırlık",
        puan: 5,
        yorum: "Kızım 7. sınıfta başladı, şu an 8. sınıfta ilk 500'e girmeyi hedefliyor. Hocalar çok ilgili, sınıf mevcudu az olduğu için birebir ilgi görüyorlar."
    },
    {
        isim: "Mustafa Ö.",
        sinif: "4. Sınıf Velisi",
        program: "İlkokul Etüt",
        puan: 5,
        yorum: "Oğlum etütten çok memnun. Ödevlerini bitirip geliyor, biz evde tekrar ödev stresi yaşamıyoruz. Rehber öğretmenler gerçekten çok ilgili."
    },
    {
        isim: "Derya M.",
        sinif: "8. Sınıf Velisi",
        program: "Özel Ders",
        puan: 5,
        yorum: "Matematik özel dersi aldık. 3 ayda kızımın notu 45'ten 85'e çıktı. Öğretmenimiz konuları çok güzel anlatıyor, teşekkür ederiz."
    },
    {
        isim: "Serkan Y.",
        sinif: "7. Sınıf Velisi",
        program: "KGS 2028",
        puan: 5,
        yorum: "Yeni sınav sistemi hakkında en detaylı bilgiyi burada aldık. Oğlum açık uçlu sorulara çok daha hazır hissediyor artık."
    },
    {
        isim: "Gülşen E.",
        sinif: "3. Sınıf Velisi",
        program: "İlkokul Etüt",
        puan: 5,
        yorum: "Servis hizmeti hayat kurtarıcı. Çocuğumu okuldan alıp kursa getiriyorlar, ben de işime devam edebiliyorum. Yemekler de çok güzel."
    },
    {
        isim: "Burak K.",
        sinif: "8. Sınıf Velisi",
        program: "Deneme Kulübü",
        puan: 4,
        yorum: "Deneme sınavlarının kalitesi çok iyi. Gerçek LGS'ye çok benziyor. Karne analizleri sayesinde hangi konuda eksik olduğunu net görüyoruz."
    },
    {
        isim: "Nurcan S.",
        sinif: "6. Sınıf Velisi",
        program: "Özel Ders",
        puan: 5,
        yorum: "Fen bilimleri özel dersi alıyoruz. Kızım deneyleri çok seviyor, öğretmenimiz konuları görsellerle anlatıyor. Notları gözle görülür şekilde yükseldi."
    },
    {
        isim: "İbrahim Ç.",
        sinif: "Yaz Okulu Velisi",
        program: "Yaz Okulu",
        puan: 5,
        yorum: "İki çocuğumu da yaz okuluna gönderdik. Yüzme öğrendiler, satranç turnuvasına katıldılar. Yazı çok verimli geçirdiler, kesinlikle tavsiye ederim."
    },
    {
        isim: "Hatice G.",
        sinif: "8. Sınıf Velisi",
        program: "LGS Hazırlık",
        puan: 5,
        yorum: "Eğitim koçluğu sistemi harika. Oğlumun motivasyonu düştüğünde koçu hemen devreye girdi. Sadece ders değil, psikolojik destek de veriyorlar."
    },
    {
        isim: "Osman T.",
        sinif: "5. Sınıf Velisi",
        program: "KGS 2028",
        puan: 5,
        yorum: "Erken başlamak çok doğru bir karardı. Kızım yeni yazılı sistemine alıştı bile. Diğer arkadaşlarına göre çok daha rahat hissediyor."
    },
    {
        isim: "Sema A.",
        sinif: "2. Sınıf Velisi",
        program: "İlkokul Etüt",
        puan: 5,
        yorum: "Kızım etüte gitmek için sabırsızlanıyor. Resim ve drama aktivitelerini çok seviyor. Akademik olarak da çok gelişti, öğretmenleri harika."
    },
    {
        isim: "Kadir N.",
        sinif: "7. Sınıf Velisi",
        program: "Deneme Kulübü",
        puan: 5,
        yorum: "Sadece deneme sınavına gönderiyoruz ama aldığımız karne analizi bir kursa kayıtlı gibi detaylı. Video çözüm dersleri de çok faydalı."
    },
    {
        isim: "Pınar H.",
        sinif: "8. Sınıf Velisi",
        program: "LGS Hazırlık",
        puan: 5,
        yorum: "Geçen yıl abisi de burada okudu, Fen lisesine yerleşti. Şimdi kardeşi de aynı hedefe koşuyor. Güvendiğimiz bir kurum, ikinci kez tercih ettik."
    },
    {
        isim: "Emre V.",
        sinif: "8. Sınıf Velisi",
        program: "Özel Ders",
        puan: 4,
        yorum: "Türkçe özel ders aldık. Paragraf sorularında ciddi bir gelişme var. Öğretmenimiz soru çözüm tekniklerini çok iyi öğretti."
    },
    {
        isim: "Aslı F.",
        sinif: "Yaz Okulu Velisi",
        program: "Yaz Okulu",
        puan: 5,
        yorum: "Müze gezisi ve doğa yürüyüşü etkinlikleri çok güzeldi. Çocuğum her akşam heyecanla o günkü maceralarını anlatıyordu. Harika bir yaz geçirdik."
    },
    {
        isim: "Recep D.",
        sinif: "6. Sınıf Velisi",
        program: "KGS 2028",
        puan: 5,
        yorum: "Proje ödevi atölyesi çok işe yaradı. Oğlum artık projelerini kendi başına planlayabiliyor. Bu beceri sadece sınav için değil, hayat için de önemli."
    },
    {
        isim: "Meryem L.",
        sinif: "4. Sınıf Velisi",
        program: "İlkokul Etüt",
        puan: 5,
        yorum: "WhatsApp grubundan gün boyunca fotoğraf paylaşıyorlar, çocuğumun ne yaptığını anlık görebiliyorum. Bu beni çok rahatlatan bir detay."
    },
    {
        isim: "Cengiz B.",
        sinif: "8. Sınıf Velisi",
        program: "LGS Hazırlık",
        puan: 5,
        yorum: "Sınıf mevcudu gerçekten 16 kişi, abartı değil. Oğlum her derste soru sorabiliyor. Kalabalık sınıflarda bu mümkün olmuyor."
    },
    {
        isim: "Sevgi Ü.",
        sinif: "7. Sınıf Velisi",
        program: "Özel Ders",
        puan: 5,
        yorum: "İngilizce özel ders alıyoruz. Kızımın gramer bilgisi çok güçlendi, reading sorularında artık hiç zorlanmıyor. Esnek saat seçeneği de çok iyi."
    },
    {
        isim: "Volkan Ş.",
        sinif: "3. Sınıf Velisi",
        program: "İlkokul Etüt",
        puan: 4,
        yorum: "İlk başta çekingen olan oğlum artık etütte arkadaşlarıyla çok güzel vakit geçiriyor. Hem sosyalleşti hem de dersleri düzeldi. Teşekkürler."
    },
    {
        isim: "Dilek P.",
        sinif: "8. Sınıf Velisi",
        program: "Deneme Kulübü",
        puan: 5,
        yorum: "Türkiye geneli sıralama çok motive edici. Kızım her hafta sıralamasını yükseltmeye çalışıyor, bu ona büyük bir hırs veriyor."
    }
];

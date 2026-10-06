/* ============================================================
   MENÜ VERİSİ — fiyat, içerik ve fotoğrafları sadece buradan düzenleyin.
   img: "images/products/..." klasörüne koyduğunuz dosya yolu.
   price: sayı (örn. 120) → "₺120" yazılır. null ise "Fiyat için sorunuz".
   ============================================================ */
const OLD_SITE = "https://mersincheff-tantuni-inegol.mustafasakus270.chatgpt.site/";

const MENU = [
  { id: "yemekler", title: "Yemekler", items: [
    // { name: "Ürün adı", desc: "İçindekiler", price: 0, img: "images/products/yemekler/urun.png" },
  ]},
  { id: "et-tantuni", title: "Et Tantuni", items: [
    { name: "Dürüm Tantuni",    desc: "İncecik lavaş, taptaze yeşillik ve Mersin usulü ustalık.", price: null, img: "images/products/durum/et-durum.png" },
    { name: "Somun Tantuni",    desc: "Dışı çıtır, içi yumuşak somun ekmeğinde bol malzemeli lezzet.", price: null, img: "images/products/somun/et-somun.png" },
    { name: "Tanburger",        desc: "Kızarmış özel ekmek ve imza sosuyla tantuninin burger yorumu.", price: null, img: "images/products/tanburger/et-tanburger.png" },
    { name: "Yoğurtlu Tantuni", desc: "Sarımsaklı yoğurt, tereyağlı sos ve köz biberle tamamlanan tabak.", price: null, img: "images/products/yogurtlu/et-yogurtlu.png" },
    { name: "Beğendili Tantuni",desc: "Köz patlıcanlı beğendi üzerinde dengeli, yoğun ve unutulmaz tat.", price: null, img: "images/products/begendili/et-begendili.png" }
  ]},
  { id: "tavuk-tantuni", title: "Tavuk Tantuni", items: [
    { name: "Dürüm Tantuni",    desc: "İncecik lavaş, taptaze yeşillik ve Mersin usulü ustalık.", price: null, img: "images/products/durum/tavuk-durum-front-catalog-v2.png" },
    { name: "Somun Tantuni",    desc: "Dışı çıtır, içi yumuşak somun ekmeğinde bol malzemeli lezzet.", price: null, img: "images/products/somun/tavuk-somun-top-catalog-v3.png" },
    { name: "Tanburger",        desc: "Kızarmış özel ekmek ve imza sosuyla tantuninin burger yorumu.", price: null, img: "images/products/tanburger/tavuk-tanburger-front-catalog-v2.png" },
    { name: "Yoğurtlu Tantuni", desc: "Sarımsaklı yoğurt, tereyağlı sos ve köz biberle tamamlanan tabak.", price: null, img: "images/products/yogurtlu/tavuk-yogurtlu-angle-catalog-v2.png" },
    { name: "Beğendili Tantuni",desc: "Köz patlıcanlı beğendi üzerinde dengeli, yoğun ve unutulmaz tat.", price: null, img: "images/products/begendili/tavuk-begendili-top-catalog-v3.png" }
  ]},
  { id: "tatlilar", title: "Tatlılar", items: [] },
  { id: "icecekler", title: "İçecekler", items: [] }
];

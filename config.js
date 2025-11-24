/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Hoàng Sơn  ",
  brideName: "Hà Vy",

  weddingDate: "12/13/2025  11:00:00",
  location: "Trung Tâm Tiệc Cưới Phương Bắc ( Phố Thống Nhất xã Lạc Sơn Tỉnh Phú Thọ) ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/BvypbEqtw4zZ6e72A",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.955323067998!2d105.43763148182327!3d20.466666192939666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134213008783c47%3A0x64af72732d4f0782!2zS2jDoWNoIHPhuqFuIFBoxrDGoW5nIELhuq9j!5e1!3m2!1svi!2s!4v1763969193707!5m2!1svi!2s",
  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/WPy75AEQK-o",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: " Hoàng Sơn",
      parents: "Bố: Nguyễn Quang Trịnh <br>Mẹ: Trần Thị Dương",
      address: "Địa chỉ: Trung Tâm Tiệc Cưới Phương Bắc ( Phố Thống Nhất , xã Lạc Sơn ,Tỉnh Phú Thọ) "
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Hà Vy ",
      parents: "Bố: Mai Sỹ Tuấn<br>Mẹ: Nguyễn Thị Len",
      address: "Địa chỉ: Số nhà 94,Phú Mỹ,Biên Giang,Hà Đông, Hà Nội"
    }
  },
};

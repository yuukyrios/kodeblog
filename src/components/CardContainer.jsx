import React from 'react';
import Card from './Card';

const CardContainer = () => {
  const blogData = [
    {
      title: "Muhammad Mulky Ayyubi Meraih Juara 2 Lomba Speech Albinaa 2025",
      date: "23/04/2025",
      img: "./1.png",
      content: "Muhammad Mulky Ayyubi, siswa Sekolah Developer Indonesia, meraih Juara 2 dalam lomba Speech pada Albinaa Festival Alimpiad 2025 yang diadakan daring pada 20 April 2025. Dengan tema Menghadapi Tantangan Digital di Era Globalisasi, Mulky menunjukkan kemampuan berbicara yang luar biasa dan memberikan solusi kreatif terkait tantangan digital. Prestasinya membuktikan keberhasilan Sekolah Developer Indonesia dalam mengembangkan kemampuan berbicara dan berpikir kritis siswa, serta menginspirasi siswa lain untuk mengembangkan potensi mereka baik di bidang akademik maupun non-akademik."
    },
    {
      title: "Tryout Bulanan Siswa Kodein Menyiapkan Mereka untuk SNBT 2025",
      date: "23/4/2025",
      img: "./2.png",
      content: "Siswa Kodein tengah menjalani tryout bulanan yang dirancang untuk mempersiapkan mereka menghadapi ujian SNBT. Tryout ini bertujuan untuk mengasah kemampuan siswa dalam menghadapi ujian sesungguhnya, dengan berbagai soal yang menantang dan waktu yang terbatas. Selain itu, kegiatan ini juga membantu siswa dalam memahami format ujian yang akan mereka hadapi, sehingga dapat mengurangi rasa cemas dan meningkatkan kepercayaan diri mereka."
    },
    {
      title: "Project Incubator Siswa Kodein Berhasil Mengerjakan Proyek Luar Sekolah",
      date: "23/4/2025",
      img: "./3.png",
      content: "Project Incubator Kodein memberikan kesempatan bagi siswa untuk mengerjakan proyek-proyek yang datang dari luar sekolah. Dengan bimbingan mentor yang berpengalaman, siswa dapat menghasilkan karya-karya luar biasa yang tidak hanya mengasah keterampilan teknis mereka tetapi juga kemampuan manajerial dan kreatif. Program ini menjadi jembatan antara pendidikan dan dunia industri, memberikan pengalaman langsung yang sangat berharga bagi para siswa."
    },
    {
      title: "Siswa Kodein Kunjungi Polbis Bekasi untuk Program Studi Lapangan",
      date: "23/4/2025",
      img: "./4.png",
      content: "Siswa Kodein baru-baru ini melakukan kunjungan ke Polbis Bekasi sebagai bagian dari program studi lapangan mereka. Kunjungan ini bertujuan untuk memberikan wawasan langsung kepada siswa tentang dunia pendidikan tinggi di bidang bisnis dan manajemen. Siswa dapat berdiskusi dengan dosen serta alumni yang sukses, membuka pandangan mereka tentang potensi karir di masa depan."
    },
    {
      title: "Tim Futsal Kodein Ikuti Lomba di Hysteric Festival UNJ 2025",
      date: "23/4/2025",
      img: "./5.png",
      content: "Siswa Kodein berpartisipasi dalam lomba futsal di Hysteric Festival yang diselenggarakan oleh Universitas Negeri Jakarta (UNJ). Tim futsal Kodein menunjukkan semangat juang yang tinggi dalam pertandingan tersebut. Meskipun menghadapi tim-tim tangguh, mereka berhasil menunjukkan kemampuan bermain yang solid, memperlihatkan bahwa olahraga juga merupakan bagian penting dalam pembentukan karakter siswa."
    },
    {
      title: "Siswa Kodein Kunjungi Perpustakaan Nasional Indonesia 2025",
      date: "23/4/2025",
      img: "./6.png",
      content: "Siswa Kodein baru-baru ini mengunjungi Perpustakaan Nasional Indonesia. Kunjungan ini bertujuan untuk memperkenalkan siswa pada sumber daya literasi yang tersedia di perpustakaan terbesar di Indonesia. Selain itu, mereka juga diberikan pengetahuan tentang cara mengakses berbagai jenis literatur dan informasi penting yang dapat membantu dalam pengembangan ilmu pengetahuan dan keterampilan mereka."
    },
    {
      title: "Siswa Kodein Kunjungi UI untuk Memahami Program FTUI 2025",
      date: "23/4/2025",
      img: "./7.png",
      content: "Siswa Kodein mengunjungi Universitas Indonesia (UI) untuk mendalami program Teknik FTUI. Dalam kunjungan ini, siswa diberikan informasi mendalam tentang berbagai program studi yang ditawarkan, fasilitas kampus, serta peluang karir yang tersedia bagi lulusan FTUI. Kegiatan ini memberikan gambaran lebih jelas tentang jalur pendidikan yang dapat mereka ambil setelah lulus dari Kodein."
    },
    {
      title: "Siswa Kodein Melepas Stres dengan Bermain Gokart di Akhir Pekan",
      date: "23/4/2025",
      img: "./8.png",
      content: "Siswa Kodein menyegarkan diri dengan bermain gokart sebagai cara untuk melepaskan stres dan menyegarkan pikiran. Aktivitas gokart ini tidak hanya menyenangkan tetapi juga meningkatkan rasa percaya diri dan kerja sama tim. Siswa dapat menikmati waktu luang mereka dengan penuh kegembiraan, sambil merasakan sensasi berkendara di lintasan yang penuh tantangan."
    },
    {
      title: "Siswa Kodein Belajar Sesuai Minat: Koding atau Multimedia 2025",
      date: "23/4/2025",
      img: "./9.png",
      content: "Siswa Kodein diberi kebebasan untuk memilih bidang yang sesuai dengan minat mereka, yaitu antara koding dan multimedia. Program ini bertujuan untuk memberikan kesempatan kepada siswa untuk mendalami bidang yang paling mereka minati, sambil tetap mendapatkan dasar-dasar keterampilan yang dibutuhkan untuk sukses di industri terkait. Pilihan ini membuka lebih banyak peluang bagi siswa untuk berkembang dalam bidang yang sesuai dengan potensi mereka."
    },
    {
      title: "Program Kampung Inggris untuk Persiapan Dunia Luar Siswa Kodein",
      date: "23/4/2025",
      img: "./10.png",
      content: "Kodein menyelenggarakan program dua bulan di Kampung Inggris atau English Camp, yang dirancang khusus untuk mempersiapkan siswa menghadapi dunia luar. Program ini fokus pada pengembangan kemampuan bahasa Inggris siswa melalui pendekatan praktis, mulai dari percakapan sehari-hari hingga komunikasi bisnis. Dengan menghabiskan waktu di lingkungan yang sepenuhnya berbahasa Inggris, siswa dapat mempercepat kemahiran berbahasa mereka, mempersiapkan mereka untuk berinteraksi di dunia global."
    },
    {
      title: "LDKS: Program Kepemimpinan untuk Siswa Kodein 2025",
      date: "23/4/2025",
      img: "./11.png",
      content: "Program Latihan Dasar Kepemimpinan Siswa (LDKS) dirancang untuk menguatkan jiwa kepemimpinan siswa. Dalam program ini, siswa diberi pelatihan intensif yang mencakup berbagai aspek kepemimpinan, mulai dari keterampilan komunikasi hingga pengambilan keputusan. Program ini bertujuan untuk membentuk generasi pemimpin yang dapat menginspirasi dan memimpin dengan bijak di masa depan."
    },
    {
      title: "Latihan Futsal Rutin Tiap Minggu Siswa Kodein Agar Tidak Jenuh",
      date: "23/4/2025",
      img: "./12.png",
      content: "Siswa Kodein rutin mengikuti latihan futsal setiap minggu sebagai bagian dari kegiatan ekstrakurikuler (eskul). Latihan ini tidak hanya bertujuan untuk meningkatkan keterampilan futsal siswa, tetapi juga untuk menjaga kebugaran fisik mereka. Selain itu, kegiatan ini menjadi cara yang menyenangkan bagi siswa untuk bersosialisasi dan melepaskan penat setelah kegiatan belajar yang padat."
    }
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6" id='blog'>
      {blogData.map((blog, index) => (
        <Card
          key={index}
          title={blog.title}
          date={blog.date}
          img={blog.img}
          content={blog.content}
        />
      ))}
    </div>
  );
};

export default CardContainer;

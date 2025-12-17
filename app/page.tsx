"use client";
import Script from "next/script";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ubuntu } from "@/app/fonts";


export default function Home() {
{/* SPINNER */}
    const pathname = usePathname();
    useEffect(() => {
    // Hilangkan spinner tiap kali halaman selesai render
    const spinner = document.getElementById("spinner");
    if (spinner) spinner.classList.remove("show");
  }, [pathname]);

{/* FACT SECTION */}
    useEffect(() => {
    const counters = document.querySelectorAll(".counter-value");
    counters.forEach(counter => {
      const updateCount = () => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        const current = parseFloat(counter.textContent || "0");
        const increment = target / 200;

        if (current < target) {
          counter.textContent = (current + increment).toFixed(2);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCount();
    });
  }, []);
  return (

    <>
      {/* ================= HTML JSX ================= */}
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status"></div>
      </div>
        {/* Spinner End */}

    <div>
      {/* ================= Navbar ================= */}
      <div className="container-fluid bg-primary fixed-top">
        <div className="container d-flex align-items-center justify-content-between py-2">
          
          {/* Logo */}

        <Link href="/" className="text-white text-decoration-none d-flex align-items-center">
        <h1 className={`${ubuntu.className} fw-bold m-0`}>
            PRGG <span className="text-secondary"> 2025</span>
        </h1>
        </Link>

          {/* Navbar links */}
          <div className="d-flex align-items-center gap-3">
            <Link href="/" className="nav-link text-white px-2">Beranda</Link>
            <Link href="/#latar-belakang" className="nav-link text-white px-2">Latar Belakang</Link>
            <Link href="/#potensi-desa" className="nav-link text-white px-2">Potensi Desa</Link>
            <Link href="/#tentang-kami" className="nav-link text-white px-2">Tentang Kami</Link>
            <Link href="/#komentar" className="nav-link text-white px-2">Komentar</Link>

            {/* Login Button */}
            <Link href="/login" className="btn btn-light text-primary px-3 py-1">
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* ========================================== */}

      {/* Main content 
      <div style={{ paddingTop: "80px" }}>
        <h2>Selamat datang di PRGG 2025</h2>
      </div>
      */}
    </div>

{/* ================= Carousel Start ================= */}
<div className="container-fluid px-0">
  <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
    <ol className="carousel-indicators">
      <li
        data-bs-target="#carouselId"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="First slide"
      ></li>
      <li
        data-bs-target="#carouselId"
        data-bs-slide-to="1"
        aria-label="Second slide"
      ></li>
    </ol>

    <div className="carousel-inner" role="listbox">
      {/* Slide 1 */}
      <div className="carousel-item active">
        <img
          src="/landing/img/carousel-1.jpg"
          className="img-fluid"
          alt="First slide"
        />
        <div className="carousel-caption">
          <div className="container carousel-content">
            <h1 className="text-white display-1 mb-4 animated fadeInRight">
              Pemetaan Potensi Ekonomi Desa
            </h1>
            <p className="mb-4 text-white fs-5 animated fadeInDown">
              Menyajikan informasi potensi ekonomi desa dalam berbagai aspek
              secara terpadu melalui peta interaktif.
            </p>

            <Link
              href="/Ekonomi"
            className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft me-2"
            >
              Produk Ekonomi
            </Link>

            <Link
              href="/qgis_eko"
              className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight ms-2"
            >
              Peta Ekonomi
            </Link>
                        <Link
              href="/data"
              className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight ms-2"
            >
              Grafik Jumlah Pengunjung
            </Link>


{/* Bagian Sumber Data Horizontal */}
{/* Bagian Sumber ekonomi Data Horizontal */}
<div className="mt-5 animated fadeInUp">
  <p className="text-white mb-3 small text-uppercase fw-bold" style={{ letterSpacing: '2px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
    Sumber Data:
  </p>
  <div className="d-flex flex-row justify-content-center align-items-center gap-2 gap-md-4 flex-wrap">
    
    {/* Sumber 1 */}
    <a href="https://bps.go.id" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="/sumber/bps.jpg" alt="BPS" />
      </div>
      <span className="source-label">BPS</span>
    </a>

    {/* Sumber 2 */}
    <a href="https://tanahair.indonesia.go.id/portal-web/" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="/sumber/logobig.png" alt="BIG" />
      </div>
      <span className="source-label">Ina-Geoportal</span>
    </a>

    {/* Sumber 3 */}
    <a href="https://data.dukcapil.kulonprogokab.go.id/" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="sumber/kulon_progo.jpg" alt="Sidutaku" />
      </div>
      <span className="source-label">Sidutaku Kab. Kulon Progo</span>
    </a>

    {/* Sumber 4 */}
    <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="/sumber/osm.png" alt="OSM" />
      </div>
      <span className="source-label">OpenStreetMap</span>
    </a>

  </div>
</div>



          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-item">
        <img
          src="/landing/img/carousel-2.jpg"
          className="img-fluid"
          alt="Second slide"
        />
        <div className="carousel-caption">
          <div className="container carousel-content">
            <h1 className="text-white display-1 mb-4 animated fadeInLeft">
              Pemetaan Potensi Pariwisata Desa
            </h1>
            <p className="mb-4 text-white fs-5 animated fadeInDown">
              Peta interaktif terpadu untuk melihat jenis wisata, persebaran,
              serta daya tarik destinasi wisata yang ada.
            </p>

            <Link
              href="/Pariwisata"
              className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft me-2"
            >
              Produk Pariwisata
            </Link>

            <Link
              href="/qgis_parwi"
              className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight ms-2"
            >
              Peta Pariwisata
            </Link>
            <Link
              href="/data"
              className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight ms-2"
            >
              Grafik Jumlah Pengunjung
            </Link>

{/* Bagian Sumber parwi Data Horizontal */}
<div className="mt-5 animated fadeInUp">
  <p className="text-white mb-3 small text-uppercase fw-bold" style={{ letterSpacing: '2px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
    Sumber Data:
  </p>
  <div className="d-flex flex-row justify-content-center align-items-center gap-2 gap-md-4 flex-wrap">
    
    {/* Sumber 1 */}
    <a href="https://bps.go.id" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="/sumber/bps.jpg" alt="BPS" />
      </div>
      <span className="source-label">BPS</span>
    </a>

    {/* Sumber 2 */}
    <a href="https://tanahair.indonesia.go.id/portal-web/" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="/sumber/logobig.png" alt="BIG" />
      </div>
      <span className="source-label">Ina-Geoportal</span>
    </a>

    {/* Sumber 3 */}
    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="/sumber/googlemaps.jpg" alt="Google Maps" />
      </div>
      <span className="source-label">Google Maps</span>
    </a>

    {/* Sumber 4 */}
    <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer" className="source-link text-decoration-none">
      <div className="source-card">
        <img src="/sumber/osm.png" alt="OSM" />
      </div>
      <span className="source-label">OpenStreetMap</span>
    </a>

  </div>
</div>

          </div>
        </div>
      </div>
    </div>

    {/* Carousel Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselId"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselId"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
{/* ================= Carousel End ================= */}

    {/* FACT SECTION */}
      <div className="container-fluid bg-secondary py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex counter justify-content-center align-items-center">
                <h2 className="me-3 text-primary counter-value" data-target="568.28">0</h2>
                <div className="text-white">
                  <div className="fw-bold fs-5">km²</div>
                  <div className="text-white-50 fs-6">Luas Wilayah Kulon Progo</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-flex counter justify-content-center align-items-center">
                <h2 className="me-3 text-primary counter-value" data-target="4.77">0</h2>
                <div className="text-white">
                  <div className="fw-bold fs-5">Persentase (%)</div>
                  <div className="text-white-50 fs-6">Pertumbuhan Ekonomi 2024</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="d-flex counter justify-content-center align-items-center">
                <h2 className="me-3 text-primary counter-value" data-target="758994">0</h2>
                <div className="text-white">
                  <div className="fw-bold fs-5">Kunjungan</div>
                  <div className="text-white-50 fs-6">Wisata Tahun 2024</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

{/* JavaScript untuk Counter Animation 
<script>
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        // Format angka berdasarkan tipe data
                        if (target === 758994) {
                            // Format dengan titik untuk ribuan
                            counter.textContent = Math.floor(current).toLocaleString('id-ID');
                        } else {
                            // Format dengan koma untuk desimal
                            counter.textContent = current.toFixed(2).replace('.', ',');
                        }
                        setTimeout(updateCounter, 16);
                    } else {
                        // Final value dengan format yang benar
                        if (target === 758994) {
                            counter.textContent = target.toLocaleString('id-ID');
                        } else if (target === 4.77) {
                            counter.textContent = target.toFixed(2).replace('.', ',');
                        } else {
                            counter.textContent = target.toFixed(2).replace('.', ',');
                        }
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
</script>
*/}
{/* CSS untuk ukuran yang tepat 
<style jsx>{`
    .counter {
        padding: 0.75rem 0;
    }
    
    .counter h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0;
        min-width: 100px;
    }
    
    .counter .fs-5 {
        font-size: 1.1rem !important;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }
    
    .counter .fs-6 {
        font-size: 0.95rem !important;
        font-weight: 400;
    }
`}</style>
*/}



        {/* About Start - Diubah menjadi Latar Belakang dengan Background */}
<div id="latar-belakang" className="container-fluid py-4 section-with-bg">
    {/* Background dengan opacity */}
    <div className="section-bg latarbelakang-bg"></div>
    
    <div className="container py-4 section-content">
        <div className="row g-4">
            <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                <div className="h-100 position-relative">
                    <img src="/landing/img/kulonprogo-map.jpg" className="img-fluid w-75 rounded" alt="Peta Kabupaten Kulon Progo" style={{marginBottom: "25%"}}/>
                    <div className="position-absolute w-75" style={{top: "25%", left: "25%"}}>
                        <img src="/landing/img/potensi-desa.jpg" className="img-fluid w-100 rounded" alt="Potensi Desa Kulon Progo"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                <h5 className="text-primary">Latar Belakang</h5>
                <h1 className="mb-3">Pemetaan Potensi Ekonomi dan Pariwisata Desa Kabupaten Kulon Progo</h1>
                
                <p className="mb-2">Perkembangan ekonomi dan kesejahteraan masyarakat di suatu wilayah merupakan indikator penting dalam mengevaluasi kemajuan suatu wilayah. Proses evaluasi ini tentunya harus digali dan diidentifikasi langsung agar dapat digunakan sebagai dasar pengambilan keputusan selanjutnya.</p>
                
                <p className="mb-2">Desa sebagai unit terkecil dalam struktur pemerintahan sendiri menyimpan sumber daya yang beragam, mulai dari sektor pertanian, perkebunan, pariwisata, hingga ekonomi kreatif. Namun, potensi tersebut seringkali belum terdokumentasi secara menyeluruh dalam bentuk peta spasial yang terintegrasi, sehingga informasi masih tersebar dan sulit digunakan untuk mendukung perencanaan pembangunan.</p>
                
                <p className="mb-3">Permasalahan ini juga terlihat nyata di <strong>Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta</strong>, yang memiliki 88 desa dengan beragam potensi pariwisata dan ekonomi, namun sebagian besar data tersebut tersaji dalam format tabular tanpa representasi spasial yang memadai.</p>

                {/* Button trigger modal */}
                <button type="button" className="btn btn-secondary rounded-pill px-4 py-2 text-white" data-bs-toggle="modal" data-bs-target="#latarBelakangModal">
                    Baca Selengkapnya
                </button>
            </div>
        </div>
    </div>
</div>

{/* Modal untuk Detail Latar Belakang */}
<div className="modal fade" id="latarBelakangModal" tabIndex={-1} aria-labelledby="latarBelakangModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header bg-primary text-white">
                <h5 className="modal-title" id="latarBelakangModalLabel">Latar Belakang Penelitian - Pemetaan Potensi Desa Kulon Progo</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <img src="/landing/img/peta-administrasi-kulonprogo.jpg" className="img-fluid rounded shadow-sm" style={{maxHeight: "180px", objectFit: "contain"}}  alt="Peta Administrasi Kulon Progo"/>
                    </div>
                </div>

                {/* Konten Utama */}
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3">
                            <h6 className="text-primary mb-2">1. Konteks Permasalahan</h6>
                            <p className="mb-2">Perkembangan ekonomi dan kesejahteraan masyarakat di suatu wilayah merupakan indikator penting dalam mengevaluasi kemajuan suatu wilayah. Proses evaluasi ini tentunya harus digali dan diidentifikasi langsung agar dapat digunakan sebagai dasar pengambilan keputusan selanjutnya.</p>
                            
                            <p className="mb-2">Desa sebagai unit terkecil dalam struktur pemerintahan sendiri menyimpan sumber daya yang beragam, mulai dari sektor pertanian, perkebunan, pariwisata, hingga ekonomi kreatif. Namun, potensi tersebut seringkali belum terdokumentasi secara menyeluruh dalam bentuk peta spasial yang terintegrasi, sehingga informasi masih tersebar dan sulit digunakan untuk mendukung perencanaan pembangunan.</p>
                        </div>

                        <div className="mb-3">
                            <h6 className="text-primary mb-2">2. Dampak Ketiadaan Peta Spasial</h6>
                            <p className="mb-2">Ketiadaan peta spasial potensi desa dapat berdampak pada proses perencanaan pembangunan. Tanpa adanya gambaran spasial yang komprehensif, pemerintah daerah kesulitan menentukan lokasi prioritas pembangunan. Akibatnya, program pembangunan setiap sektor sering berjalan parsial sehingga tidak optimal.</p>
                            
                            <p className="mb-2">Selain itu, alokasi anggaran pembangunan juga berisiko tidak tepat sasaran karena tidak didukung oleh data spasial yang jelas mengenai distribusi potensi desa. Dampak lain yang muncul adalah minimnya keterlibatan masyarakat karena warga sulit mengenali potensi wilayahnya secara menyeluruh, sehingga partisipasi mereka dalam proses perencanaan desa menjadi terbatas.</p>
                            
                            <p className="mb-2">Potensi ekonomi dan wisata yang belum terpetakan secara spasial juga membuat peluang pengembangan lokal tidak dilakukan secara maksimal.</p>
                        </div>

                        <div className="mb-3">
                            <h6 className="text-primary mb-2">3. Kondisi di Kabupaten Kulon Progo</h6>
                            <p className="mb-2">Permasalahan ini juga terlihat nyata di <strong>Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta</strong>, yang memiliki 88 desa dengan beragam potensi pariwisata dan ekonomi, namun sebagian besar data tersebut tersaji dalam format tabular tanpa representasi spasial yang memadai.</p>
                            
                            <p className="mb-2">Keberadaan destinasi wisata seperti Pantai Glagah, Waduk Sermo, Kalibiru, hingga kawasan perkebunan dan kerajinan masyarakat, menunjukkan bahwa sektor pariwisata berperan penting dalam mendukung perekonomian desa. Selain itu, potensi ekonomi kreatif berbasis produk lokal juga berkembang, namun belum semuanya terpetakan secara spasial.</p>
                        </div>

                        <div className="mb-3">
                            <h6 className="text-primary mb-2">4. Data dan Kondisi Eksisting</h6>
                            <p className="mb-2">Berdasarkan data BPS 2024, hanya <strong>23% desa di Kulon Progo yang memiliki peta potensi</strong>, sementara <strong>67% desa memiliki potensi pariwisata yang belum terdokumentasi secara spasial</strong>. Kondisi ini menunjukkan adanya gap yang signifikan antara ketersediaan data spasial dan kebutuhan perencanaan pembangunan. Akibatnya, penyusunan masterplan pengembangan daerah tidak dapat dilakukan secara terintegrasi.</p>
                        </div>

                        <div className="mb-3">
                            <h6 className="text-primary mb-2">5. Tujuan dan Manfaat Pemetaan</h6>
                            <p className="mb-2">Pemetaan ini diharapkan dapat memberikan gambaran yang lebih jelas mengenai distribusi potensi desa, memudahkan analisis keterkaitan antar wilayah, serta menjadi dasar perencanaan pembangunan yang lebih efektif.</p>
                            
                            <p className="mb-2">Dengan adanya peta spasial, pemerintah daerah maupun masyarakat dapat lebih mudah menyusun program pembangunan desa yang berorientasi pada peningkatan kesejahteraan masyarakat sekaligus menjaga kelestarian lingkungan sesuai prinsip pembangunan berkelanjutan.</p>
                            
                            <p className="mb-2">Pemetaan ini tidak hanya berfungsi sebagai alat representasi visual, tetapi juga sebagai instrumen partisipatif dalam proses perencanaan pembangunan yang melibatkan masyarakat secara langsung (Ismail, 2021).</p>
                        </div>

                        <div className="mb-3">
                            <h6 className="text-primary mb-2">6. Keterkaitan dengan SDGs</h6>
                            <p className="mb-2">Upaya pemetaan potensi desa di Kulon Progo juga sejalan dengan agenda <strong>Sustainable Development Goals (SDGs)</strong>:</p>
                            <ul className="mb-2">
                                <li><strong>SDG 8 (Decent Work and Economic Growth)</strong> - menekankan pentingnya pertumbuhan ekonomi inklusif melalui penciptaan lapangan kerja layak</li>
                                <li><strong>SDG 11 (Sustainable Cities and Communities)</strong> - mendorong pembangunan komunitas yang tangguh dan berkelanjutan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>

{/* CSS untuk Background Sections
<style jsx>{`
    .section-with-bg {
        position: relative;
        overflow: hidden;
    }
    
    .section-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.15;
    }
    
    .section-content {
        position: relative;
        z-index: 1;
    }
    

    .latarbelakang-bg {
        background-image: url('/landing/img/bg-latarbelakang.jpg');
    }
`}</style> */}

{/* About End */}

        {/* Services Start - Diubah menjadi Potensi dengan Background */}
<div id="potensi-desa" className="container-fluid services py-5 mb-0 section-with-bg">
    {/* Background dengan opacity */}
    <div className="section-bg potensi-bg"></div>
    
    <div className="container section-content">
        <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}/>
            <h5 className="text-primary">Potensi Desa</h5>
            <h1>Eksplorasi Potensi Ekonomi dan Pariwisata Desa Kulon Progo</h1>
        </div>
        <div className="row g-5 services-inner justify-content-center">
            
            {/* Potensi Ekonomi */}
            <div className="col-md-6 col-lg-5 wow fadeIn" data-wow-delay=".3s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                            <i className="fas fa-money-bill-wave fa-7x mb-4 text-primary"></i>
                            <h4 className="mb-3">Potensi Ekonomi</h4>
                            <p className="mb-4">Eksplorasi berbagai potensi ekonomi desa meliputi sektor pertanian, perkebunan, industri kreatif, UMKM, dan usaha lokal yang menjadi penggerak perekonomian masyarakat.</p>
                            <button type="button" className="btn btn-secondary text-white px-5 py-3 rounded-pill" data-bs-toggle="modal" data-bs-target="#potensiEkonomiModal">
                                Lihat Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Potensi Pariwisata */}
            <div className="col-md-6 col-lg-5 wow fadeIn" data-wow-delay=".5s">
                <div className="services-item bg-light">
                    <div className="p-4 text-center services-content">
                        <div className="services-content-icon">
                            <i className="fas fa-umbrella-beach fa-7x mb-4 text-primary"></i>
                            <h4 className="mb-3">Potensi Pariwisata</h4>
                            <p className="mb-4">Temukan destinasi wisata unggulan desa mulai dari pantai, waduk, agrowisata, wisata alam, hingga budaya lokal yang menjadi daya tarik wisatawan.</p>
                            <button type="button" className="btn btn-secondary text-white px-5 py-3 rounded-pill" data-bs-toggle="modal" data-bs-target="#potensiPariwisataModal">
                                Lihat Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

{/* Modal untuk Potensi Ekonomi */}
<div className="modal fade" id="potensiEkonomiModal" tabIndex={-1} aria-labelledby="potensiEkonomiModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header bg-primary text-white">
                <h5 className="modal-title" id="potensiEkonomiModalLabel">Detail Potensi Ekonomi Desa Kulon Progo</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
                <div className="text-center mb-4">
                    <i className="fas fa-money-bill-wave fa-4x text-primary mb-3"></i>
                    <h4 className="text-primary">Potensi Ekonomi Desa</h4>
                </div>
                
                <h6 className="text-primary mb-3">1. Sektor Pertanian</h6>
                <p className="mb-3">Kabupaten Kulon Progo memiliki potensi pertanian yang meliputi:</p>
                <ul className="mb-4">
                    <li>Padi sawah dan palawija</li>
                    <li>Hortikultura (sayuran dan buah-buahan)</li>
                    <li>Perkebunan (kelapa, cengkeh, kopi)</li>
                    <li>Tanaman pangan lainnya</li>
                </ul>

                <h6 className="text-primary mb-3">2. Industri Kreatif dan UMKM</h6>
                <p className="mb-3">Berbagai usaha mikro, kecil, dan menengah yang berkembang:</p>
                <ul className="mb-4">
                    <li>Kerajinan tangan dan anyaman</li>
                    <li>Pengolahan hasil pertanian</li>
                    <li>Makanan dan minuman khas</li>
                    <li>Batik dan tenun tradisional</li>
                </ul>

                <h6 className="text-primary mb-3">3. Potensi Perikanan</h6>
                <p className="mb-3">Wilayah pesisir Kulon Progo memiliki potensi perikanan tangkap dan budidaya.</p>

                <h6 className="text-primary mb-3">4. Data Statistik</h6>
                <p className="mb-0">Berdasarkan data terbaru, sektor pertanian masih menjadi tulang punggung perekonomian masyarakat desa di Kulon Progo dengan kontribusi signifikan terhadap PDRB.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>

{/* Modal untuk Potensi Pariwisata */}
<div className="modal fade" id="potensiPariwisataModal" tabIndex={-1} aria-labelledby="potensiPariwisataModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
            <div className="modal-header bg-primary text-white">
                <h5 className="modal-title" id="potensiPariwisataModalLabel">Detail Potensi Pariwisata Desa Kulon Progo</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
                <div className="text-center mb-4">
                    <i className="fas fa-umbrella-beach fa-4x text-primary mb-3"></i>
                    <h4 className="text-primary">Potensi Pariwisata Desa</h4>
                </div>
                
                <h6 className="text-primary mb-3">1. Wisata Alam</h6>
                <p className="mb-3">Destinasi wisata alam unggulan:</p>
                <ul className="mb-4">
                    <li><strong>Pantai Glagah</strong> - Wisata pantai dengan pemandangan indah</li>
                    <li><strong>Waduk Sermo</strong> - Wisata air dan pemancingan</li>
                    <li><strong>Kalibiru</strong> - Wisata alam dan spot foto</li>
                    <li><strong>Puncak Suroloyo</strong> - Wisata pendakian dan sunrise</li>
                </ul>

                <h6 className="text-primary mb-3">2. Wisata Budaya</h6>
                <p className="mb-3">Kekayaan budaya dan tradisi:</p>
                <ul className="mb-4">
                    <li>Upacara adat dan tradisi lokal</li>
                    <li>Kesenian tradisional</li>
                    <li>Kerajinan tangan khas</li>
                    <li>Kuliner tradisional</li>
                </ul>

                <h6 className="text-primary mb-3">3. Agrowisata</h6>
                <p className="mb-3">Wisata berbasis pertanian dan perkebunan:</p>
                <ul className="mb-4">
                    <li>Kebun buah dan sayur</li>
                    <li>Wisata edukasi pertanian</li>
                    <li>Pengolahan hasil pertanian</li>
                </ul>

                <h6 className="text-primary mb-3">4. Aksesibilitas</h6>
                <p className="mb-0">Lokasi strategis dekat dengan Kota Yogyakarta membuat Kulon Progo mudah dijangkau oleh wisatawan domestik maupun mancanegara.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>


{/* Peta Potensi Start */}
<div id="peta-potensi" className="container-fluid py-5 mb-0 section-with-bg">
    {/* <!-- Background dengan opacity --> */}
    <div className="section-bg peta-potensi-bg"></div>
    
    <div className="container section-content">
                <div
                className="text-center mx-auto pb-5 wow fadeIn"
                data-wow-delay=".3s"
                style={{ maxWidth: "800px" }}
                >

            <h5 className="text-primary">Peta Potensi</h5>
            <h1>Peta Potensi Ekonomi dan Pariwisata Desa Kulon Progo</h1>
            <p className="lead">Visualisasi spasial potensi ekonomi dan pariwisata desa untuk mendukung perencanaan pembangunan berkelanjutan</p>
        </div>
        
        <div className="row g-4 justify-content-center">
            {/* <!-- Peta Potensi Ekonomi --> */}
            <div className="col-lg-6 col-md-6 wow fadeIn" data-wow-delay=".3s">
                <div
                className="h-100 p-4 rounded"
                style={{
                    background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%)",
                    borderLeft: "5px solid #4e73df",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    backdropFilter: "blur(10px)",
                }}
>

                    <div className="d-flex align-items-center mb-4">
                        <div className="bg-primary rounded-circle p-3 me-3">
                            <i className="fas fa-chart-line fa-2x text-white"></i>
                        </div>
                        <div>
                            <h4 className="mb-1 text-dark">Peta Potensi Ekonomi</h4>
                            <p className="text-muted mb-0">Visualisasi data ekonomi spasial desa</p>
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="position-relative">
                            <img 
                             src="/assets/eko.png"
                             className="img-fluid rounded" 
                             alt="Peta Potensi Ekonomi Overview" 
                             style={{maxHeight: "200px", width: "100%", objectFit: "cover", }}
                            />
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary" style={{opacity: 0.05, borderRadius: "8px"}}></div>
                        </div>
                    </div>
                    
                    <p className="mb-4">Peta ini menampilkan tiga aspek utama potensi ekonomi desa di Kabupaten Kulon Progo untuk mendukung ketahanan ekonomi lokal dan pembangunan berkelanjutan.</p>
                    
                    <div className="mb-4">
                        <h6 className="text-primary mb-3">Informasi yang Ditampilkan:</h6>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fas fa-dot-circle text-primary mt-1 me-3"></i>
                                <div>
                                    <strong className="d-block">Distribusi Aktivitas Ekonomi</strong>
                                    <small className="text-muted">Sebaran UMKM dan pusat ekonomi per kecamatan</small>
                                </div>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fas fa-dot-circle text-primary mt-1 me-3"></i>
                                <div>
                                    <strong className="d-block">Aksesibilitas Fasilitas Ekonomi</strong>
                                    <small className="text-muted">Kemudahan akses pasar dan jalur utama</small>
                                </div>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fas fa-dot-circle text-primary mt-1 me-3"></i>
                                <div>
                                    <strong className="d-block">Rasio Penduduk Bekerja 2024</strong>
                                    <small className="text-muted">Partisipasi ekonomi berdasarkan estimasi data</small>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center pt-3">
                        <button type="button" className="btn btn-primary px-5 py-3 rounded-pill" data-bs-toggle="modal" data-bs-target="#modalPetaEkonomi">
                            <i className="fas fa-map-marked-alt me-2"></i>Deskripsi
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Peta Potensi Pariwisata --> */}
            <div className="col-lg-6 col-md-6 wow fadeIn" data-wow-delay=".5s">
                <div
                className="h-100 p-4 rounded"
                style={{
                    background:
                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%)",
                    borderLeft: "5px solid #1cc88a",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    backdropFilter: "blur(10px)",
                }}
>

                    <div className="d-flex align-items-center mb-4">
                        <div className="bg-primary rounded-circle p-3 me-3">
                            <i className="fas fa-umbrella-beach fa-2x text-white"></i>
                        </div>
                        <div>
                            <h4 className="mb-1 text-dark">Peta Potensi Pariwisata</h4>
                            <p className="text-muted mb-0">Visualisasi data pariwisata spasial desa</p>
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <div className="position-relative">
                            <img src="/assets/parwi.png" className="img-fluid rounded" alt="Peta Potensi Pariwisata Overview" style={{maxHeight: "200px", width: "100%", objectFit: "cover"}} />
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary" style={{opacity: 0.05, borderRadius: "8px"}}></div>
                        </div>
                    </div>
                    
                    <p className="mb-4">Peta ini menampilkan tiga aspek utama potensi pariwisata desa di Kabupaten Kulon Progo untuk mendukung pengembangan sektor pariwisata berkelanjutan.</p>
                    
                    <div className="mb-4">
                        <h6 className="text-primary mb-3">Informasi yang Ditampilkan:</h6>
                        <ul className="list-unstyled">
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fas fa-dot-circle text-primary mt-1 me-3"></i>
                                <div>
                                    <strong className="d-block">Jenis Wisata dan Popularitas</strong>
                                    <small className="text-muted">Persebaran jenis wisata dan rating destinasi</small>
                                </div>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fas fa-dot-circle text-primary mt-1 me-3"></i>
                                <div>
                                    <strong className="d-block">Aksesibilitas Destinasi Wisata</strong>
                                    <small className="text-muted">Kemudahan akses ke lokasi wisata</small>
                                </div>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fas fa-dot-circle text-primary mt-1 me-3"></i>
                                <div>
                                    <strong className="d-block">Distribusi Jumlah Wisata</strong>
                                    <small className="text-muted">Persebaran destinasi per kecamatan</small>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center pt-3">
                        <button type="button" className="btn btn-primary px-5 py-3 rounded-pill" data-bs-toggle="modal" data-bs-target="#modalPetaPariwisata">
                            <i className="fas fa-map-marked-alt me-2"></i>Deskripsi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Peta Potensi End --> */}
{/* <!-- Modal untuk Peta Potensi Ekonomi --> */}
<div
  className="modal fade"
  id="modalPetaEkonomi"
  tabIndex={-1}
  aria-labelledby="modalPetaEkonomiLabel"
  aria-hidden="true">
    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content wow fadeIn" data-wow-delay=".1s">
            <div className="modal-header bg-primary text-white">
                <h5 className="modal-title" id="modalPetaEkonomiLabel">Detail Peta Potensi Ekonomi Desa Kulon Progo</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
                <div className="text-center mb-4 wow fadeIn" data-wow-delay=".2s">
                    <i className="fas fa-chart-line fa-4x text-primary mb-3"></i>
                    <h4 className="text-primary">Peta Potensi Ekonomi Kabupaten Kulon Progo</h4>
                </div>
                
                <div className="mb-4 wow fadeIn" data-wow-delay=".3s">
                    <h6 className="text-primary mb-3">1. Peta Distribusi Aktivitas Ekonomi</h6>
                    <p className="mb-3">Peta ini menggambarkan tingkat aktivitas ekonomi di setiap kecamatan berdasarkan rasio jumlah UMKM per 1.000 penduduk. Peta ini menampilkan simbologi berupa sebaran titik-titik yang menandai lokasi unit usaha lokasi UMKM atau pusat kegiatan ekonomi seperti pasar dan toko. Sedangkan simbologi berupa gradasi warna menampilkan tingkat kepadatan aktivitas ekonomi yang berpotensi menjadi pusat pertumbuhan ekonomi lokal. Informasi ini dapat digunakan untuk mengidentifikasi tingkat aktivitas ekonomi di setiap wilayah kecamatan.</p>
                </div>

                <div className="mb-4 wow fadeIn" data-wow-delay=".4s">
                    <h6 className="text-primary mb-3">2. Peta Aksesibilitas terhadap Fasilitas Ekonomi (pasar)</h6>
                    <p className="mb-3">Peta aksesibilitas ekonomi menggambarkan tingkat kemudahan bagi suatu wilayah dalam mengakses pasar dan jalur utamanya. Wilayah yang berada dekat dengan pasar atau jalur utama menandakan akses yang baik, sementara wilayah yang jauh menunjukkan keterbatasan akses terhadap pusat ekonomi terdekat. Informasi ini dapat digunakan untuk merencanakan peningkatan infrastruktur aksesibilitas di setiap wilayah kecamatan.</p>
                </div>

                <div className="mb-4 wow fadeIn" data-wow-delay=".5s">
                    <h6 className="text-primary mb-3">3. Peta Rasio Penduduk Bekerja pada tahun 2024</h6>
                    <p className="mb-3">Peta ini menunjukkan rasio penduduk bekerja per kecamatan yang dihitung berdasarkan estimasi jumlah penduduk usia kerja dan jumlah penduduk yang bekerja di tahun 2024. Perbandingan ini memberikan gambaran mengenai tingkat partisipasi ekonomi suatu wilayah, di mana kecamatan dengan rasio lebih tinggi menunjukkan keterlibatan tenaga kerja yang lebih besar dalam aktivitas ekonomi. Informasi ini digunakan untuk melihat kecenderungan wilayah yang memiliki daya dorong ekonomi yang lebih kuat.</p>
                </div>
            </div>
            <div className="modal-footer wow fadeIn" data-wow-delay=".6s">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>

{/* <!-- Modal untuk Peta Potensi Pariwisata --> */}
<div
  className="modal fade"
  id="modalPetaPariwisata"
  tabIndex={-1}
  aria-labelledby="modalPetaPariwisataLabel"
  aria-hidden="true"
>
    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content wow fadeIn" data-wow-delay=".1s">
            <div className="modal-header bg-primary text-white">
                <h5 className="modal-title" id="modalPetaPariwisataLabel">Detail Peta Potensi Pariwisata Desa Kulon Progo</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
                <div className="text-center mb-4 wow fadeIn" data-wow-delay=".2s">
                    <i className="fas fa-umbrella-beach fa-4x text-primary mb-3"></i>
                    <h4 className="text-primary">Peta Potensi Pariwisata Kabupaten Kulon Progo</h4>
                </div>
                
                <div className="mb-4 wow fadeIn" data-wow-delay=".3s">
                    <h6 className="text-primary mb-3">1. Peta Jenis Wisata dan Tingkat Popularitas</h6>
                    <p className="mb-3">Peta ini menunjukkan persebaran jenis wisata yang ada di Kabupaten Kulon Progo. Informasi ini dapat digunakan untuk mengetahui sebaran wisata dalam ruang spasial dan untuk perencanaan wisata sesuai target SDGs. Selain itu, peta ini juga menampilkan tingkat popularitas destinasi wisata berdasarkan rasio antara jumlah penilai dan rating tempat wisata. Ukuran simbol pada peta menggambarkan tingkat popularitas destinasi wisata tersebut. Semakin besar ukuran simbolnya, semakin tinggi tingkat popularitasnya, begitu pula sebaliknya.</p>
                </div>

                <div className="mb-4 wow fadeIn" data-wow-delay=".4s">
                    <h6 className="text-primary mb-3">2. Peta Aksesibilitas Pariwisata</h6>
                    <p className="mb-3">Peta ini menunjukkan tingkat aksesibilitas setiap wilayah kecamatan terhadap destinasi wisata yang ada. Wilayah dengan lokasi wisata yang mudah diakses melalui jalan utama menunjukkan tingkat aksesibilitas pariwisata yang tinggi. Sedangkan wilayah dengan lokasi wisata yang relatif sulit diakses melalui jalan utama menunjukkan tingkat aksesibilitas pariwisata yang terbatas. Informasi ini dapat digunakan untuk menilai sebaran pariwisata pendukung ekonomi dan perencanaan peningkatan akses wisata sesuai target SDGs.</p>
                </div>

                <div className="mb-4 wow fadeIn" data-wow-delay=".5s">
                    <h6 className="text-primary mb-3">3. Peta Jumlah Wisata Per-Kecamatan</h6>
                    <p className="mb-3">Peta ini menunjukkan banyaknya destinasi wisata yang ada di setiap kecamatan di Kabupaten Kulon Progo. Peta ini menampilkan proporsi jumlah dalam bentuk pie chart sehingga perbandingan antar wilayah dapat terlihat dengan lebih jelas. Setiap bagian lingkaran merepresentasikan jumlah objek wisata di kecamatan tersebut. Wilayah dengan jumlah destinasi yang banyak akan memiliki irisan lingkaran yang lebih besar, begitu pula sebaliknya. Informasi ini membantu memahami distribusi potensi wisata sekaligus menunjukkan kecamatan mana yang berpotensi menjadi fokus pengembangan sektor pariwisata daerah.</p>
                </div>
            </div>
            <div className="modal-footer wow fadeIn" data-wow-delay=".6s">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>
        <section
        className="py-5"
        style={{
            backgroundImage: "url('/img/bg-peta-potensi.jpg')",
            backgroundColor: "#f8f9fa",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
  ...
</section>
    {/* CSS untuk Background Potensi
    <style jsx>{`
        .potensi-bg {
            background-image: url('/landing/img/bg-potensi.jpg');
        }
    `}</style>
    */}

{/* Services End */}
        {/* Team*/}
<section id="tentang-kami" className="page-section bg-light">
    <div className="container">
        <div className="text-center mb-5 pt-4">
            <h2 className="section-heading text-uppercase">Tentang Kami</h2>
        </div>

        {/* Dosen Pembimbing */}
        <div className="row justify-content-center mb-4">
            <div className="col-lg-6">
                <div className="team-member-supervisor text-center">
                    <div className="supervisor-badge">Dosen Pembimbing</div>
                    <img className="mx-auto rounded-circle supervisor-img" src="/landing/img/team/Pak_Dedi.jpg" alt="Dedi Atunggal SP, S.T., M.Sc." />
                    <h4 className="mt-3">Dedi Atunggal SP, S.T., M.Sc.</h4>
                    <p className="text-muted">NIP. 197912142005011003</p>
                </div>
            </div>
        </div>

        {/* Garis Pemisah */}
        <div className="row justify-content-center mb-3">
            <div className="col-lg-8">
                <div className="team-divider">
                    <span className="fw-bold text-dark">Tim Mahasiswa</span>
                </div>
            </div>
        </div>

        {/* Mahasiswa - 4 Orang Berjejer Rapi */}
        <div className="row justify-content-center mb-5">
            
            {/* Mahasiswa 1 */}
            <div className="col-lg-3 col-md-6">
                <div className="team-member text-center">
                    <img className="mx-auto rounded-circle student-img" src="/landing/img/team/rara.jpg" alt="Arif Muhammad Ibadurahman" />
                    <h4 className="mt-3">Arif Muhammad Ibadurahman</h4>
                    <p className="text-muted">22/505441/TK/55312</p>
                </div>
            </div>

            {/* Mahasiswa 2 */}
            <div className="col-lg-3 col-md-6">
                <div className="team-member text-center">
                    <img className="mx-auto rounded-circle student-img" src="/landing/img/team/enzal.jpg" alt="Aufa Ashilah Januar Irfani" />
                    <h4 className="mt-3">Aufa Ashilah Januar Irfani</h4>
                    <p className="text-muted">22/504632/TK/55206</p>
                </div>
            </div>

            {/* Mahasiswa 3 */}
            <div className="col-lg-3 col-md-6">
                <div className="team-member text-center">
                    <img className="mx-auto rounded-circle student-img" src="/landing/img/team/lintang.jpg" alt="Razaky Farkhan Rakijan Martawigena" />
                    <h4 className="mt-3">Razaky Farkhan Rakijan Martawigena</h4>
                    <p className="text-muted">22/495043/TK/54364</p>
                </div>
            </div>

            {/* Mahasiswa 4 */}
            <div className="col-lg-3 col-md-6">
                <div className="team-member text-center">
                    <img className="mx-auto rounded-circle student-img" src="/landing/img/team/intan.jpg" alt="Veronika Yola Aditya" />
                    <h4 className="mt-3">Veronika Yola Aditya</h4>
                    <p className="text-muted">22/493426/TK/54052</p>
                </div>
            </div>

        </div>
    </div>
</section>
 {/* CSS untuk Background Sections 
<style jsx>{`
    
    .team-member-supervisor {
        position: relative;
        padding: 2rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        border: 2px solid #6c757d;
    }

    .supervisor-badge {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background: #6c757d;
        color: white;
        padding: 5px 20px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 0.9rem;
        box-shadow: 0 2px 5px rgba(108,117,125,0.3);
    }

    .supervisor-img {
        width: 180px;
        height: 180px;
        object-fit: cover;
        border: 4px solid #6c757d;
        box-shadow: 0 5px 15px rgba(108,117,125,0.2);
        transition: all 0.3s ease;
    }

    .supervisor-img:hover {
        transform: scale(1.05);
    }

    .student-img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 3px solid #6c757d;
        box-shadow: 0 3px 10px rgba(108,117,125,0.2);
        transition: all 0.3s ease;
    }

    .student-img:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(108,117,125,0.3);
    }

    .team-member {
        padding: 1.5rem;
        background: white;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        height: 100%;
    }

    .team-member:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .team-divider {
        position: relative;
        text-align: center;
        margin: 1rem 0;
    }

    .team-divider::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 0px;
        background: transparent;
    }

    .team-divider span {
        background: white;
        padding: 0 2rem;
        color: #000000;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1.1rem;
    }

    .team-member h4 {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }

    .team-member p.text-muted {
        margin-bottom: 0.25rem;
        font-size: 0.9rem;
    }


    @media (max-width: 768px) {
        .supervisor-img {
            width: 150px;
            height: 150px;
        }
        
        .student-img {
            width: 120px;
            height: 120px;
        }
        
        .team-member {
            margin-bottom: 2rem;
        }
        
        .team-divider span {
            padding: 0 1rem;
            font-size: 1rem;
        }
    }

    @media (max-width: 576px) {
        .supervisor-img {
            width: 130px;
            height: 130px;
        }
        
        .student-img {
            width: 100px;
            height: 100px;
        }
        
        .team-member h4 {
            font-size: 1.1rem;
        }
        
        .team-member p.text-muted {
            font-size: 0.8rem;
        }
    }
`}</style>
*/}


        {/* Contact Start */}
        <div id="komentar" className="container-fluid py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth:"600px"}}>
                    <h5 className="text-primary">Komentar</h5>
                    <h1 className="mb-3">Kritik dan Saran</h1>
                </div>
                <div className="text-center">
                <a
                    href="https://forms.gle/ISI_LINK_GFORM_KAMU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-primary text-white py-3 px-5">
                    Link Gform Kuisioner
                </a>
                </div>

                <div className="contact-detail position-relative p-4 p-md-5">
                    
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="p-4 p-md-5 h-100 rounded contact-map">
                                <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.424123293283!2d110.1569869749957!3d-7.858054392179816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a569bb4b7f7c9%3A0x7f56c36a0b5a5a5a!2sKantor%20Bupati%20Kulon%20Progo!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid" style={{border:0, minHeight:"300px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="p-4 p-md-5 rounded contact-form">
                                <div className="mb-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Nama"/>
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control border-0 py-3" placeholder="Email"/>
                                </div>
                                <div className="mb-4">
                                    <textarea className="w-100 form-control border-0 py-3" rows={6} cols={10} placeholder="Pesan"></textarea>
                                </div>
                                <div className="text-start">
                                    <button className="btn bg-primary text-white py-3 px-5" type="button">Kirim Pesan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        {/* Contact End */}
        
        {/* Footer Start */}
<div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
    <div className="container pt-4 pb-4">
        <div className="row align-items-center">
            {/* Logo UGM dan Deskripsi */}
            <div className="col-lg-8 mx-auto">
                <div className="row align-items-center">
                    {/* Logo UGM */}
                    <div className="col-md-3 text-center text-md-start">
                        <img src="/landing/img/logo-ugm.png" alt="Universitas Gadjah Mada" className="img-fluid" style={{maxHeight: "120px", width: "auto"}}/>
                    </div>
                    
                    {/* Deskripsi */}
                    <div className="col-md-9 text-center text-md-start">
                        <h5 className="text-white mb-2">Department of Geodetic Engineering</h5>
                        <p className="text-light mb-1">Faculty of Geodetic Engineering Universitas Gadjah Mada</p>
                        <p className="text-light mb-0">Jl. Grafika no.2 Bulaksumur, Yogyakarta, 55281</p>
                    </div>
                </div>
            </div>
        </div>
        
        <hr className="text-light mt-3.5 mb-3.5"/>
        
        {/* Copyright 
        <div className="row">
            <div className="col-12 text-center">
                <span className="text-white">Copyright <i className="fas fa-copyright me-1"></i> PRGG 2025 - Teknik Geodesi UGM</span>
            </div>
        </div>
          */}
    </div>
</div>
{/* Footer End */}



    </>
  );
}

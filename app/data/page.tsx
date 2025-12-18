"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link"; // Tambahkan import Link
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const Radar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Radar), {
  ssr: false,
});

export default function RadarPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/kunjungan", { cache: "no-store" });
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        Loading grafik...
      </div>
    );
  }

  const labels = [
    "Temon", "Wates", "Panjatan", "Galur", "Lendah", "Sentolo",
    "Pengasih", "Kokap", "Girimulyo", "Nanggulan", "Kalibawang", "Samigaluh"
  ];

  const nilai = labels.map((kec) => {
    const row = data.find((d) => d.kecamatan === kec);
    return row ? row.jumlah : 0;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Jumlah Kunjungan",
        data: nilai,
        borderWidth: 2,
        backgroundColor: "rgba(75,192,192,0.3)",
        borderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      minHeight: "100vh", 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      backgroundColor: "#f4f7f6",
      position: "relative" // Penting untuk posisi absolute tombol edit
    }}>
      
      {/* TOMBOL EDIT DATA DI POJOK KANAN ATAS */}
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <Link href="/admin" style={{
          textDecoration: "none",
          backgroundColor: "#2c7a7b",
          color: "white",
          padding: "10px 18px",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "600",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          transition: "background 0.3s"
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#235e5f")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2c7a7b")}
        >
          ⚙️ Edit Data by Halaman Admin
        </Link>
      </div>

      {/* KONTEN UTAMA */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h1 style={{ marginBottom: "30px", textAlign: "center", color: "#333" }}>
          Dashboard Kunjungan Wisata Kulon Progo
        </h1>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          
          {/* KOLOM 1: GRAFIK RADAR */}
          <div style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", width: "450px" }}>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Visualisasi Radar</h3>
            <Radar data={chartData} options={{ scales: { r: { beginAtZero: true } } }} />
          </div>

          {/* KOLOM 2: DETAIL ANGKA */}
          <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", width: "250px", maxHeight: "500px", overflowY: "auto" }}>
            <h3 style={{ borderBottom: "2px solid #4bc0c0", paddingBottom: "10px" }}>Data Per Wilayah</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {labels.map((label, index) => (
                <li key={label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", fontSize: "14px" }}>
                  <span>{label}</span>
                  <strong style={{ color: "#2c7a7b" }}>{nilai[index].toLocaleString()}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: INFORMASI INSTANSI */}
          <div style={{ background: "#fff", padding: "25px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", width: "300px", textAlign: "center" }}>
            <h3 style={{ marginBottom: "15px" }}>Sumber Data</h3>
            <div style={{ width: "100px", height: "100px", backgroundColor: "#eee", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid #f4f7f6" }}>
              <img src="/assets/dinpar_kp.jpg" alt="Logo" style={{ width: "70%" }} />
            </div>
            <h4 style={{ margin: "5px 0" }}>Dinas Pariwisata</h4>
            <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5" }}>
              Data kunjungan resmi yang diolah untuk keperluan analisis spasial wilayah Kulon Progo.
            </p>
            <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px", fontSize: "12px", textAlign: "left" }}>
              <strong>Kontak:</strong><br/>
              Wates, Kulon Progo, DIY
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: DISCLAIMER & COPYRIGHT */}
      <footer style={{ 
        backgroundColor: "#333", 
        color: "#fff", 
        padding: "20px", 
        textAlign: "center",
        marginTop: "40px"
      }}>
        <p style={{ margin: "5px 0", fontSize: "15px", fontWeight: "bold", letterSpacing: "0.5px" }}>
          © 2025 PRGG Teknik Geodesi - Universitas Gadjah Mada
        </p>
      </footer>

    </div>
  );
}
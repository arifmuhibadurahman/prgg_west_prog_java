"use client";

export default function QgisMap() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Peta QGIS */}
      <iframe
        src="/qgis_eko/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />

      {/* Footer / Disclaimer Overlay */}
      <div style={{
        position: "absolute",
        bottom: "20px", // Diturunkan sedikit dari sebelumnya
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Lebih transparan agar tidak terlalu mencolok
        padding: "4px 12px", // Padding diperkecil
        borderRadius: "15px",
        pointerEvents: "none", 
        textAlign: "center",
        zIndex: 10,
        whiteSpace: "nowrap"
      }}>
        <p style={{ 
            margin: 0, 
            fontSize: "11px", // Font lebih kecil
            fontWeight: "600", // Tebal sedang agar tetap terbaca
            letterSpacing: "0.3px", 
            color: "#444" 
        }}>
          © 2025 PRGG Teknik Geodesi - Universitas Gadjah Mada
        </p>
      </div>
    </div>
  );
}
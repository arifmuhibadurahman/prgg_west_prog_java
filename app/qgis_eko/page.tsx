"use client";

export default function QgisMap() {
  return (
    <iframe
      src="/qgis_eko/index.html"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        overflow: "hidden"
      }}
    />
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";


const ekonomiList = [
  {
    nama: "Geblek Pari Nanggulan",
    gambar: "/assets_eko/geblek-pari-nanggulan.png",
    href: "https://www.google.com/maps/search/?api=1&query=Geblek+Pari+Nanggulan+Kulon+Progo",
  },
  {
    nama: "Mukarabi Craft",
    gambar: "/assets_eko/mukarabi_craft.png",
    href: "https://www.google.com/maps/search/?api=1&query=Mukarabi+Craft+Kulon+Progo",
  },
  {
    nama: "Pasar Nini Thowok",
    gambar: "/assets_eko/PASAR_NINITHOWOK.png",
    href: "https://www.google.com/maps/search/?api=1&query=Pasar+Nini+Thowok+Kulon+Progo",
  },
  {
    nama: "Pasar Wates",
    gambar: "/assets_eko/pasar_wates.png",
    href: "https://www.google.com/maps/place/Pasar+Wates+Kulon+Progo",
  },
];

export default function PariwisataPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-8 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Potensi UMKM & Ekonomi Kabupaten Kulon Progo
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ekonomiList.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.gambar}
                alt={item.nama}
                width={600}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.nama}
                </h2>
                  <motion.div
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full 
                              bg-gradient-to-r from-blue-500 to-sky-400 text-white text-sm font-medium
                              shadow-md"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <MapPin size={16} />
                    Lihat Lokasi
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.div>

              </div>
            </motion.div>
          </a>
        ))}
      </div>

      <p className="text-center mt-12 text-gray-600">
        🌿 Dukung produk lokal dan UMKM Kabupaten Kulon Progo untuk ekonomi berkelanjutan.
      </p>
                <div className="mt-6 flex flex-col items-center justify-center text-center gap-2 opacity-80">
            <Image
              src="/dispar_jogja.png"
              alt="Dinas Pariwisata Daerah Istimewa Yogyakarta"
              width={120}
              height={60}
              className="object-contain"
            />
            <p className="text-sm text-gray-500">
              Sumber Referensi: <span className="font-medium">
                Dinas Pariwisata Daerah Istimewa Yogyakarta
              </span>
            </p>
          </div>
    </div>
  );
}
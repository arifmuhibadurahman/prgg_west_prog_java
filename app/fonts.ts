import { Poppins, Ubuntu } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

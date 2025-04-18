import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import WhatsappContact from "./components/Whatsapp";
import { AuthProvider } from "./context/authContext"; // Import AuthProvider


const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`} suppressHydrationWarning>
        <AuthProvider> {/* Wrap the entire app in AuthProvider */}
          <div className="flex flex-col min-h-screen">
            {/* Navigation Menu (Add your Navbar component here) */}
            {/* <Navbar /> */}

            {/* Main content area */}
            <main className="flex-grow">{children}</main>

            {/* WhatsApp Contact Component */}
            <WhatsappContact />

            {/* Sticky Footer (Optional: Add Footer Component) */}
           
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Amana Transportation</h2>
            <p className="text-sm text-emerald-100 mt-2">
              Reliable, safe, and eco-friendly transportation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-emerald-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebook className="hover:text-emerald-300 transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter className="hover:text-emerald-300 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="hover:text-emerald-300 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedin className="hover:text-emerald-300 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 my-6"></div>

        {/* Bottom copyright */}
        <p className="text-center text-sm text-emerald-200">
          &copy; {new Date().getFullYear()} Amana Transportation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

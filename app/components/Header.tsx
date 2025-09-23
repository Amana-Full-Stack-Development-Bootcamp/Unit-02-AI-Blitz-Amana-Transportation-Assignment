import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-100 bg-emerald-900 text-white shadow-lg border-b border-emerald-700">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/ammana-logo.png"
            alt="Amana Logo"
            className="h-16 w-16 drop-shadow-lg bg-transparent"
          />
          <span className="text-xl font-bold tracking-wide">
            Amana Transportation
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Routes", "Contact", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-emerald-300 transition-colors duration-200 font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

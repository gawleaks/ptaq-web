import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="ml-2 text-lg font-bold text-gray-900">PTAQ</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Wydawnictwo specjalizujące się w książkach o ptakach dla dzieci.
              Edukujemy przez fascynację naturą.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Nasze Serie
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ptaq-3"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  PTAQ 3+
                </Link>
              </li>
              <li>
                <Link
                  href="/ptaq-6"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  PTAQ 6+
                </Link>
              </li>
              <li>
                <Link
                  href="/ptaq-uczy"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  PTAQ Uczy
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Informacje
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/o-nas"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/regulamin"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  Regulamin
                </Link>
              </li>
              <li>
                <Link
                  href="/prywatnosc"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Kontakt
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>kontakt@ptaq.eu</p>
              <p>ul. Przykładowa 123</p>
              <p>00-000 Warszawa</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} PTAQ. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

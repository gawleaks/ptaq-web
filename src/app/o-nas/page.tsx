export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">O nas</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6">
            PTAQ to seria, która narodziła się z pasji do natury i przekonania,
            że edukacja ekologiczna powinna być fascynująca i dostępna dla
            wszystkich dzieci.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nasza misja
          </h2>
          <p className="text-gray-700 mb-4">
            Wierzymy, że dzieciom należy się najlepsza literatura, która nie
            tylko bawi, ale również edukuje. Nasze książki łączą naukę z
            przygodą, pomagając młodym czytelnikom odkryć piękno świata ptaków i
            zrozumieć, jak ważne jest jego chronienie.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Dlaczego ptaki?
          </h2>
          <p className="text-gray-700 mb-4">
            Ptaki to fascynujące stworzenia, które można spotkać wszędzie - w
            mieście, na wsi, w lesie i nad wodą. Obserwacja ptaków rozwija u
            dzieci cierpliwość, spostrzegawczość i szacunek dla przyrody. To
            idealni bohaterowie opowieści, które uczą i inspirują.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nasze serie
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                PTAQ 3+
              </h3>
              <p className="text-blue-800">
                Seria dla najmłodszych czytelników, pełna kolorowych ilustracji
                i prostych opowieści o ptasich przyjaciołach.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                PTAQ 6+
              </h3>
              <p className="text-green-800">
                Bardziej złożone historie i ciekawostki dla młodych badaczy,
                którzy chcą głębiej poznać świat ornitologii.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nasze wartości
          </h2>
          <div className="bg-yellow-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🌿</span>
                <span>
                  <strong>Ekologia:</strong> Promujemy szacunek dla natury i
                  ochronę środowiska
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">📚</span>
                <span>
                  <strong>Edukacja:</strong> Łączymy naukę z zabawą w przystępny
                  sposób
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">👨‍👩‍👧‍👦</span>
                <span>
                  <strong>Rodzina:</strong> Tworzymy książki, które łączą
                  pokolenia
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">🎨</span>
                <span>
                  <strong>Jakość:</strong> Dbamy o wysoką jakość treści i
                  ilustracji
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Zespół
          </h2>
          <p className="text-gray-700 mb-4">
            Za powstaniem PTAQ stoją pasjonaci natury, doświadczeni pedagodzy i
            utalentowani ilustratorzy. Nasz zespół składa się z ornitologów,
            pisarzy, ilustratorów i edytorów, którzy wspólnie tworzą wyjątkowe
            książki dla dzieci.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dołącz do społeczności PTAQ
            </h3>
            <p className="text-gray-700 mb-4">
              Chcesz być częścią naszej misji? Skontaktuj się z nami, aby
              dowiedzieć się więcej o współpracy, warsztatach dla dzieci czy
              spotkaniach autorskich.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Kontakt</h1>
          <p className="text-xl text-gray-600">
            Masz pytania? Chcesz nawiązać współpracę? Skontaktuj się z nami!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Informacje kontaktowe
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">kontakt@ptaq.eu</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Adres</h3>
                <p className="text-gray-600">
                  ul. Przykładowa 123
                  <br />
                  00-000 Warszawa
                  <br />
                  Polska
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Godziny pracy</h3>
                <p className="text-gray-600">
                  Poniedziałek - Piątek: 9:00 - 17:00
                  <br />
                  Weekend: Odpowiadamy na emaile
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Dla nauczycieli
            </h2>
            <p className="text-gray-700 mb-4">
              Jesteś nauczycielem i chcesz wykorzystać nasze książki w edukacji?
              Napisz do nas - chętnie pomożemy w przygotowaniu materiałów
              dydaktycznych.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Oferujemy:</strong>
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>• Rabaty dla szkół</li>
              <li>• Materiały dla nauczycieli</li>
              <li>• Spotkania autorskie</li>
              <li>• Warsztaty ornitologiczne</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Dołącz do społeczności PTAQ
            </h2>
            <p className="text-gray-600">
              Obserwuj nas w mediach społecznościowych, aby być na bieżąco z
              nowościami wydawniczymi i ciekawostkami o ptakach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

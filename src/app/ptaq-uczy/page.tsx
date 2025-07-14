export default function PtaqUczyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">PTAQ Uczy</h1>
          <p className="text-xl text-gray-600 mb-8">
            Seria edukacyjna z materiałami dydaktycznymi dla nauczycieli i
            rodziców
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Już wkrótce!
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Pracujemy nad nową serią PTAQ Uczy, która będzie zawierać:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Przewodniki dla nauczycieli</li>
            <li>• Karty pracy dla dzieci</li>
            <li>• Gry edukacyjne o ptakach</li>
            <li>• Materiały do zajęć terenowych</li>
            <li>• Poradniki dla młodych ornitologów</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Chcesz być na bieżąco z nowościami? Skontaktuj się z nami!
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
}

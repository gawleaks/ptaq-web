import BookCarousel from "@/components/BookCarousel";
import { ptaq6PlusBooks } from "@/lib/books";

export default function Ptaq6Page() {
  return (
    <div className="min-h-screen">
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">PTAQ 6+</h1>
          <p className="text-xl text-gray-600 mb-8">
            Głębsze poznawanie świata ptaków dla młodych badaczy i ornitologów
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Seria PTAQ 6+ to bardziej zaawansowane historie i ciekawostki o
            ptakach. Młodzi czytelnicy poznają tajemnice ornitologii, dowiadują
            się o migracjach, budowie gniazd i fascynujących zachowaniach
            naszych skrzydlatych przyjaciół.
          </p>
        </div>
      </section>

      <BookCarousel
        title="Książki z serii PTAQ 6+"
        books={ptaq6PlusBooks}
        className="bg-background"
      />
    </div>
  );
}

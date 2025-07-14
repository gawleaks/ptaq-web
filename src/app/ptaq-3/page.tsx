import BookCarousel from "@/components/BookCarousel";
import { ptaq3PlusBooks } from "@/lib/books";

export default function Ptaq3Page() {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">PTAQ 3+</h1>
          <p className="text-xl text-gray-600 mb-8">
            Pierwsze przygody z ptakami dla najmłodszych odkrywców natury
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Seria PTAQ 3+ została stworzona specjalnie dla maluchów, którzy
            dopiero zaczynają swoją przygodę z książkami. Proste opowieści,
            kolorowe ilustracje i sympatyczni ptasi bohaterowie wprowadzą dzieci
            w fascynujący świat natury.
          </p>
        </div>
      </section>

      <BookCarousel
        title="Książki z serii PTAQ 3+"
        books={ptaq3PlusBooks}
        className="bg-background"
      />
    </div>
  );
}

import BookCarousel from "@/components/BookCarousel";
import { Button } from "@/components/ui/button";
import { ptaq3PlusBooks, ptaq6PlusBooks } from "@/lib/books";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-green-50/20 to-yellow-50/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Odkryj fascynujący{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                świat ptaków
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              PTAQ to seria książek o ptakach dla dzieci. Nasze serie uczą
              fascynacji naturą i rozbudzają ciekawość świata.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/ptaq-3">Seria PTAQ 3+</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/ptaq-6">Seria PTAQ 6+</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PTAQ 3+ Section */}
      <BookCarousel
        title="PTAQ 3+"
        subtitle="Pierwsze przygody z ptakami - książki dla najmłodszych odkrywców natury"
        books={ptaq3PlusBooks}
        className="bg-background"
      />

      {/* PTAQ 6+ Section */}
      <BookCarousel
        title="PTAQ 6+"
        subtitle="Głębsze poznawanie świata ptaków - dla młodych badaczy i ornitologów"
        books={ptaq6PlusBooks}
        className="bg-gray-50"
      />

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Dlaczego PTAQ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Wierzymy, że edukacja ekologiczna powinna być fascynująca i
              dostępna dla wszystkich. Nasze książki łączą naukę z przygodą,
              pomagając dzieciom odkryć piękno natury i zrozumieć, jak ważne
              jest jej chronienie.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/o-nas">Dowiedz się więcej o nas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

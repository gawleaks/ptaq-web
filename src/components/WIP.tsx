import Image from "next/image";

export function WorkInProgress() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="absolute inset-0 overflow-hidden">
        {/* Clouds */}
        <div className="absolute top-10 left-10 w-24 h-12 bg-white/60 rounded-full blur-sm"></div>
        <div className="absolute top-20 right-20 w-32 h-16 bg-white/50 rounded-full blur-sm"></div>
        <div className="absolute top-32 left-1/3 w-20 h-10 bg-white/40 rounded-full blur-sm"></div>

        {/* Birds silhouettes */}
        <div className="absolute top-16 right-1/4 text-4xl opacity-20 animate-pulse">
          <Image
            src="/pigeon.png"
            alt="Pigeon"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        <div className="absolute top-40 left-1/4 text-3xl opacity-15 animate-pulse delay-1000">
          <Image
            src="/swift.png"
            alt="Swift"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        <div className="absolute bottom-32 right-16 text-5xl opacity-10 animate-pulse delay-2000">
          <Image
            src="/owl.png"
            alt="Owl"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 left-8 w-16 h-16 bg-yellow-200/30 rounded-full blur-md"></div>
        <div className="absolute bottom-1/4 right-8 w-20 h-20 bg-green-200/30 rounded-full blur-md"></div>
        <div className="absolute top-1/2 left-4 w-12 h-12 bg-blue-200/40 rounded-full blur-md"></div>
      </div>

      {/* Main content */}
      <div className="text-center relative z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 drop-shadow-sm">
          Już wkrótce
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 drop-shadow-sm">
          PTAQ nadlatuje... Nasza strona jest w budowie.
        </p>

        {/* Subtle decorative element under text */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-60"></div>
        </div>
      </div>
    </main>
  );
}

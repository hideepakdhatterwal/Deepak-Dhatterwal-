export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-xl">

        <h1 className="text-6xl font-bold text-yellow-400">
          Deepak Dhatterwal
        </h1>

        <p className="text-white text-2xl mt-5">
          Indian Actor • Performer • Storyteller
        </p>

        <div className="mt-8 flex gap-5 justify-center">

          <button className="bg-yellow-500 px-6 py-3 rounded-full font-semibold">
            Portfolio
          </button>

          <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full">
            Showreel
          </button>

        </div>

      </div>
    </section>
  );
}
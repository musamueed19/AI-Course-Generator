import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-100/70">
      <div className="mx-auto max-w-screen-xl px-2 sm:px-4 py-20 lg:flex lg:items-center">
        <div className="mx-auto w-full sm:max-w-5xl text-center">
          <h1 className="text-3xl font-extrabold text-primary sm:text-5xl">
            AI Course Generator
            <p className="font-extrabold text-2xl sm:text-4xl text-black sm:block">
              Custom Learning Paths, Powered by AI
            </p>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

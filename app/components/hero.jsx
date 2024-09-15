import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen bg-gradient-to-b from-white to-blue-200"
    >
      <div className="mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 text-5xl font-bold text-gray-800 md:text-6xl">
            Оценка курсов онлайн
          </h1>
          <p className="text-l mb-6 text-gray-500">
            Платформа для анализа и оценки качества курсов по ключевым
            параметрам: теория, практика, преподавание, технологии и
            актуальность.
          </p>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <button className="rounded-xl bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600">
              Узнать больше
            </button>
            <Link
              href="/#courses"
              className="rounded-xl border-2 border-blue-500 px-6 py-3 text-blue-500 transition duration-300 hover:bg-blue-500/20"
            >
              Найти курс
            </Link>
          </div>
        </div>
        <Image
          src="/hero-section.png"
          alt="about pandas"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

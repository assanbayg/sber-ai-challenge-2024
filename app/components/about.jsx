export const About = () => {
  return (
    <section
      id="about"
      className="flex h-screen bg-gradient-to-b from-blue-200 to-white px-10"
    >
      <div className="mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:gap-x-20">
        <div className="text-center md:w-2/5 md:text-left">
          <p className="mb-4 text-xl font-bold text-blue-500 md:text-2xl">
            Ваш гид в мире онлайн-образования{" "}
          </p>
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Добро пожаловать на платформу анализа качества учебных курсов!
          </h1>
          <p className="text-l mb-6 text-gray-500">
            Наша платформа предоставляет возможность объективной оценки курсов
            по таким параметрам, как качество теории и практики, преподавание,
            актуальность и технологии.
          </p>
        </div>
        <div className="text-center md:w-2/5 md:text-left">
          <p className="mb-4 text-xl font-bold md:text-3xl">Мы помогаем:</p>
          <ul className="list-inside list-disc">
            <li className="text-l mb-6 list-disc">
              <strong>Учителям </strong>
              узнать, какие аспекты их курса требуют улучшения — будь то
              содержание материала, способы его подачи или использование
              технологий.
            </li>
            <li className="text-l mb-6 list-disc">
              <strong>Ученикам </strong>
              выбрать курсы, которые соответствуют их целям и ожиданиям,
              основываясь на честных и детализированных отзывах.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

import { CoursesCatalogue } from "./courses-catalogue";

export const Courses = () => {
  return (
    <section
      id="courses"
      className="flex justify-center bg-gradient-to-b from-white from-50% to-blue-200"
    >
      <div className="flex flex-col">
        <div className="text-center text-gray-500">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Каталог курсов
          </h1>
          <p>Ознакомьтесь с подборкой образовательных программ.</p>
          <p>Используйте фильтры для поиска курсов, соответствующих вашим</p>
          <p>интересам и потребностям</p>
        </div>
        <CoursesCatalogue />
      </div>
    </section>
  );
};

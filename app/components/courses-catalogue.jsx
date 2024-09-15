"use client";

import {
  BsArrowLeft,
  BsArrowRight,
  BsFilter,
  BsGrid3X3GapFill,
  BsList,
  BsSearch,
} from "react-icons/bs";
import { useState, useMemo } from "react";
import { coursesData } from "../data/courses-data";

export const CoursesCatalogue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);
  const [sortOrder, setSortOrder] = useState("popularity-desc");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const coursesPerPage = 6;

  const filteredCourses = useMemo(() => {
    return coursesData
      .filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (ratingFilter === "all" ||
            course.rating >= parseFloat(ratingFilter)) &&
          (priceFilter === "all" || course.price === priceFilter),
      )
      .sort((a, b) => {
        if (sortOrder === "popularity-desc") {
          return b.rating - a.rating;
        } else {
          return a.rating - b.rating;
        }
      });
  }, [searchTerm, ratingFilter, priceFilter, sortOrder]);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse,
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex w-full flex-col items-center p-6 text-gray-600">
      <div className="relative mb-12 w-1/2">
        <input
          type="text"
          className="w-full rounded-3xl border border-gray-200 p-2.5 ps-10 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Поиск"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pr-6">
          <BsSearch />
        </div>
      </div>

      {/* Sorting and View Mode Toggle */}
      <div className="mb-4 flex w-full max-w-4xl justify-between">
        <div className="flex items-center">
          <select
            id="sort"
            className="p-2"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="popularity-desc">По популярности (убывание)</option>
            <option value="popularity-asc">
              По популярности (возрастание)
            </option>
          </select>
        </div>

        <div className="flex items-center">
          <button className="mr-2" onClick={() => setIsGridView(true)}>
            <BsGrid3X3GapFill />
          </button>
          <button onClick={() => setIsGridView(false)}>
            <BsList />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex w-full items-center gap-x-4">
        <BsFilter />
        <div className="flex items-center">
          <select
            id="rating"
            className="rounded-md border-2 border-gray-300 p-2 text-gray-700 focus:border-blue-500"
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            <option value="all">Рейтинг</option>
            <option value="4">4+ stars</option>
            <option value="3">3+ stars</option>
          </select>
        </div>

        <div className="flex items-center">
          <select
            id="price"
            className="rounded-md border-2 border-gray-300 p-2 text-gray-700 focus:border-blue-500"
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">Цена</option>
            <option value="free">Бесплатные</option>
            <option value="paid">Платные</option>
          </select>
        </div>
      </div>

      <div
        className={`mb-6 grid gap-6 ${isGridView ? "w-full max-w-5xl grid-cols-2" : "grid-cols-1"}`}
      >
        {currentCourses.map((course) => (
          <div
            key={course.id}
            className={`${isGridView ? "w-96" : "w-full"} rounded-3xl border-2 border-gray-300 bg-white p-4 shadow-md`}
          >
            <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
            <p className="mb-2 text-gray-700">{course.description}</p>
            <p className="text-blue-500">Rating: {course.rating}/5</p>
          </div>
        ))}
      </div>

      <div className="flex w-full max-w-4xl items-center justify-center">
        <button
          className={currentPage === 1 ? "hidden" : "mr-2"}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <BsArrowLeft />
        </button>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`rounded-md px-4 py-2 ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className={currentPage === totalPages ? "hidden" : "ml-2"}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

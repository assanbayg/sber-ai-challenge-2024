"use client";

import Stars from "@/app/components/rating-stars";
import { coursesData } from "@/app/data/courses-data";
import { reviewsData } from "@/app/data/reviews-data";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function Course({ params }) {
  const { id } = params;
  const course = coursesData.find((course) => course.id.toString() === id);
  const reviews =
    reviewsData.find((review) => review.courseId === parseInt(id))?.reviews ||
    [];

  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center text-3xl font-bold">
        Курс не найден 😭😭😭
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://sber-ai-challenge-2024-backend.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ review: reviews[0] }),
        },
      );

      const data = await response.json();
      alert(data);
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className="flex h-screen flex-col justify-center px-24">
      <Link
        className="flex items-center gap-x-2 text-lg font-bold text-blue-500"
        href="/"
      >
        <BsArrowLeft />
        <p>НА ГЛАВНУЮ</p>
      </Link>
      <div className="flex items-center gap-x-10">
        <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
          {course.title}
        </h1>
        <Stars rating={course.rating} />
      </div>
      <p className="mb-4 text-xl text-gray-800 md:text-2xl">О курсе</p>
      <p className="mb-10">{course.description}</p>

      <p>
        <strong>Рейтинг: </strong> {course.rating}
      </p>
      <p>
        <strong>Цена: </strong> {course.price}
      </p>
      <button
        type="button"
        onClick={handleSubmit}
        className="my-3 w-1/2 rounded-xl bg-blue-500 py-3 text-white shadow-sm hover:bg-blue-600"
      >
        Обновить отзывы (отправляет запрос модели)
      </button>
      <p className="my-4 text-xl text-gray-800 md:text-2xl">Рейтинг и отзывы</p>
      <ul>
        {reviews.map((review) => (
          <li
            key={review.id}
            className="flex items-center rounded-3xl bg-white p-8"
          >
            <p className="mr-8 text-xl font-bold">{review.author}</p>
            <p className="text-gray-500">{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

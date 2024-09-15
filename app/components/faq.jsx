"use client";

import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { faqData } from "../data/faq-data";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="to-blue-white flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-20% p-6"
    >
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Часто задаваемые вопросы
      </h1>

      <div className="w-full max-w-4xl">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between rounded-3xl border p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? <FaAngleDown /> : <FaAngleUp />}
              </span>
            </button>
            {openIndex === index && (
              <div className="my-6 border-t p-3 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

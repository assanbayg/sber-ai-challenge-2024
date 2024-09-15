import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Courses } from "./components/courses";
import { Faq } from "./components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Faq />
    </>
  );
}

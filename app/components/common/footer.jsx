import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="mx-auto flex w-2/3 justify-around py-10 text-center">
      <p className="text-xl font-bold hover:text-gray-700">Pandas</p>
      <a
        href="https://t.me/assanbayg"
        className="flex items-center gap-x-2 text-lg hover:text-gray-700"
      >
        <p>Быстрая связь</p>
        <BsTelegram />
      </a>
    </footer>
  );
};

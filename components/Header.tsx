import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isLogged, setIsLogged] = useState(true);

  const toggleLogin = () => setIsLogged(!isLogged);

  return (
    <header className="w-full py-10 px-10 sm:px-20 bg-indigo-500 flex items-center justify-between font-medium mb-5 text-white">
      <div>
        <h1 className="text-xl">
          <Link href="/">Book Sell</Link>
        </h1>
      </div>
      {isLogged ? (
        <h2
          onClick={toggleLogin}
          className="hover:underline cursor-pointer relative"
        >
          John &#9660;
        </h2>
      ) : (
        <ul className="flex gap-5">
          <li className="hover:underline cursor-pointer" onClick={toggleLogin}>
            Login
          </li>
          <li className="hover:underline cursor-pointer">Sign in</li>
        </ul>
      )}
    </header>
  );
};

export default Header;

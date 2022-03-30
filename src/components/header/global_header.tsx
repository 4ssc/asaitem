import Link from 'next/link';
import React, { useState } from 'react';

const GlobalHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const spMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header>
      <div className="border-b">
        <div className="flex justify-between items-center py-8 px-4 sm:justify-center sm:px-0 sm:text-center">
          <Link href="/">
            <a>
              <h1 className="inline text-5xl font-bold">asaitem</h1>
            </a>
          </Link>
          <button onClick={spMenu} className="p-2 rounded border sm:hidden">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <nav>
          <ul
            className={`absolute w-full bg-white border-t sm:flex sm:static sm:justify-center ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <li className="border-b sm:border-b-0 sm:border-l">
              <Link href="/">
                <a className="block py-1 px-3 transition sm:hover:bg-gray-200">ホーム</a>
              </Link>
            </li>
            <li className="border-b sm:border-x sm:border-b-0">
              <Link href="/privacy/">
                <a className="block py-1 px-3 transition sm:hover:bg-gray-200">
                  プライバシーポリシー
                </a>
              </Link>
            </li>
            <li className="border-b sm:border-r sm:border-b-0">
              <Link href="/contact/">
                <a className="block py-1 px-3 transition sm:hover:bg-gray-200">お問い合わせ</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;

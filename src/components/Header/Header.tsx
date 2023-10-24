"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/img/mackenzie.png'
import { Roboto } from 'next/font/google'
import { Menu } from '../Menu/Menu'

const roboto = Roboto({ subsets: ['latin'], weight: ["300","400"] })

const Header = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav className="bg-red border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="w-100 flex flex-row-reverse lg:flex-row flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center">
          <Image className="h-14 w-56 mr-3 lg:hidden xl:block"
            src={logo}
            alt="logo"
          />
        </a>
        <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path className="bg-white" stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <Menu toggle={hidden}>
          <li>
            <a href="#" className={`block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent aria-current="page" ${roboto.className}`}>Nossa identidade</a>
          </li>
          <li>
            <a href="#" className={`block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent aria-current="page" ${roboto.className}`}>Materiais didáticos</a>
          </li>
          <li>
            <a href="#" className={`block py-2 pl-3 pr-4 text-2xl text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent aria-current="page" ${roboto.className}`}>Soluções educacionais</a>
          </li>
          <li>
            <button className={`block p-1 pl-8 text-xl text-red bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:dark:text-blue-500 dark:bg-blue-600 bg-white aria-current="page" ${roboto .className}`}>Login</button>
          </li>
        </Menu>
      </div>
    </nav>
  )
}

export default Header

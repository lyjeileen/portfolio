import Link from 'next/link';

import { BsHouseHeart } from 'react-icons/bs';
import Dropdown from './Dropdown';

export default function Navbar() {
  return (
    <nav className="bg-lightgreen fixed top-0 left-0 w-full z-50">
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 text-base font-bold">
        <div className="flex items-center">
          <BsHouseHeart className="fill-base w-7 h-7" />
          <span className="self-center m-2 whitespace-nowrap text-xl">
            Eileen Li
          </span>
        </div>
        <Dropdown />
        <div className="hidden md:block">
          <div className="flex gap-4">
            <button
              className="hover:bg-base rounded-3xl hover:text-grassgreen px-1"
              onClick={() =>
                window.document
                  .getElementById('projects')
                  ?.scrollIntoView({ block: 'center', behavior: 'smooth' })
              }
            >
              Projects
            </button>
            <button
              className="hover:bg-base rounded-3xl hover:text-grassgreen px-1"
              onClick={() =>
                window.document
                  .getElementById('skills')
                  ?.scrollIntoView({ block: 'center', behavior: 'smooth' })
              }
            >
              Skills
            </button>
            <button
              className="hover:bg-base rounded-3xl hover:text-grassgreen px-1"
              onClick={() =>
                window.document
                  .getElementById('about')
                  ?.scrollIntoView({ block: 'center', behavior: 'smooth' })
              }
            >
              About
            </button>
            <Link href="mailto:yuejiao.li.eileen@gmail.com">
              <p className="border-2 px-2 rounded-3xl text-lg text-base hover:text-lightgreen hover:bg-base">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

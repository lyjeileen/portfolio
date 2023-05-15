import Link from 'next/link';

import { BsHouseHeart } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="bg-lightgreen fixed top-0 left-0 w-screen z-50">
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 text-base font-bold">
        <div className="flex items-center">
          <BsHouseHeart className="fill-base w-7 h-7" />
          <span className="self-center m-2 whitespace-nowrap text-xl">
            Eileen Li
          </span>
        </div>
        <Link href="mailto:yuejiao.li.eileen@gmail.com">
          <p className="mr-4 border-2 px-2 rounded-3xl text-lg">Contact</p>
        </Link>
      </div>
    </nav>
  );
}

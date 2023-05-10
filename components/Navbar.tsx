import { RiUserStarLine } from 'react-icons/ri';
export default function Navbar() {
  return (
    <nav className="bg-lightgreen px-2 sm:px-4 py-2.5 fixed top-0 left-0 w-screen z-50">
      <div className="flex flex-wrap items-center justify-between text-base">
        <div className="flex items-center">
          <RiUserStarLine className="fill-base w-8 h-8" />
          <span className="self-center m-2 text-xl text-amber-800 font-bold whitespace-nowrap">
            Eileen Li
          </span>
        </div>
      </div>
    </nav>
  );
}

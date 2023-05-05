// const skillList = {
//   'Languages':{Javascript:, HTML, CSS, Ruby}
//   'Framworks & Libraries: {React, Tailwind, Bootstrap, MUI, SASS, NextJS, NodeJS, Ajax, Express, EJS, jQuery, Rails},
//   'Testing': {Storybook, Cypress, Jest, RSpec, Mocha, Chai}
//   'Database & Others'
// };

import Image from 'next/image';
import { AiFillHtml5 } from '@react-icons/all-files/ai/AiFillHtml5';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { DiSass } from '@react-icons/all-files/di/DiSass';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { FaBootstrap } from 'react-icons/fa';
import { DiGithubBadge } from 'react-icons/di';
import { SiPrisma } from 'react-icons/si';
import { SiRuby } from 'react-icons/si';
import { SiRubyonrails } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Skills() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <svg
          className="w-9 h-9 fill-softred"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M176 88v40h160V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0v-76.1C0 215.2 5.1 203 14.1 194L66 142.1c9-9 21.2-14.1 33.9-14.1H128zM0 416v-80h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></path>
        </svg>
        <h1 className="text-grassgreen text-4xl text-center font-bold mx-4">
          Skills
        </h1>
        <svg
          className="w-9 h-9 fill-softred"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M176 88v40h160V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0v-76.1C0 215.2 5.1 203 14.1 194L66 142.1c9-9 21.2-14.1 33.9-14.1H128zM0 416v-80h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></path>
        </svg>
      </div>

      <div className="text-grassgreen flex justify-evenly">
        <div>
          <h3 className="text-xl mb-2">Languanges</h3>
          <ul className="flex flex-col">
            <li>
              <SiJavascript className="fill-lightgreen w-8 h-8" />
              <p>JavaScript</p>
            </li>
            <li>
              <AiFillHtml5 className="fill-lightgreen w-8 h-8" />
              <p>HTML</p>
            </li>
            <li>
              <DiCss3 className="fill-lightgreen w-8 h-8" />
              <p>CSS</p>
            </li>
            <li>
              <SiRuby className="fill-lightgreen w-8 h-8" />
              <p>Ruby</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-2">Frameworks&Libraries</h3>
          <ul>
            <li>
              <TbBrandNextjs className="fill-lightgreen w-8 h-8" />
              <p>NextJs</p>
            </li>
            <li>
              <FaReact className="fill-lightgreen w-8 h-8" />
              <p>React</p>
            </li>
            <li>
              <FaNodeJs className="fill-lightgreen w-8 h-8" />
              <p>NodeJs</p>
            </li>
            <li>
              <SiTailwindcss className="fill-lightgreen w-8 h-8" />
              <p>Tailwind</p>
            </li>
            <li>
              <FaBootstrap className="fill-lightgreen w-8 h-8" />
              <p>Bootstrap</p>
            </li>
            <li>
              <DiSass className="fill-lightgreen w-8 h-8" />
              <p>SASS</p>
            </li>
            <li>
              <SiRubyonrails className="fill-lightgreen w-8 h-8" />
              <p>Rails</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-2">Testing</h3>
          <ul>
            <li>
              <TbBrandNextjs className="fill-lightgreen w-8 h-8" />
              <p>NextJs</p>
            </li>
            <li>
              <FaReact className="fill-lightgreen w-8 h-8" />
              <p>React</p>
            </li>
            <li>
              <FaNodeJs className="fill-lightgreen w-8 h-8" />
              <p>NodeJs</p>
            </li>
            <li>
              <SiTailwindcss className="fill-lightgreen w-8 h-8" />
              <p>Tailwind</p>
            </li>
            <li>
              <FaBootstrap className="fill-lightgreen w-8 h-8" />
              <p>Bootstrap</p>
            </li>
            <li>
              <DiSass className="fill-lightgreen w-8 h-8" />
              <p>SASS</p>
            </li>
            <li>
              <SiRubyonrails className="fill-lightgreen w-8 h-8" />
              <p>Rails</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-2">Database&Others</h3>
          <ul>
            <li>
              <TbSql className="fill-lightgreen w-8 h-8" />
              <p>SQL</p>
            </li>
            <li>
              <SiPrisma className="fill-lightgreen w-8 h-8" />
              <p>Prisma</p>
            </li>
            <li>
              <DiGithubBadge className="fill-lightgreen w-8 h-8" />
              <p>Git</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";

export default function Header({ pathname }: { pathname: string }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between py-2 px-3 border-b-2 border-darkGrey">
        <a
          className="no-underline text-white h-4 hover:text-yellow focus:text-yellow"
          href="/website/"
        >
          <svg className="h-4" viewBox="0 0 203 27" fill="none">
            <path
              d="M3 3.08234L4.15126 0.863194L0.5 3.08234H3ZM46.3369 3.08234H48.8369L45.1857 0.863194L46.3369 3.08234ZM24.6685 14.3236L23.5172 16.5428L24.6685 17.1401L25.8197 16.5428L24.6685 14.3236ZM43.8369 3.08234V26.9176H48.8369V3.08234H43.8369ZM5.5 26.9176V3.08234H0.5V26.9176H5.5ZM1.84874 5.30148L23.5172 16.5428L25.8197 12.1045L4.15126 0.863194L1.84874 5.30148ZM25.8197 16.5428L47.4882 5.30148L45.1857 0.863194L23.5172 12.1045L25.8197 16.5428Z"
              fill="currentColor"
            ></path>
            <path
              d="M83.7911 14.9213H57.063M57.063 26.9176V3.08234H100.4"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinejoin="bevel"
            ></path>
            <path
              d="M108.2 14.9213H151.537V3.08234H108.2V26.9176"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinejoin="bevel"
            ></path>
            <path
              d="M203 3.08234H182.125H161.972V13.8624H200.451L200.451 24.2633H159.338"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </a>

        <button
          className="border-0 rounded p-0 flex justify-center items-center w-8 h-8 bg-darkGrey hover:bg-grey focus:bg-grey"
          type="button"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" viewBox="0 -960 960 960">
              <path
                d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" viewBox="0 0 54 36" fill="none">
              <path
                d="M0.75 35.5V31.125H53.25V35.5H0.75ZM0.75 20.1875V15.8125H53.25V20.1875H0.75ZM0.75 4.875V0.5H53.25V4.875H0.75Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="list-none flex justify-center gap-12 py-1 m-0 bg-darkGrey">
          <li className="text-serif text-lg">
            <a
              className={`no-underline ${
                pathname.endsWith("/about") ? "text-yellow" : "text-white"
              } hover:text-yellow focus:text-yellow`}
              href="/website/about"
            >
              About
            </a>
          </li>
          <li className="text-serif text-lg">
            <a
              className={`no-underline ${
                pathname.endsWith("/projects") ? "text-yellow" : "text-white"
              }`}
              href="/website/projects"
            >
              Projects
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 text-serif text-lg">
            <a
              className={`no-underline ${
                pathname.endsWith("/blog") ? "text-yellow" : "text-white"
              } hover:text-yellow focus:text-yellow`}
              href="/website/blog"
            >
              Blog
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

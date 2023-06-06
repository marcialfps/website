import { useState } from "react";

export default function Header() {
  const [isOpened, setOpened] = useState(false);

  return (
    <header>
      <div className="header-main">
        <a className="logo-anchor" href="/">
          <svg viewBox="0 0 203 27" fill="none">
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
          className="menu"
          type="button"
          onClick={() => {
            console.log("hey");
            setOpened(!isOpened);
          }}
        >
          {isOpened ? (
            <svg viewBox="0 -960 960 960">
              <path
                d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 54 36" fill="none">
              <path
                d="M0.75 35.5V31.125H53.25V35.5H0.75ZM0.75 20.1875V15.8125H53.25V20.1875H0.75ZM0.75 4.875V0.5H53.25V4.875H0.75Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {isOpened && (
        <ul className="nav-container">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      )}
    </header>
  );
}

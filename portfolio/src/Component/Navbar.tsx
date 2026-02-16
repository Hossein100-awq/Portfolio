import React from "react";
import Container from "./Container";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mx-10 my-10">
        <div>
          <h2>HOSSEIN</h2>
        </div>
        <div>
          <ul className="flex gap-14">
            <Link href="/">
              <li className="hover:text-cyan-500 hover:scale-110 transition-all duration-200">
                HOME
              </li>
            </Link>
            <Link href="/ABOUT">
              {" "}
              <li className="hover:text-cyan-500 hover:scale-110 transition-all duration-200">
                ABOUT
              </li>
            </Link>
            <Link href="./SERVICE">
              {" "}
              <li className="hover:text-cyan-500 hover:scale-110 transition-all duration-200">
                SERVICE
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

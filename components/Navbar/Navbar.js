import React from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <div className={classes.header}>
          <ul>
            <li>
              <Link href="/">HAIR TRANSPLANT</Link>
            </li>
            <li>
              <Link href="/new-meetup">AFRO TYPE</Link>
            </li>
            <li>
              <Link href="/new-meetup">WOMAN HAIR TRANSPLANT</Link>
            </li>
            <li>
              <Link href="/new-meetup">BEFORE AFTER</Link>
            </li>
            <li>
              <Link href="/new-meetup">CORPORATE</Link>
            </li>
            <li>
              <Link href="/new-meetup">CONTACT US </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

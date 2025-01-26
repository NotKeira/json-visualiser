import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header>
      <div className="header-section">
        <nav>
          <ul className="header-list">
            <li className="header-line">
              <Link href="/">Home</Link>
            </li>
            <li className="header-line">
              <Link href="/render">Render</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

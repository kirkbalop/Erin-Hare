import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://www.instagram.com/erinhare/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + `/assets/images/IG_Logo.png`}
            alt="Instagram"
            className="logo"
          />
        </a>
      </div>
    </footer>
  );
}

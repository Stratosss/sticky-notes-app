import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} -Developed by Stratos Gialouris as part of the Web Development bootcamp</p>
    </footer>
  );
}

export default Footer;

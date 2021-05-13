import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => {
  const termsUse = "Terminos de uso";
  const privacyStament = "Declaración de privacidad";
  const helpCenter = "Centro de ayuda";
  return (
    <footer className="footer">
      <a href="/">{termsUse}</a>
      <a href="/">{privacyStament}</a>
      <a href="/">{helpCenter}</a>
    </footer>
  );
};

export default Footer;

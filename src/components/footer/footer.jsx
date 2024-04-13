import React from "react";
import "./footer.css";
import HomeIcon from "../../assets/home-2.png";
import WalletIcon from "../../assets/bitcoin-card.png";

function Footer() {
  return (
    <footer className="footer">
      <button className="footer-button">
        <img src={HomeIcon} alt="back-icon" />
      </button>
      <button className="footer-button">
        <img src={WalletIcon} alt="notification-icon" />
      </button>
    </footer>
  );
}

export default Footer;

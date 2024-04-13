import React from "react";
import "./bottomDrawer.css";

const BottomDrawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="overlay"></div>}

      {/* Bottom sheet */}
      <div
        className="bottom-drawer"
        style={
          isOpen
            ? { transform: "translateY(0)" }
            : { transform: "translateY(100%)" }
        }
      >
        {/* Close button */}
        <button className="toggle-button" onClick={onClose}>
          Close
        </button>
        {/* Content */}
        {children}
      </div>
    </>
  );
};

export default BottomDrawer;

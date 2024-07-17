import React from "react";

const Alert = ({ show, message, onClose }) => {
    
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Toast duration
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [show, onClose]);

  const toastStyle = {
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    animation: "fadeInUp 0.5s ease-in-out",
    width: "300px",
    position: "absolute",
    top: "0",
    right: "0",
    display: show ? "block" : "none",
  };

  const toastHeaderStyle = {
    background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    color: "white",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  };

  const toastBodyStyle = {
    background: "linear-gradient(135deg, #23a6d5, #23d5ab)",
    color: "white",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    padding: "15px",
    textAlign: "center",
  };

  const closeButtonStyle = {
    color: "white",
    opacity: 1,
  };

  return (
    <>
      <div className="toast" style={toastStyle}>
        <div className="toast-header" style={toastHeaderStyle}>
          <button
            type="button"
            className="ml-2 mb-1 close"
            style={closeButtonStyle}
            onClick={onClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body" style={toastBodyStyle}>
          {message}
        </div>
      </div>
    </>
  );
};

export default Alert;

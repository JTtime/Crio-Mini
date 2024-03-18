import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({
  isOpen,
  onClose,
  children,
  overlayClassName,
  modalClassName,
  closeButtonClassName,
  closeButtonContent,
  overlayStyle,
  modalStyle,
  closeButtonStyle,
  ...rest
}) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  // if (!modalOpen) return null;

  return (
    <>
      {modalOpen &&
        ReactDOM.createPortal(
          <div
            className={`modal-overlay ${overlayClassName}`}
            style={overlayStyle}
          >
            <div
              className={`modal ${modalClassName}`}
              style={modalStyle}
              {...rest}
            >
              <div className="modal-header">
                <button
                  className={`close-button ${closeButtonClassName}`}
                  style={closeButtonStyle}
                  onClick={handleClose}
                >
                  {closeButtonContent}
                </button>
              </div>
              <div className="modal-content">{children}</div>
            </div>
          </div>,
          // document.getElementById("root"),
          document.body,
        )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  overlayClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
  closeButtonContent: PropTypes.node,
  overlayStyle: PropTypes.object,
  modalStyle: PropTypes.object,
  closeButtonStyle: PropTypes.object,
};

Modal.defaultProps = {
  overlayClassName: "",
  modalClassName: "",
  closeButtonClassName: "",
  closeButtonContent: "Close",
  overlayStyle: {},
  modalStyle: {},
  closeButtonStyle: {},
};

export default Modal;

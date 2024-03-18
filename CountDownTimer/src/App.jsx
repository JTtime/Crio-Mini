import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import  from "./sharedComponents/Calendar";
import "./App.css";
import DateRangePicker from "./sharedComponents/Calendar";
import Modal from "./sharedComponents/Modal";

function App() {
  const [count, setCount] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSelect = (start, end) => {
    setSelectedStartDate(start);
    setSelectedEndDate(end);
    console.log({ start, end });
  };

  return (
    <>
      {/* <div>
        <div>
          <button id="modal-root" onClick={openModal}>
            Open Modal
          </button>
          <Modal
            isOpen={isOpen}
            onClose={closeModal}
            overlayClassName="custom-overlay"
            modalClassName="custom-modal"
            // id="modal-root"
            closeButtonClassName="custom-close-button"
            closeButtonContent="X"
            overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            modalStyle={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "400px",
            }}
            closeButtonStyle={{
              backgroundColor: "transparent",
              color: "red",
              border: "none",
              cursor: "pointer",
            }}
          >
            <h2>Modal Content</h2>
            <p>This is the content of the modal. You can put anything here.</p>
          </Modal>
        </div>
        <DateRangePicker
          onDateRangeSelected={handleSelect}
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          containerStyles={{ width: "300px", border: "1px solid #ccc" }}
          calendarStyles={{
            default: { cursor: "pointer", border: "1px solid #ccc" },
            range: {
              backgroundColor: "#e6f7ff",
              cursor: "pointer",
              border: "1px solid #ccc",
            },
          }}
        />
      </div> */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;

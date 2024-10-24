import React, { useState } from "react";
import Modal from "./pages/modal/Modal";
import CropModal from "./pages/modal/CropModal";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="bg-red-500 w-full h-screen">
      {show && <Modal setShow={setShow} show={show} />}
    </div>
  );
};

export default App;

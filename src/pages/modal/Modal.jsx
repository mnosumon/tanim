import React, { useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import "cropperjs/dist/cropper.css";
import CropModal from "./CropModal";

const Modal = ({ setShow, show }) => {
  const fileRef = useRef();
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const cropperRef = useRef();
  const handleChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  console.log(image);
  return (
    <>
      <div className="fixed w-full h-screen bg-[#7875755d] flex items-center justify-center ">
        <div className="w-2/5 bg-white p-3 relative rounded-md">
          <div className="w-full mb-4">
            <h3 className="text-lg text-center font-serif text-[#2d2d2d]">
              Upload Photo
            </h3>
            <div
              onClick={() => setShow(false)}
              className="absolute right-2 top-2 cursor-pointer text-xl"
            >
              <IoMdCloseCircleOutline />
            </div>
          </div>
          <div className="border border-[#a19e9e] rounded-md">
            <div
              onClick={() => fileRef.current.click()}
              className="m-1 bg-slate-300 rounded-md h-60 flex items-center justify-center cursor-pointer"
            >
              <div className="flex justify-center items-center flex-col gap-1">
                <div className="">
                  <CiImageOn />
                </div>
                <h4>Chose your photo</h4>
              </div>
              <div className="">
                <input
                  onChange={handleChange}
                  ref={fileRef}
                  className="hidden"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
        {image && (
          <CropModal setShow={setShow} cropperRef={cropperRef} image={image} />
        )}
      </div>
    </>
  );
};

export default Modal;

import React, { useState } from "react";

const DragAndDrop = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div className="w-full max-w-lg mx-auto dash-drag-drop">
      <div
        className={`d-flex align-items-center justify-content-center border-2 border-dashed rounded-lg h-40 ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="text-center">
          <div className="block text-gray-500 mb-2 icon-dash">
            <span>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.98257 3.33333V12.6667H14.6556V4.66667H9.03894L7.7048 3.33333H3.98257ZM9.59927 3.33333H15.3227C15.5095 3.33333 15.6674 3.39778 15.7963 3.52667C15.9253 3.65556 15.9898 3.81333 15.9898 4V13.3333C15.9898 13.52 15.9253 13.6778 15.7963 13.8067C15.6674 13.9356 15.5095 14 15.3227 14H3.3155C3.12873 14 2.97085 13.9356 2.84189 13.8067C2.71292 13.6778 2.64844 13.52 2.64844 13.3333V2.66667C2.64844 2.48 2.71292 2.32222 2.84189 2.19333C2.97085 2.06444 3.12873 2 3.3155 2H8.26514L9.59927 3.33333ZM7.98497 7C7.98497 7.27556 7.88713 7.51111 7.69146 7.70667C7.49579 7.90222 7.26009 8 6.98437 8C6.70865 8 6.47295 7.90222 6.27728 7.70667C6.08161 7.51111 5.98377 7.27556 5.98377 7C5.98377 6.72444 6.08161 6.48889 6.27728 6.29333C6.47295 6.09778 6.70865 6 6.98437 6C7.26009 6 7.49579 6.09778 7.69146 6.29333C7.88713 6.48889 7.98497 6.72444 7.98497 7ZM13.3215 11.3333L10.6532 7.33333L5.98377 11.3333H13.3215Z"
                  fill="#FFCFB1"
                />
              </svg>
            </span>
            <div className="dd-text">
              {" "}
              <p className="block text-blue-500 underline cursor-pointer m-0">
                Drag and drop an image or{" "}
                <span htmlFor="fileInput" className="browse-text">
                  Browse
                </span>
              </p>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                multiple
                className="d-none"
                onChange={handleFileSelect}
              />
            </div>
          </div>
        </div>
      </div>
      {files.length > 0 && (
        <div>
          <ul className="list-disc list-inside text-gray-600">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;

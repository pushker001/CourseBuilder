import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSave, initialData, isEditMode, itemType }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null); // State to manage uploaded file

  useEffect(() => {
    if (isEditMode && initialData) {
      if (itemType === 'link') {
        setName(initialData.displayName);
        setUrl(initialData.url);
      } else if (itemType === 'upload') {
        setName(initialData.displayName);
        // Set file to null as we don't have the file itself, only its display name
      } else {
        setName(initialData);
      }
    } else {
      setName('');
      setUrl('');
      setFile(null); // Reset uploaded file state
    }
  }, [isEditMode, initialData, itemType]);

  const handleSave = () => {
    if (itemType === 'link') {
      onSave({ displayName: name, url: url });
    } else if (itemType === 'upload') { // Handle upload type
      onSave({ displayName: name, file: file }); // Pass file data to onSave
    } else {
      onSave(name);
    }
    setName('');
    setUrl('');
    setFile(null); // Reset uploaded file state after saving
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">{isEditMode ? `Edit ${itemType}` : `Create new ${itemType}`}</h2>
        {itemType === 'link' ? (
          <>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="Display name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        ) : itemType === 'upload' ? ( // Add input field for file upload
          <>
            <input
              type="file"
              className="border p-2 w-full mb-4"
              onChange={handleFileChange}
            />
            <input
              type="text"
              className="border p-2 w-full mb-4"
              placeholder="File name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </>
        ) : (
          <input
            type="text"
            className="border p-2 w-full mb-4"
            placeholder={`${itemType} name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            {isEditMode ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

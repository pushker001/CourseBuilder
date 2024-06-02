import React, { useState } from 'react';

const ModuleItem = ({ module, index, onEdit, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded mb-2">
      <div>
        <h3 className="text-lg font-bold">{module}</h3>
        <p className="text-gray-600">Add items to this module</p>
      </div>
      <div className="relative">
        <button onClick={toggleMenu} className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 12l6-6m-6 6l6 6" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 top-10 bg-white shadow-md w-32 rounded">
            <ul className="list-none p-0 m-0">
              <li className="py-2 px-4 hover:bg-gray-100">
                <button onClick={() => onEdit(index)} className="text-pink-500">
                  Edit module name
                </button>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <button onClick={() => onDelete(index)} className="text-pink-500">
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModuleItem;

import React from 'react';

const UploadItem = ({ upload, index, onEdit, onDelete }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="text-lg">{upload.displayName}</p>
        {upload.file && <p className="text-sm text-gray-500">{upload.file.name}</p>}
      </div>
      <div>
        <button onClick={() => onEdit(index, 'upload')} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
        <button onClick={() => onDelete(index, 'upload')} className="text-red-500 hover:text-red-700">Delete</button>
      </div>
    </div>
  );
};

export default UploadItem;

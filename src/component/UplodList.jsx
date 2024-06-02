import React from 'react';
import UploadItem from './UploadItem';

const UploadList = ({ uploads, onEdit, onDelete }) => {
  return (
    <div className="mt-10">
      {uploads.map((upload, index) => (
        <UploadItem key={index} upload={upload} index={index} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default UploadList;

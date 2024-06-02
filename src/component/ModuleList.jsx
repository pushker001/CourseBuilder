import React from 'react';
import ModuleItem from './Moduleitem';

const ModuleList = ({ modules, onEdit, onDelete }) => {
  return (
    <div className="mt-10">
      {modules.map((module, index) => (
        <ModuleItem key={index} module={module} index={index} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ModuleList;

import React from 'react';
import LinkItem from './LinkItem';

const LinkList = ({ links, onEdit, onDelete }) => {
  return (
    <div className="mt-8">
      {links.map((link, index) => (
        <LinkItem key={index} link={link} index={index} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default LinkList;

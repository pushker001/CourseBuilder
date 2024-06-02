import React, { useState } from 'react';
import ModuleList from './component/ModuleList';
import LinkList from './component/LinkList';
import UploadList from './component/UplodList';
import Modal from './component/Modal';

const App = () => {
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modules, setModules] = useState([]);
  const [links, setLinks] = useState([]);
  const [uploads, setUploads] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentItemType, setCurrentItemType] = useState('');

  const handleClick = () => {
    setIsAddMenuOpen(!isAddMenuOpen);
  };

  const openModal = (itemType) => {
    setIsAddMenuOpen(false);
    setCurrentItemType(itemType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditingIndex(null);
    setCurrentItemType('');
  };

  const handleSave = (data) => {
    if (currentItemType === 'module') {
      if (isEditMode) {
        const updatedModules = [...modules];
        updatedModules[editingIndex] = data;
        setModules(updatedModules);
      } else {
        setModules([...modules, data]);
      }
    } else if (currentItemType === 'link') {
      if (isEditMode) {
        const updatedLinks = [...links];
        updatedLinks[editingIndex] = data;
        setLinks(updatedLinks);
      } else {
        setLinks([...links, data]);
      }
    } else if (currentItemType === 'upload') {
      if (isEditMode) {
        const updatedUploads = [...uploads];
        updatedUploads[editingIndex] = data;
        setUploads(updatedUploads);
      } else {
        setUploads([...uploads, data]);
      }
    }
    closeModal();
  };

  const openEditModal = (index, itemType) => {
    setIsEditMode(true);
    setEditingIndex(index);
    setCurrentItemType(itemType);
    setIsModalOpen(true);
  };

  const handleDelete = (index, itemType) => {
    if (itemType === 'module') {
      const updatedModules = modules.filter((_, i) => i !== index);
      setModules(updatedModules);
    } else if (itemType === 'link') {
      const updatedLinks = links.filter((_, i) => i !== index);
      setLinks(updatedLinks);
    } else if (itemType === 'upload') {
      const updatedUploads = uploads.filter((_, i) => i !== index);
      setUploads(updatedUploads);
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Course builder</h1>
        <button onClick={handleClick} className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-20">
          + Add
        </button>
      </div>
      {isAddMenuOpen && (
        <div className="absolute right-0 top-20 bg-white shadow-md w-48 rounded">
          <ul className="list-none p-0 m-0">
            <li className="py-2 px-4 hover:bg-gray-100">
              <button onClick={() => openModal('module')} className="text-gray-600">
                Create module
              </button>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <button onClick={() => openModal('link')} className="text-gray-600">
                Add a link
              </button>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <button onClick={() => openModal('upload')} className="text-gray-600">
                Upload
              </button>
            </li>
          </ul>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        initialData={isEditMode ? (
          currentItemType === 'module' ? modules[editingIndex] :
          currentItemType === 'link' ? links[editingIndex] :
          uploads[editingIndex]
        ) : ''}
        isEditMode={isEditMode}
        itemType={currentItemType}
      />
      <ModuleList modules={modules} onEdit={(index) => openEditModal(index, 'module')} onDelete={(index) => handleDelete(index, 'module')} />
      <LinkList links={links} onEdit={(index) => openEditModal(index, 'link')} onDelete={(index) => handleDelete(index, 'link')} />
      <UploadList uploads={uploads} onEdit={(index) => openEditModal(index, 'upload')} onDelete={(index) => handleDelete(index, 'upload')} />
    </div>
  );
};

export default App;

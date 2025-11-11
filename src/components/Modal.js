import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="text-center">
          <div className="text-6xl mb-4">👋</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Привіт, ми зробили інтерфейс
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            зручнішим для вас
          </p>
          
          <div className="space-y-3">
            <button
              onClick={onClose}
              className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200"
            >
              Дізнатися більше
            </button>
            
            <button
              onClick={onClose}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
            >
              Самостійно дослідити інтерфейс
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
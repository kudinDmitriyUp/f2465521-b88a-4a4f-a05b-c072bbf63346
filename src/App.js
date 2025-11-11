import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      
      <div className="flex flex-1 relative">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        <MapView sidebarCollapsed={sidebarCollapsed} />
      </div>
      
      {showModal && (
        <Modal onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
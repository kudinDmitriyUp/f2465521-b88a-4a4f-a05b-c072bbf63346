import React from 'react';

const MapMarker = ({ x, y, type }) => {
  const getMarkerStyle = () => {
    switch (type) {
      case 'conflict':
        return 'bg-marker-red';
      case 'city':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div
      className={`map-marker w-3 h-3 ${getMarkerStyle()} transform rotate-45 border border-white shadow-sm hover:scale-110 transition-transform duration-200`}
      style={{
        left: `${x}%`,
        top: `${y}%`
      }}
      title={`Маркер ${type}`}
    />
  );
};

export default MapMarker;
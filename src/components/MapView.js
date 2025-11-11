import React from 'react';
import MapMarker from './MapMarker';

const MapView = ({ sidebarCollapsed }) => {
  const markers = [
    { id: 1, x: 45, y: 25, type: 'conflict' },
    { id: 2, x: 55, y: 35, type: 'conflict' },
    { id: 3, x: 65, y: 45, type: 'conflict' },
    { id: 4, x: 75, y: 55, type: 'conflict' },
    { id: 5, x: 35, y: 65, type: 'conflict' },
    { id: 6, x: 85, y: 75, type: 'conflict' },
    { id: 7, x: 25, y: 85, type: 'conflict' },
    { id: 8, x: 95, y: 15, type: 'conflict' },
    { id: 9, x: 15, y: 95, type: 'conflict' },
    { id: 10, x: 50, y: 70, type: 'conflict' },
    { id: 11, x: 70, y: 30, type: 'conflict' },
    { id: 12, x: 30, y: 50, type: 'conflict' },
    { id: 13, x: 80, y: 40, type: 'conflict' },
    { id: 14, x: 40, y: 80, type: 'conflict' },
    { id: 15, x: 60, y: 60, type: 'conflict' },
    { id: 16, x: 20, y: 40, type: 'conflict' },
    { id: 17, x: 90, y: 60, type: 'conflict' },
    { id: 18, x: 10, y: 70, type: 'conflict' },
    { id: 19, x: 85, y: 25, type: 'conflict' },
    { id: 20, x: 25, y: 15, type: 'conflict' }
  ];

  const cities = [
    { name: 'Київ', x: 60, y: 35 },
    { name: 'Харків', x: 75, y: 30 },
    { name: 'Одеса', x: 45, y: 70 },
    { name: 'Дніпро', x: 70, y: 50 },
    { name: 'Львів', x: 25, y: 40 },
    { name: 'Запоріжжя', x: 70, y: 60 },
    { name: 'Кривий Ріг', x: 65, y: 55 },
    { name: 'Миколаїв', x: 50, y: 65 },
    { name: 'Маріуполь', x: 80, y: 65 },
    { name: 'Вінниця', x: 50, y: 45 },
    { name: 'Херсон', x: 55, y: 70 },
    { name: 'Полтава', x: 65, y: 40 },
    { name: 'Чернігів', x: 55, y: 25 },
    { name: 'Черкаси', x: 60, y: 45 },
    { name: 'Житомир', x: 50, y: 35 },
    { name: 'Суми', x: 70, y: 25 },
    { name: 'Хмельницький', x: 40, y: 40 },
    { name: 'Чернівці', x: 35, y: 55 },
    { name: 'Рівне', x: 35, y: 35 },
    { name: 'Івано-Франківськ', x: 30, y: 50 },
    { name: 'Тернопіль', x: 35, y: 45 },
    { name: 'Луцьк', x: 30, y: 30 },
    { name: 'Ужгород', x: 20, y: 55 },
    { name: 'Кропивницький', x: 60, y: 55 },
    { name: 'Кременчук', x: 65, y: 45 }
  ];

  return (
    <div className={`flex-1 relative bg-map-bg transition-all duration-300 ${sidebarCollapsed ? 'ml-0' : 'ml-0'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="mapPattern" patternUnits="userSpaceOnUse" width="100" height="100">
              <rect width="100" height="100" fill="#e8e4d9" />
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="#d8d4c9" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#mapPattern)" />
          
          <g className="map-regions">
            <path d="M100,100 L300,80 L500,120 L700,100 L900,110 L1100,90 L1100,200 L900,220 L700,200 L500,240 L300,200 L100,220 Z" className="map-region" />
            <path d="M100,250 L300,230 L500,270 L700,250 L900,260 L1100,240 L1100,350 L900,370 L700,350 L500,390 L300,350 L100,370 Z" className="map-region" />
            <path d="M100,400 L300,380 L500,420 L700,400 L900,410 L1100,390 L1100,500 L900,520 L700,500 L500,540 L300,500 L100,520 Z" className="map-region" />
            <path d="M100,550 L300,530 L500,570 L700,550 L900,560 L1100,540 L1100,650 L900,670 L700,650 L500,690 L300,650 L100,670 Z" className="map-region" />
            <path d="M100,700 L300,680 L500,720 L700,700 L900,710 L1100,690 L1100,800 L900,800 L700,800 L500,800 L300,800 L100,800 Z" className="map-region" />
          </g>
          
          <g className="water-bodies">
            <ellipse cx="200" cy="600" rx="80" ry="40" className="map-water" />
            <ellipse cx="800" cy="650" rx="120" ry="60" className="map-water" />
            <path d="M1000,300 Q1100,350 1000,400 Q900,350 1000,300" className="map-water" />
          </g>
          
          <g className="borders">
            <path d="M400,50 Q500,100 600,80 Q700,120 800,100 Q900,140 1000,120" stroke="#333" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.7" />
            <path d="M300,200 Q400,250 500,230 Q600,270 700,250 Q800,290 900,270" stroke="#333" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.7" />
            <path d="M200,400 Q300,450 400,430 Q500,470 600,450 Q700,490 800,470" stroke="#333" strokeWidth="2" strokeDasharray="5,5" fill="none" opacity="0.7" />
          </g>
        </svg>
        
        {cities.map((city, index) => (
          <div
            key={index}
            className="absolute text-xs text-gray-700 font-medium pointer-events-none text-shadow"
            style={{
              left: `${city.x}%`,
              top: `${city.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {city.name}
          </div>
        ))}
        
        {markers.map((marker) => (
          <MapMarker
            key={marker.id}
            x={marker.x}
            y={marker.y}
            type={marker.type}
          />
        ))}
      </div>
      
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded px-2 py-1 text-xs text-gray-600">
        <div>100 км</div>
        <div>50 мі</div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-xs text-gray-500">
        © Leaflet | © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default MapView;
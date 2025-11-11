import React from 'react';
import { Menu, Bell, Info, Settings, Target, TrendingUp, Package, Award, Globe } from 'lucide-react';

const Sidebar = ({ collapsed, onToggle }) => {
  const sidebarItems = [
    { icon: Menu, label: 'Меню', onClick: onToggle },
    { icon: Bell, label: 'Сповіщення', badge: '1' },
    { icon: Info, label: 'Інформація' },
    { icon: Target, label: 'Цілі' },
    { icon: TrendingUp, label: 'Статистика' },
    { icon: Package, label: 'Ресурси' },
    { icon: Award, label: 'Досягнення' },
    { icon: Settings, label: 'Налаштування' },
    { icon: Globe, label: 'Мова' }
  ];

  return (
    <aside className={`bg-sidebar-bg border-r border-sidebar-border transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'} relative z-10`}>
      <div className="flex-1 py-4">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center px-4 py-3 hover:bg-gray-200 cursor-pointer transition-colors duration-200 relative"
              onClick={item.onClick}
            >
              <Icon className="sidebar-icon flex-shrink-0" />
              {!collapsed && (
                <span className="ml-3 text-sm text-gray-700">{item.label}</span>
              )}
              {item.badge && (
                <span className={`absolute ${collapsed ? 'top-2 right-2' : 'right-4'} bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}>
                  {item.badge}
                </span>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs">☢️</span>
          </div>
          {!collapsed && (
            <div>
              <div className="text-xs text-gray-600">Радіація</div>
              <div className="text-xs text-gray-500">100 км</div>
              <div className="text-xs text-gray-500">50 мі</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
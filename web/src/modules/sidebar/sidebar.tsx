import React, { useState } from 'react';
import {
  Home,
  Settings,
  FileText,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface SidebarProps {
  className?: string;
}

const AppSidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const menuItems: MenuItem[] = [
    { icon: Home, label: 'Dashboard', href: '/dashborad' },
    { icon: FileText, label: 'Speech To Text', href: '/speech-to-text' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <nav className={`
      h-screen transition-all duration-500 ease-in-out
      ${isExpanded ? 'w-72' : 'w-24'}
      bg-[#1a365d] flex flex-col ${className}
    `}>
      <div className="flex items-center p-4 border-b border-[#2d4a66]">
        <div className={`transition-all duration-300 overflow-hidden ${!isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
          <h2 className="text-white text-xl font-bold whitespace-nowrap">Brand</h2>
        </div>
        <button
          onClick={toggleExpanded}
          className={`p-1 rounded text-white hover:bg-[#2d4a66] transition-colors ${!isExpanded ? 'ml-0' : 'ml-auto'}`}
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <div className="flex-1 py-4">
        <ul className="space-y-2 px-3">
          {menuItems.map((item: MenuItem, index: number) => (
            <li key={index}>
              <a
                href={item.href}
                className="flex items-center px-3 py-3 rounded-lg text-gray-300 hover:bg-[#2d4a66] hover:text-white transition-all duration-200"
                title={!isExpanded ? item.label : ''}
                onClick={() => navigate({ to: item.href })}
              >
                <item.icon size={20} className="flex-shrink-0" />
                <span className={`ml-3 truncate transition-all duration-300 overflow-hidden ${!isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-[#2d4a66]">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0" />
          <div className={`ml-3 min-w-0 transition-all duration-300 overflow-hidden ${!isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
            <p className="text-white text-sm font-medium truncate whitespace-nowrap">John Doe</p>
            <p className="text-gray-400 text-xs truncate whitespace-nowrap">john@example.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppSidebar;
import React, { useState, useEffect } from 'react';
import {
  Home,
  Settings,
  FileText,
  ChevronLeft,
  ChevronRight,
  LogOut,
  LucideIcon
} from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { jwtDecode } from 'jwt-decode';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface SidebarProps {
  className?: string;
}

interface JwtPayload {
  username?: string;
  email?: string;
  role?: string;
}

const AppSidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [username, setUsername] = useState('User');
  const [email, setEmail] = useState('user@example.com');
  const [role, setRole] = useState('Annotator');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        console.log('Decoded token:', decoded);
        
        const userName = decoded.username || 'User';
        const userEmail = decoded.email || 'user@aui.ma';
        const userRole = decoded.role || 'Annotator';
        
        setUsername(userName);
        setEmail(userEmail);
        setRole(userRole);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    
    window.dispatchEvent(new Event('authChanged'));
    
    navigate({ to: '/sign-in' });
  };

  const menuItems: MenuItem[] = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: FileText, label: 'Speech To Text', href: '/speech-to-text' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <nav className={`
      h-screen transition-all duration-500 ease-in-out
      ${isExpanded ? 'w-72' : 'w-24'}
      bg-slate-900 flex flex-col ${className}
    `}>
      <div className="flex items-center p-4 border-b border-orange-50">
        <div className={`transition-all duration-300 overflow-hidden ${!isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
          <h2 className="text-white text-xl font-bold whitespace-nowrap text-center">Darija AI</h2>
        </div>
        <button
          onClick={toggleExpanded}
          className={`p-1 rounded text-white hover:bg-[#2d4a66] transition-colors ml-auto ${!isExpanded ? 'mx-auto' : ''}`}
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <div className="flex-1 py-4">
        <ul className="space-y-2 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`flex items-center px-3 py-3 rounded-lg text-gray-300 hover:bg-[#2d4a66] hover:text-white transition-all duration-200 ${
                  !isExpanded ? 'justify-center' : 'justify-start'
                }`}
                title={!isExpanded ? item.label : ''}
                onClick={(e) => {
                  e.preventDefault();
                  navigate({ to: item.href });
                }}
              >
                <item.icon size={20} className="flex-shrink-0" />
                <span className={`ml-3 truncate transition-all duration-300 overflow-hidden ${
                  !isExpanded ? 'w-0 opacity-0' : 'w-auto opacity-100'
                }`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-border-orange-50">
        {isExpanded ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center min-w-0 flex-1">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {username.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="ml-3 min-w-0">
                <p className="text-white text-sm font-medium truncate whitespace-nowrap">
                  {username} ({role})
                </p>
                <p className="text-gray-400 text-xs truncate whitespace-nowrap">
                  {email}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg text-gray-300 hover:bg-[#2d4a66] hover:text-white transition-all duration-200 flex-shrink-0 ml-2"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg text-gray-300 hover:bg-[#2d4a66] hover:text-white transition-all duration-200"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppSidebar;
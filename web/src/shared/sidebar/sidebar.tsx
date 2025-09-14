import { Home, Settings, FileText, LogOut, User } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const AppSidebar = ({ className = '' }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: FileText, label: 'Speech To Text', href: '/speech-to-text' },
    { icon: Settings, label: 'Settings', href: '#' },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <nav className={`h-screen w-72 bg-slate-900 flex flex-col ${className}`}>
      <div className="p-4 border-b border-orange-50">
        <h2 className="text-white text-xl font-bold text-center">Darija AI</h2>
      </div>

      <div className="flex-1 py-4 px-3">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate({ to: item.href })}
            className="w-full flex items-center px-3 py-3 mb-2 rounded-lg text-gray-300 hover:bg-[#2d4a66] hover:text-white transition-colors"
          >
            <item.icon size={20} />
            <span className="ml-3">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4 border-t border-orange-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">U</span>
            </div>
            <div className="ml-3">
              <p className="text-white text-sm">User</p>
              <p className="text-gray-400 text-xs">Annotator</p>
            </div>
          </div>
          <button
            onClick={() => navigate({ to: '/' })}
            className="p-2 rounded-lg text-gray-300 hover:bg-[#2d4a66] hover:text-white transition-colors"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppSidebar;
import React, { useState } from 'react';
import { 
  Chrome, 
  Plus, 
  Settings, 
  Home,
  ChevronLeft, 
  ChevronRight, 
  RefreshCw,
  Upload,
  Search,
  X
} from 'lucide-react';

function App() {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'New Tab', url: 'https://www.google.com' }
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const [isExtensionDropdown, setIsExtensionDropdown] = useState(false);

  const addTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: 'New Tab',
      url: 'https://www.google.com'
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const removeTab = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (tabs.length > 1) {
      setTabs(tabs.filter(tab => tab.id !== id));
      if (activeTab === id) {
        setActiveTab(tabs[0].id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#202124] text-gray-200">
      {/* Header */}
      <div className="bg-[#292b2f] shadow-lg">
        {/* Tab Bar */}
        <div className="flex items-center px-2 pt-2">
          <div className="flex-1 flex space-x-1">
            {tabs.map(tab => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center max-w-[200px] min-w-[180px] h-9 px-4 rounded-t-lg cursor-pointer transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-[#202124] text-gray-200' 
                    : 'bg-[#323639] text-gray-400 hover:bg-[#3c4043]'
                }`}
              >
                <Chrome className="w-4 h-4 mr-2" />
                <span className="truncate">{tab.title}</span>
                <button
                  onClick={(e) => removeTab(tab.id, e)}
                  className="absolute right-2 opacity-0 group-hover:opacity-100 hover:bg-[#404244] p-1 rounded-full transition-opacity"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addTab}
            className="p-2 hover:bg-[#3c4043] rounded-full transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center space-x-2 p-2 bg-[#202124]">
          <div className="flex space-x-1">
            <button className="p-2 hover:bg-[#3c4043] rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#3c4043] rounded-full transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#3c4043] rounded-full transition-colors">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#3c4043] rounded-full transition-colors">
              <Home className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center bg-[#303134] rounded-full px-4 py-2 group focus-within:bg-[#202124] focus-within:ring-2 focus-within:ring-[#8ab4f8]">
            <Search className="w-4 h-4 text-gray-400 group-focus-within:text-[#8ab4f8]" />
            <input
              type="text"
              placeholder="Search Google or type a URL"
              className="w-full bg-transparent border-none focus:outline-none px-4 text-sm"
            />
          </div>

          {/* Extension Area */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsExtensionDropdown(!isExtensionDropdown)}
                className="p-2 hover:bg-[#3c4043] rounded-full transition-colors"
              >
                <Upload className="w-5 h-5" />
              </button>
              
              {isExtensionDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-[#292b2f] rounded-lg shadow-xl border border-gray-700 animate-fadeIn">
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-2">Add Extension</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 hover:bg-[#3c4043] rounded-lg transition-colors text-sm">
                        Install Chrome Extension
                      </button>
                      <button className="w-full text-left px-3 py-2 hover:bg-[#3c4043] rounded-lg transition-colors text-sm">
                        Load Unpacked Extension (.zip)
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button className="p-2 hover:bg-[#3c4043] rounded-full transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 flex justify-center">
        <div className="max-w-2xl w-full space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Welcome to ChromeLike
            </h1>
            <p className="text-gray-400">Your modern browser experience</p>
          </div>

          {/* Quick Access */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-[#292b2f] rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-[#3c4043] transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={`https://source.unsplash.com/random/100x100?technology&sig=${i}`}
                  alt="Quick access"
                  className="w-12 h-12 rounded-full mb-2"
                />
                <span className="text-sm">Quick Access {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
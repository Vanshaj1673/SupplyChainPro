'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Warehouse, 
  Truck, 
  Package, 
  Users, 
  BarChart3,
  X,
  Home
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', key: 'dashboard', icon: LayoutDashboard },
  { name: 'Warehouse', key: 'warehouse', icon: Warehouse },
  { name: 'Delivery', key: 'delivery', icon: Truck },
  { name: 'Inventory', key: 'inventory', icon: Package },
  { name: 'Suppliers', key: 'suppliers', icon: Users },
  { name: 'Analytics', key: 'analytics', icon: BarChart3 },
];

export function Sidebar({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen, setShowHomePage }) {
  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold">SupplyChain Pro</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start mb-4"
            onClick={() => setShowHomePage(true)}
          >
            <Home className="w-5 h-5 mr-3" />
            Back to Home
          </Button>
          
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.key}
                variant={activeSection === item.key ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveSection(item.key);
                  setSidebarOpen(false);
                }}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

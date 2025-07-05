'use client';

import { Button } from '@/components/ui/button';
import { Menu, Bell, Search, User, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export function Header({ setSidebarOpen, activeSection, setShowHomePage }) {
  const getSectionTitle = (section) => {
    const titles = {
      dashboard: 'Dashboard Overview',
      warehouse: 'Warehouse Management',
      delivery: 'Delivery & Logistics',
      inventory: 'Inventory Control',
      suppliers: 'Supplier Management',
      analytics: 'Analytics & Reports'
    };
    return titles[section] || 'Dashboard';
  };

  return (
    <header className="bg-card border-b border-border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div>
            <h2 className="text-2xl font-bold">{getSectionTitle(activeSection)}</h2>
            <p className="text-sm text-muted-foreground">
              Real-time supply chain management
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64"
              />
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowHomePage(true)}
          >
            <Home className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

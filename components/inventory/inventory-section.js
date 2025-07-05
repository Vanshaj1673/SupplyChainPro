'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  ShoppingCart,
  Zap
} from 'lucide-react';

export function InventorySection() {
  const inventoryStats = [
    { title: 'Total SKUs', value: '12,847', change: '+145', icon: Package },
    { title: 'Low Stock Items', value: '23', change: '-8', icon: AlertTriangle },
    { title: 'Turnover Rate', value: '4.2x', change: '+0.3', icon: TrendingUp },
    { title: 'Reorder Points', value: '89', change: '+12', icon: Clock }
  ];

  const lowStockItems = [
    {
      sku: 'IP15-PRO-128',
      name: 'iPhone 15 Pro 128GB',
      current: 12,
      min: 25,
      max: 100,
      demand: 'High',
      supplier: 'Apple Inc.',
      leadTime: '7-10 days',
      lastOrdered: '2 days ago',
      reorderSuggestion: 75
    },
    {
      sku: 'SS24-ULT-256',
      name: 'Samsung Galaxy S24 Ultra 256GB',
      current: 8,
      min: 20,
      max: 80,
      demand: 'Medium',
      supplier: 'Samsung Electronics',
      leadTime: '5-7 days',
      lastOrdered: '1 week ago',
      reorderSuggestion: 60
    },
    {
      sku: 'MW-PRO-14',
      name: 'MacBook Pro 14" M3',
      current: 3,
      min: 10,
      max: 30,
      demand: 'High',
      supplier: 'Apple Inc.',
      leadTime: '10-14 days',
      lastOrdered: '3 days ago',
      reorderSuggestion: 25
    }
  ];

  const demandForecast = [
    {
      category: 'Electronics',
      currentDemand: 95,
      predictedDemand: 110,
      trend: 'up',
      confidence: 89,
      seasonalFactor: 'Holiday season approaching'
    },
    {
      category: 'Clothing',
      currentDemand: 78,
      predictedDemand: 85,
      trend: 'up',
      confidence: 76,
      seasonalFactor: 'Winter collection launch'
    },
    {
      category: 'Home & Garden',
      currentDemand: 62,
      predictedDemand: 58,
      trend: 'down',
      confidence: 82,
      seasonalFactor: 'End of gardening season'
    },
    {
      category: 'Sports',
      currentDemand: 71,
      predictedDemand: 88,
      trend: 'up',
      confidence: 91,
      seasonalFactor: 'New Year fitness resolutions'
    }
  ];

  const recentActions = [
    {
      action: 'Auto-reorder triggered',
      item: 'Wireless Headphones - Premium',
      quantity: '50 units',
      supplier: 'TechSupply Co.',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      action: 'Stock level adjusted',
      item: 'Gaming Mouse - RGB',
      quantity: '15 units',
      supplier: 'Manual adjustment',
      time: '4 hours ago',
      status: 'completed'
    },
    {
      action: 'Demand forecast updated',
      item: 'Smartphone Cases',
      quantity: 'Increased by 25%',
      supplier: 'AI Prediction',
      time: '6 hours ago',
      status: 'completed'
    }
  ];

  const getDemandColor = (demand) => {
    switch (demand.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getStockLevel = (current, min, max) => {
    const percentage = (current / max) * 100;
    return Math.min(100, Math.max(0, percentage));
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {inventoryStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="w-4 h-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <span className="mr-1">{stat.change}</span>
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Low Stock Alert */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
            <CardDescription>Items requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {lowStockItems.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">{item.sku}</p>
                  </div>
                  <Badge variant="destructive" className="text-xs">
                    Low Stock
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current</p>
                    <p className="font-medium">{item.current} units</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Min Required</p>
                    <p className="font-medium">{item.min} units</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Demand</p>
                    <p className={`font-medium ${getDemandColor(item.demand)}`}>
                      {item.demand}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Lead Time</p>
                    <p className="font-medium">{item.leadTime}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Stock Level: {getStockLevel(item.current, item.min, item.max).toFixed(0)}%
                  </div>
                  <Button size="sm" className="h-8">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Reorder {item.reorderSuggestion}
                  </Button>
                </div>
                
                <Progress value={getStockLevel(item.current, item.min, item.max)} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Demand Forecast */}
        <Card>
          <CardHeader>
            <CardTitle>Demand Forecast</CardTitle>
            <CardDescription>AI-powered demand predictions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {demandForecast.map((forecast, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">{forecast.category}</h3>
                  <div className="flex items-center space-x-2">
                    {forecast.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <Badge variant="secondary" className="text-xs">
                      {forecast.confidence}% confident
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current Demand</p>
                    <p className="font-medium">{forecast.currentDemand}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Predicted Demand</p>
                    <p className="font-medium">{forecast.predictedDemand}%</p>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  {forecast.seasonalFactor}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span>Current</span>
                    <span>{forecast.currentDemand}%</span>
                  </div>
                  <Progress value={forecast.currentDemand} className="h-2" />
                  <div className="flex items-center justify-between text-xs">
                    <span>Predicted</span>
                    <span>{forecast.predictedDemand}%</span>
                  </div>
                  <Progress value={forecast.predictedDemand} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Inventory Actions</CardTitle>
          <CardDescription>Automated and manual inventory adjustments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {action.action.includes('Auto') ? (
                      <Zap className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                    <div>
                      <p className="font-medium text-sm">{action.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {action.item} • {action.quantity}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <Badge variant={action.status === 'completed' ? 'default' : 'secondary'}>
                    {action.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {action.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

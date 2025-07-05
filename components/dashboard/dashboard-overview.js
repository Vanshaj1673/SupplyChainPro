'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Truck, 
  Users, 
  DollarSign,
  AlertTriangle,
  Clock,
  CheckCircle
} from 'lucide-react';

export function DashboardOverview() {
  const kpiData = [
    {
      title: 'Total Orders',
      value: '12,459',
      change: '+12.5%',
      trend: 'up',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'Active Deliveries',
      value: '847',
      change: '+8.2%',
      trend: 'up',
      icon: Truck,
      color: 'text-green-600'
    },
    {
      title: 'Warehouse Efficiency',
      value: '94.3%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: '$847,329',
      change: '+15.8%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-orange-600'
    }
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Low stock alert: iPhone 15 Pro (12 units left)',
      time: '2 min ago',
      icon: AlertTriangle
    },
    {
      type: 'info',
      message: 'Route optimization completed for Zone A',
      time: '5 min ago',
      icon: CheckCircle
    },
    {
      type: 'error',
      message: 'Delivery delay: Package #DL-2847',
      time: '8 min ago',
      icon: Clock
    }
  ];

  const warehouseZones = [
    { name: 'Zone A', efficiency: 96, items: 1247 },
    { name: 'Zone B', efficiency: 92, items: 892 },
    { name: 'Zone C', efficiency: 87, items: 1104 },
    { name: 'Zone D', efficiency: 94, items: 756 }
  ];

  const deliveryStats = [
    { route: 'Route 1', status: 'On Time', progress: 85, eta: '2:30 PM' },
    { route: 'Route 2', status: 'Delayed', progress: 60, eta: '3:45 PM' },
    { route: 'Route 3', status: 'Completed', progress: 100, eta: 'Delivered' },
    { route: 'Route 4', status: 'On Time', progress: 40, eta: '4:15 PM' }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <Icon className={`w-4 h-4 ${kpi.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span className={kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {kpi.change} from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Warehouse Efficiency */}
        <Card>
          <CardHeader>
            <CardTitle>Warehouse Zones</CardTitle>
            <CardDescription>Real-time efficiency metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {warehouseZones.map((zone, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{zone.name}</span>
                    <span className="text-sm text-muted-foreground">{zone.efficiency}%</span>
                  </div>
                  <Progress value={zone.efficiency} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">{zone.items} items</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Delivery Status */}
        <Card>
          <CardHeader>
            <CardTitle>Active Deliveries</CardTitle>
            <CardDescription>Real-time delivery tracking</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {deliveryStats.map((delivery, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{delivery.route}</span>
                    <Badge variant={
                      delivery.status === 'On Time' ? 'default' : 
                      delivery.status === 'Delayed' ? 'destructive' : 
                      'secondary'
                    }>
                      {delivery.status}
                    </Badge>
                  </div>
                  <Progress value={delivery.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">ETA: {delivery.eta}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
          <CardDescription>System notifications and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => {
              const Icon = alert.icon;
              return (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Icon className={`w-4 h-4 mt-0.5 ${
                    alert.type === 'warning' ? 'text-yellow-500' :
                    alert.type === 'error' ? 'text-red-500' :
                    'text-green-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Package, 
  MapPin, 
  Route,
  Users,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Zap
} from 'lucide-react';

export function WarehouseSection() {
  const warehouseStats = [
    { title: 'Total Items', value: '45,892', change: '+2.3%', icon: Package },
    { title: 'Active Workers', value: '127', change: '+5.1%', icon: Users },
    { title: 'Avg Pick Time', value: '2.4 min', change: '-12.5%', icon: Clock },
    { title: 'Efficiency Score', value: '94.3%', change: '+1.8%', icon: TrendingUp }
  ];

  const zones = [
    {
      id: 'A',
      name: 'Electronics',
      efficiency: 96,
      items: 1247,
      workers: 12,
      status: 'optimal',
      pickingPath: 'A* Algorithm',
      avgTime: '2.1 min'
    },
    {
      id: 'B',
      name: 'Clothing',
      efficiency: 92,
      items: 892,
      workers: 8,
      status: 'good',
      pickingPath: 'Optimized',
      avgTime: '2.8 min'
    },
    {
      id: 'C',
      name: 'Home & Garden',
      efficiency: 87,
      items: 1104,
      workers: 10,
      status: 'needs-attention',
      pickingPath: 'Standard',
      avgTime: '3.2 min'
    },
    {
      id: 'D',
      name: 'Sports',
      efficiency: 94,
      items: 756,
      workers: 6,
      status: 'optimal',
      pickingPath: 'A* Algorithm',
      avgTime: '2.5 min'
    }
  ];

  const recentOptimizations = [
    {
      zone: 'Zone A',
      improvement: 'Rearranged high-frequency items closer to picking station',
      impact: '+15% efficiency',
      time: '2 hours ago'
    },
    {
      zone: 'Zone C',
      improvement: 'Implemented A* pathfinding for complex layouts',
      impact: '+22% faster picking',
      time: '4 hours ago'
    },
    {
      zone: 'Zone B',
      improvement: 'Grouped complementary products based on purchase patterns',
      impact: '+18% productivity',
      time: '6 hours ago'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'optimal': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'needs-attention': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'optimal': return 'default';
      case 'good': return 'secondary';
      case 'needs-attention': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {warehouseStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="w-4 h-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change} from last week
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Warehouse Zones */}
        <Card>
          <CardHeader>
            <CardTitle>Warehouse Zones</CardTitle>
            <CardDescription>AI-optimized layout and efficiency metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {zones.map((zone) => (
              <div key={zone.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(zone.status)}`} />
                    <h3 className="font-semibold">Zone {zone.id} - {zone.name}</h3>
                  </div>
                  <Badge variant={getStatusBadge(zone.status)}>
                    {zone.efficiency}%
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Items</p>
                    <p className="font-medium">{zone.items}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Workers</p>
                    <p className="font-medium">{zone.workers}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Pick Time</p>
                    <p className="font-medium">{zone.avgTime}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm">
                    <Route className="w-4 h-4" />
                    <span>{zone.pickingPath}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Optimize
                  </Button>
                </div>
                
                <Progress value={zone.efficiency} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Optimizations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent AI Optimizations</CardTitle>
            <CardDescription>Automated improvements and their impact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOptimizations.map((opt, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-sm">{opt.zone}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {opt.impact}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {opt.improvement}
                </p>
                <p className="text-xs text-muted-foreground">
                  {opt.time}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Warehouse Map Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Warehouse Layout</CardTitle>
          <CardDescription>Interactive warehouse map with real-time worker locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-8 min-h-96 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8">
              {zones.map((zone) => (
                <div key={zone.id} className="bg-white rounded-lg p-6 shadow-sm border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Zone {zone.id}</h3>
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(zone.status)}`} />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Items:</span>
                      <span>{zone.items}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Workers:</span>
                      <span>{zone.workers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Efficiency:</span>
                      <span>{zone.efficiency}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

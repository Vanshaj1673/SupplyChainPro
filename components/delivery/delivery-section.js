'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  MapPin, 
  Route,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Navigation,
  Fuel,
  ThermometerSun
} from 'lucide-react';

export function DeliverySection() {
  const deliveryStats = [
    { title: 'Active Routes', value: '24', change: '+3.2%', icon: Route },
    { title: 'On-Time Delivery', value: '94.7%', change: '+2.1%', icon: CheckCircle },
    { title: 'Fuel Efficiency', value: '87.3%', change: '+5.8%', icon: Fuel },
    { title: 'Avg Delivery Time', value: '32 min', change: '-8.2%', icon: Clock }
  ];

  const routes = [
    {
      id: 'RT-001',
      driver: 'John Smith',
      vehicle: 'Truck #1247',
      status: 'in-transit',
      progress: 65,
      stops: 8,
      completed: 5,
      eta: '2:45 PM',
      distance: '47.2 km',
      fuel: '78%',
      weather: 'Clear',
      trafficDelay: 0
    },
    {
      id: 'RT-002',
      driver: 'Sarah Johnson',
      vehicle: 'Van #892',
      status: 'delayed',
      progress: 45,
      stops: 12,
      completed: 4,
      eta: '3:30 PM',
      distance: '62.1 km',
      fuel: '45%',
      weather: 'Light Rain',
      trafficDelay: 15
    },
    {
      id: 'RT-003',
      driver: 'Mike Wilson',
      vehicle: 'Truck #1104',
      status: 'on-time',
      progress: 80,
      stops: 6,
      completed: 5,
      eta: '2:15 PM',
      distance: '31.8 km',
      fuel: '92%',
      weather: 'Sunny',
      trafficDelay: 0
    },
    {
      id: 'RT-004',
      driver: 'Lisa Davis',
      vehicle: 'Van #756',
      status: 'completed',
      progress: 100,
      stops: 10,
      completed: 10,
      eta: 'Delivered',
      distance: '55.7 km',
      fuel: '23%',
      weather: 'Cloudy',
      trafficDelay: 0
    }
  ];

  const optimizations = [
    {
      route: 'RT-001',
      optimization: 'Rerouted due to traffic congestion on Highway 101',
      timeSaved: '12 minutes',
      fuelSaved: '2.3L',
      time: '15 min ago'
    },
    {
      route: 'RT-002',
      optimization: 'Consolidated delivery stops in downtown area',
      timeSaved: '8 minutes',
      fuelSaved: '1.8L',
      time: '32 min ago'
    },
    {
      route: 'RT-003',
      optimization: 'Weather-adjusted route to avoid storm area',
      timeSaved: '20 minutes',
      fuelSaved: '4.1L',
      time: '1 hour ago'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'on-time': return 'bg-green-500';
      case 'in-transit': return 'bg-blue-500';
      case 'delayed': return 'bg-red-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'on-time': return 'default';
      case 'in-transit': return 'secondary';
      case 'delayed': return 'destructive';
      case 'completed': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {deliveryStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="w-4 h-4 text-green-600" />
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
        {/* Active Routes */}
        <Card>
          <CardHeader>
            <CardTitle>Active Delivery Routes</CardTitle>
            <CardDescription>Real-time tracking and optimization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {routes.map((route) => (
              <div key={route.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(route.status)}`} />
                    <div>
                      <h3 className="font-semibold">{route.id}</h3>
                      <p className="text-sm text-muted-foreground">{route.driver} • {route.vehicle}</p>
                    </div>
                  </div>
                  <Badge variant={getStatusBadge(route.status)}>
                    {route.status.replace('-', ' ')}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Progress</p>
                    <p className="font-medium">{route.completed}/{route.stops} stops</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">ETA</p>
                    <p className="font-medium">{route.eta}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Distance</p>
                    <p className="font-medium">{route.distance}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Fuel</p>
                    <p className="font-medium">{route.fuel}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <ThermometerSun className="w-4 h-4" />
                      <span>{route.weather}</span>
                    </div>
                    {route.trafficDelay > 0 && (
                      <div className="flex items-center space-x-1 text-red-600">
                        <AlertTriangle className="w-4 h-4" />
                        <span>+{route.trafficDelay}min</span>
                      </div>
                    )}
                  </div>
                  <Button size="sm" variant="outline">
                    <Navigation className="w-4 h-4 mr-2" />
                    Track
                  </Button>
                </div>
                
                <Progress value={route.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Route Optimizations */}
        <Card>
          <CardHeader>
            <CardTitle>AI Route Optimizations</CardTitle>
            <CardDescription>Real-time route adjustments and savings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {optimizations.map((opt, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Navigation className="w-4 h-4 text-blue-500" />
                    <span className="font-medium text-sm">{opt.route}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    -{opt.timeSaved}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {opt.optimization}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{opt.timeSaved}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Fuel className="w-3 h-3" />
                      <span>{opt.fuelSaved}</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground">{opt.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Delivery Map */}
      <Card>
        <CardHeader>
          <CardTitle>Real-Time Delivery Map</CardTitle>
          <CardDescription>Live tracking of all delivery vehicles with traffic and weather overlay</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 rounded-lg p-8 min-h-96 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>On Time</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span>In Transit</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span>Delayed</span>
              </div>
            </div>
            
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Interactive Delivery Map</p>
              <p className="text-muted-foreground">
                Real-time GPS tracking, traffic conditions, and weather data
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

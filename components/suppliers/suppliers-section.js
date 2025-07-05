'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  TrendingUp,
  TrendingDown,
  Star,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
  Package
} from 'lucide-react';

export function SuppliersSection() {
  const supplierStats = [
    { title: 'Active Suppliers', value: '147', change: '+12', icon: Users },
    { title: 'Avg Rating', value: '4.6/5', change: '+0.2', icon: Star },
    { title: 'Cost Savings', value: '$125K', change: '+18%', icon: DollarSign },
    { title: 'On-Time Delivery', value: '94.3%', change: '+3.1%', icon: Clock }
  ];

  const topSuppliers = [
    {
      id: 'SUP-001',
      name: 'TechSupply Global',
      category: 'Electronics',
      rating: 4.8,
      reliability: 96,
      cost: '$$$',
      lastOrder: '2 days ago',
      totalOrders: 247,
      avgDeliveryTime: '3.2 days',
      qualityScore: 95,
      paymentTerms: 'Net 30',
      status: 'preferred'
    },
    {
      id: 'SUP-002',
      name: 'Fashion Forward Inc.',
      category: 'Clothing',
      rating: 4.5,
      reliability: 92,
      cost: '$$',
      lastOrder: '1 week ago',
      totalOrders: 189,
      avgDeliveryTime: '4.1 days',
      qualityScore: 88,
      paymentTerms: 'Net 45',
      status: 'active'
    },
    {
      id: 'SUP-003',
      name: 'Home Essentials Ltd.',
      category: 'Home & Garden',
      rating: 4.3,
      reliability: 89,
      cost: '$',
      lastOrder: '3 days ago',
      totalOrders: 156,
      avgDeliveryTime: '5.2 days',
      qualityScore: 86,
      paymentTerms: 'Net 60',
      status: 'active'
    },
    {
      id: 'SUP-004',
      name: 'SportGear Pro',
      category: 'Sports',
      rating: 4.7,
      reliability: 94,
      cost: '$$',
      lastOrder: '5 days ago',
      totalOrders: 203,
      avgDeliveryTime: '3.8 days',
      qualityScore: 92,
      paymentTerms: 'Net 30',
      status: 'preferred'
    }
  ];

  const costOptimizations = [
    {
      supplier: 'TechSupply Global',
      optimization: 'Bulk purchase discount negotiated',
      savings: '$12,500',
      percentage: '15%',
      items: 'Smartphones & Accessories',
      effective: 'Next order'
    },
    {
      supplier: 'Fashion Forward Inc.',
      optimization: 'Seasonal contract adjustment',
      savings: '$8,200',
      percentage: '12%',
      items: 'Winter Collection',
      effective: 'Immediately'
    },
    {
      supplier: 'Home Essentials Ltd.',
      optimization: 'Early payment discount applied',
      savings: '$3,450',
      percentage: '8%',
      items: 'Garden Tools',
      effective: 'This month'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Delivery Performance',
      score: 94,
      trend: 'up',
      change: '+2.3%'
    },
    {
      metric: 'Quality Score',
      score: 91,
      trend: 'up',
      change: '+1.8%'
    },
    {
      metric: 'Cost Efficiency',
      score: 87,
      trend: 'up',
      change: '+5.2%'
    },
    {
      metric: 'Communication',
      score: 89,
      trend: 'down',
      change: '-1.1%'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'preferred': return 'bg-green-500';
      case 'active': return 'bg-blue-500';
      case 'warning': return 'bg-yellow-500';
      case 'inactive': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'preferred': return 'default';
      case 'active': return 'secondary';
      case 'warning': return 'destructive';
      case 'inactive': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {supplierStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="w-4 h-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Suppliers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Suppliers</CardTitle>
            <CardDescription>Performance-ranked supplier partnerships</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topSuppliers.map((supplier) => (
              <div key={supplier.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(supplier.status)}`} />
                    <div>
                      <h3 className="font-semibold text-sm">{supplier.name}</h3>
                      <p className="text-xs text-muted-foreground">{supplier.category}</p>
                    </div>
                  </div>
                  <Badge variant={getStatusBadge(supplier.status)}>
                    {supplier.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Rating</p>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="font-medium">{supplier.rating}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reliability</p>
                    <p className="font-medium">{supplier.reliability}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Cost Level</p>
                    <p className="font-medium">{supplier.cost}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-muted-foreground">Orders</p>
                    <p className="font-medium">{supplier.totalOrders}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg Delivery</p>
                    <p className="font-medium">{supplier.avgDeliveryTime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Quality</p>
                    <p className="font-medium">{supplier.qualityScore}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Payment</p>
                    <p className="font-medium">{supplier.paymentTerms}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Last order: {supplier.lastOrder}
                  </span>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
                
                <Progress value={supplier.reliability} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Cost Optimizations */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Optimizations</CardTitle>
            <CardDescription>AI-identified savings opportunities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {costOptimizations.map((opt, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{opt.supplier}</h3>
                    <p className="text-xs text-muted-foreground">{opt.items}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {opt.percentage} off
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {opt.optimization}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="font-medium text-green-600">{opt.savings}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Effective: {opt.effective}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Supplier Performance Metrics</CardTitle>
          <CardDescription>Overall supplier network performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm">{metric.metric}</h3>
                  <div className="flex items-center space-x-1">
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-500" />
                    )}
                    <span className={`text-xs ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-bold">{metric.score}%</div>
                <Progress value={metric.score} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

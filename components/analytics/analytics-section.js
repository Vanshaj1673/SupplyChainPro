'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  TrendingUp,
  TrendingDown,
  PieChart,
  LineChart,
  Target,
  Clock,
  DollarSign,
  Package,
  Truck,
  Users
} from 'lucide-react';

export function AnalyticsSection() {
  const analyticsStats = [
    { title: 'Total Revenue', value: '$2.4M', change: '+18.2%', icon: DollarSign },
    { title: 'Order Volume', value: '45,892', change: '+12.5%', icon: Package },
    { title: 'Delivery Efficiency', value: '94.3%', change: '+3.1%', icon: Truck },
    { title: 'Customer Satisfaction', value: '4.8/5', change: '+0.2', icon: Users }
  ];

  const performanceMetrics = [
    {
      category: 'Warehouse Operations',
      metrics: [
        { name: 'Pick Efficiency', value: 94, target: 95, trend: 'up' },
        { name: 'Inventory Turnover', value: 4.2, target: 4.5, trend: 'up' },
        { name: 'Order Accuracy', value: 99.1, target: 99.5, trend: 'stable' },
        { name: 'Storage Utilization', value: 87, target: 90, trend: 'up' }
      ]
    },
    {
      category: 'Delivery & Logistics',
      metrics: [
        { name: 'On-Time Delivery', value: 94.3, target: 95, trend: 'up' },
        { name: 'Route Optimization', value: 89, target: 92, trend: 'up' },
        { name: 'Fuel Efficiency', value: 87.3, target: 85, trend: 'up' },
        { name: 'Customer Satisfaction', value: 4.8, target: 4.5, trend: 'up' }
      ]
    }
  ];

  const supplyChainInsights = [
    {
      title: 'Peak Season Preparation',
      description: 'AI predicts 35% increase in demand during holiday season',
      impact: 'High',
      recommendation: 'Increase inventory by 40% and add 2 temporary staff',
      timeframe: 'Next 2 weeks',
      confidence: 89
    },
    {
      title: 'Supplier Diversification',
      description: 'Over-reliance on single supplier for electronics category',
      impact: 'Medium',
      recommendation: 'Identify 2 backup suppliers for critical components',
      timeframe: 'Next 30 days',
      confidence: 76
    },
    {
      title: 'Route Optimization Opportunity',
      description: 'New delivery zone showing inefficient routing patterns',
      impact: 'Low',
      recommendation: 'Recalibrate Zone C delivery algorithms',
      timeframe: 'Next week',
      confidence: 94
    }
  ];

  const getImpactBadge = (impact) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'default';
      default: return 'outline';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-3 h-3 text-green-500" />;
      case 'down': return <TrendingDown className="w-3 h-3 text-red-500" />;
      default: return <Target className="w-3 h-3 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="w-4 h-4 text-indigo-600" />
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

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {performanceMetrics.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
              <CardDescription>Key performance indicators and targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{metric.name}</span>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(metric.trend)}
                      <span className="text-sm">
                        {typeof metric.value === 'number' && metric.value % 1 !== 0 
                          ? metric.value.toFixed(1) 
                          : metric.value}
                        {metric.name.includes('Satisfaction') ? '' : 
                         metric.name.includes('Turnover') ? 'x' : '%'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress 
                      value={metric.name.includes('Satisfaction') ? metric.value * 20 : metric.value} 
                      className="h-2 flex-1" 
                    />
                    <span className="text-xs text-muted-foreground">
                      Target: {metric.target}{metric.name.includes('Satisfaction') ? '' : 
                              metric.name.includes('Turnover') ? 'x' : '%'}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Supply Chain Insights</CardTitle>
          <CardDescription>Predictive analytics and recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {supplyChainInsights.map((insight, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-sm">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {insight.description}
                  </p>
                </div>
                <Badge variant={getImpactBadge(insight.impact)}>
                  {insight.impact} Impact
                </Badge>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3">
                <p className="text-sm font-medium mb-1">Recommendation:</p>
                <p className="text-sm text-muted-foreground">
                  {insight.recommendation}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{insight.timeframe}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="w-4 h-4" />
                    <span>{insight.confidence}% confident</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Apply Recommendation
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Supply Chain Trends</CardTitle>
          <CardDescription>6-month performance visualization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+18.2%</div>
                <p className="text-sm text-muted-foreground">Revenue Growth</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">+12.5%</div>
                <p className="text-sm text-muted-foreground">Order Volume</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">+3.1%</div>
                <p className="text-sm text-muted-foreground">Efficiency</p>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-8 min-h-64 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Interactive Analytics Dashboard</p>
                <p className="text-muted-foreground">
                  Real-time charts and graphs showing supply chain performance trends
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

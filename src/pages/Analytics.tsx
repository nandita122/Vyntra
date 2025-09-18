import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";
import { 
  Download, 
  TrendingUp, 
  Activity, 
  Award, 
  BookOpen,
  Users,
  Calendar,
  FileText
} from "lucide-react";

const activityData = [
  { month: "Jan", seminars: 2, conferences: 1, internships: 0, competitions: 1 },
  { month: "Feb", seminars: 3, conferences: 2, internships: 1, competitions: 2 },
  { month: "Mar", seminars: 4, conferences: 1, internships: 0, competitions: 3 },
  { month: "Apr", seminars: 2, conferences: 0, internships: 1, competitions: 1 },
  { month: "May", seminars: 1, conferences: 3, internships: 2, competitions: 0 },
  { month: "Jun", seminars: 3, conferences: 1, internships: 1, competitions: 2 },
];

const skillsData = [
  { name: "Technical Skills", value: 45, color: "#3B82F6" },
  { name: "Leadership", value: 25, color: "#10B981" },
  { name: "Communication", value: 20, color: "#F59E0B" },
  { name: "Research", value: 10, color: "#EF4444" },
];

const performanceData = [
  { semester: "Sem 1", cgpa: 8.2, activities: 3 },
  { semester: "Sem 2", cgpa: 8.4, activities: 5 },
  { semester: "Sem 3", cgpa: 8.6, activities: 7 },
  { semester: "Sem 4", cgpa: 8.5, activities: 6 },
  { semester: "Sem 5", cgpa: 8.7, activities: 8 },
  { semester: "Sem 6", cgpa: 8.8, activities: 10 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Analytics & Reports</h1>
          <p className="text-muted-foreground">Comprehensive insights into your academic journey and achievements</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select defaultValue="current-year">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-year">Current Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-primary w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Activities</p>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-success">+20% from last semester</p>
              </div>
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">CGPA</p>
                <p className="text-2xl font-bold">8.7</p>
                <p className="text-xs text-success">+0.3 improvement</p>
              </div>
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Certifications</p>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-success">+5 this semester</p>
              </div>
              <Award className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Portfolio Score</p>
                <p className="text-2xl font-bold">92%</p>
                <p className="text-xs text-success">Excellent</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activities" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="activities" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Activity Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Activity Trends</CardTitle>
                <CardDescription>Monthly breakdown of activities by type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="seminars" fill="#3B82F6" name="Seminars" />
                    <Bar dataKey="conferences" fill="#10B981" name="Conferences" />
                    <Bar dataKey="internships" fill="#F59E0B" name="Internships" />
                    <Bar dataKey="competitions" fill="#EF4444" name="Competitions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Skills Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Skills Distribution</CardTitle>
                <CardDescription>Breakdown of skills gained through activities</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={skillsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {skillsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance vs Activities</CardTitle>
              <CardDescription>Correlation between CGPA and extracurricular involvement</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis yAxisId="left" domain={[8, 9]} />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line 
                    yAxisId="left" 
                    type="monotone" 
                    dataKey="cgpa" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    name="CGPA"
                  />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="activities" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    name="Activities Count"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Development Timeline</CardTitle>
              <CardDescription>Growth in different skill areas over time</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                Detailed skill development analytics and competency mapping will be displayed here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">NAAC Report</h3>
                <p className="text-sm text-muted-foreground">Generate NAAC compliance report</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Generate
                </Button>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">AICTE Report</h3>
                <p className="text-sm text-muted-foreground">AICTE evaluation format</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Generate
                </Button>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">NIRF Report</h3>
                <p className="text-sm text-muted-foreground">NIRF ranking parameters</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Generate
                </Button>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Custom Report</h3>
                <p className="text-sm text-muted-foreground">Institution-specific format</p>
                <Button variant="outline" size="sm" className="mt-3">
                  Generate
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
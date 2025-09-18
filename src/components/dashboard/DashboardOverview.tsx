import { StatsCard } from "./StatsCard";
import { ActivityCard } from "./ActivityCard";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calendar, 
  Award, 
  TrendingUp,
  Plus,
  Filter,
  Download
} from "lucide-react";

const stats = [
  {
    title: "Total Activities",
    value: 24,
    subtitle: "This semester",
    icon: <Award className="h-6 w-6" />,
    trend: { value: 12, isPositive: true },
    variant: "primary" as const,
  },
  {
    title: "Attendance Rate",
    value: "94.5%",
    subtitle: "Current semester",
    icon: <Calendar className="h-6 w-6" />,
    trend: { value: 3, isPositive: true },
    variant: "success" as const,
  },
  {
    title: "Academic Score",
    value: "8.7/10",
    subtitle: "CGPA",
    icon: <BookOpen className="h-6 w-6" />,
    trend: { value: 0.3, isPositive: true },
    variant: "secondary" as const,
  },
  {
    title: "Portfolio Score",
    value: "92%",
    subtitle: "Completion rate",
    icon: <TrendingUp className="h-6 w-6" />,
    variant: "default" as const,
  },
];

const recentActivities = [
  {
    title: "Machine Learning Workshop",
    type: "Workshop",
    date: "March 15, 2024",
    location: "Conference Hall A",
    duration: "6 hours",
    status: "approved" as const,
    description: "Comprehensive workshop on ML algorithms and practical applications in industry.",
  },
  {
    title: "Google Summer of Code 2024",
    type: "Internship",
    date: "May 1 - August 31, 2024",
    location: "Remote",
    duration: "3 months",
    status: "pending" as const,
    description: "Open source contribution program with Google focusing on web development.",
  },
  {
    title: "IEEE Conference on AI",
    type: "Conference",
    date: "February 20-22, 2024",
    location: "Mumbai, India",
    duration: "3 days",
    status: "approved" as const,
    description: "International conference on artificial intelligence and machine learning advancements.",
  },
  {
    title: "Coding Competition",
    type: "Competition",
    date: "March 10, 2024",
    location: "Campus",
    duration: "4 hours",
    status: "rejected" as const,
    description: "Annual coding competition organized by the Computer Science department.",
  },
];

export const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
        <p className="text-white/90 text-lg">
          Track your academic journey and build your digital portfolio
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-white/30">
            <Plus className="h-4 w-4 mr-2" />
            Add Activity
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Download className="h-4 w-4 mr-2" />
            Download Portfolio
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activities Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Recent Activities</h2>
            <p className="text-muted-foreground">Your latest submissions and updates</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" className="bg-gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Activity
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recentActivities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Button variant="outline">
            View All Activities
          </Button>
        </div>
      </div>
    </div>
  );
};
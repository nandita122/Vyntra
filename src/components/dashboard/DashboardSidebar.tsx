import { 
  LayoutDashboard, 
  Activity, 
  FileText, 
  TrendingUp, 
  Settings, 
  User,
  Award,
  Calendar,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Activity, label: "Activity Tracker" },
  { icon: FileText, label: "Digital Portfolio" },
  { icon: TrendingUp, label: "Analytics" },
  { icon: Calendar, label: "Academic Calendar" },
  { icon: Award, label: "Achievements" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export const DashboardSidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-card border-r border-card-border shadow-custom-md">
      {/* Logo Section */}
      <div className="flex items-center gap-3 p-6 border-b border-card-border">
        <div className="p-2 bg-gradient-primary rounded-lg">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-bold text-lg text-foreground">EduTracker</h1>
          <p className="text-sm text-muted-foreground">Student Portal</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                item.active
                  ? "bg-gradient-primary text-primary-foreground shadow-custom-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="absolute bottom-4 left-4 right-4 p-4 bg-muted rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
            <span className="text-secondary-foreground font-semibold">JS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground text-sm truncate">John Smith</p>
            <p className="text-xs text-muted-foreground truncate">Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};
import { 
  LayoutDashboard, 
  Activity, 
  FileText, 
  TrendingUp, 
  Settings, 
  User,
  Award,
  Calendar,
  GraduationCap,
  ChevronLeft,
  BookOpen,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, category: "main" },
  { icon: Activity, label: "Activity Tracker", category: "main" },
  { icon: FileText, label: "Digital Portfolio", category: "main" },
  { icon: Calendar, label: "Academic Calendar", category: "main" },
];

const secondaryItems = [
  { icon: TrendingUp, label: "Analytics", category: "reports" },
  { icon: Award, label: "Achievements", category: "reports" },
  { icon: BookOpen, label: "Resources", category: "reports" },
];

const bottomItems = [
  { icon: User, label: "Profile", category: "account" },
  { icon: Settings, label: "Settings", category: "account" },
];

export const DashboardSidebar = ({ isOpen, onToggle }: DashboardSidebarProps) => {
  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 bg-card border-r border-card-border shadow-custom-lg transition-all duration-300",
      isOpen ? "w-64" : "w-16",
      "lg:translate-x-0",
      !isOpen && "lg:w-16",
      "translate-x-0"
    )}>
      {/* Header with logo and collapse toggle */}
      <div className="flex items-center justify-between p-4 border-b border-card-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          {isOpen && (
            <div className="transition-opacity duration-200">
              <h1 className="font-bold text-lg text-foreground">EduTracker</h1>
              <p className="text-sm text-muted-foreground">Student Portal</p>
            </div>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle}
          className="hidden lg:flex h-8 w-8"
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", !isOpen && "rotate-180")} />
        </Button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-3 space-y-1">
          <div className="mb-4">
            {isOpen && (
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                Main
              </p>
            )}
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group",
                    item.active
                      ? "bg-gradient-primary text-primary-foreground shadow-custom-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && (
                    <span className="font-medium text-sm truncate">{item.label}</span>
                  )}
                  {!isOpen && (
                    <div className="absolute left-16 bg-card border border-card-border rounded-lg px-3 py-2 text-sm font-medium text-foreground opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-custom-md z-50 whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mb-4">
            {isOpen && (
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
                Reports
              </p>
            )}
            {secondaryItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group",
                    "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && (
                    <span className="font-medium text-sm truncate">{item.label}</span>
                  )}
                  {!isOpen && (
                    <div className="absolute left-16 bg-card border border-card-border rounded-lg px-3 py-2 text-sm font-medium text-foreground opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-custom-md z-50 whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Bottom section with user profile */}
      <div className="border-t border-card-border p-3">
        <div className="space-y-1 mb-3">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group",
                  "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {isOpen && (
                  <span className="font-medium text-sm truncate">{item.label}</span>
                )}
                {!isOpen && (
                  <div className="absolute left-16 bg-card border border-card-border rounded-lg px-3 py-2 text-sm font-medium text-foreground opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-custom-md z-50 whitespace-nowrap">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* User Profile Card */}
        <div className={cn(
          "p-3 bg-muted/50 rounded-lg border border-card-border transition-all duration-200",
          !isOpen && "p-2"
        )}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-secondary-foreground font-semibold text-sm">JS</span>
            </div>
            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">John Smith</p>
                <p className="text-xs text-muted-foreground truncate">Computer Science</p>
              </div>
            )}
            {!isOpen && (
              <div className="absolute left-16 bg-card border border-card-border rounded-lg px-3 py-2 text-sm font-medium text-foreground opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-custom-md z-50 whitespace-nowrap">
                John Smith<br/>
                <span className="text-xs text-muted-foreground">Computer Science</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
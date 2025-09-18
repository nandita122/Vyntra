import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="h-16 bg-card border-b border-card-border flex items-center justify-between px-6 shadow-custom-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-foreground">Dashboard</h2>
      </div>

      {/* Center Section - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search activities, records..." 
            className="pl-10 bg-background border-border"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </Button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">John Smith</p>
            <p className="text-xs text-muted-foreground">Student ID: CS2024001</p>
          </div>
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm">JS</span>
          </div>
        </div>
      </div>
    </header>
  );
};
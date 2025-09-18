import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "secondary" | "success";
}

export const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend,
  variant = "default" 
}: StatsCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-primary text-primary-foreground border-primary/20";
      case "secondary":
        return "bg-gradient-secondary text-secondary-foreground border-secondary/20";
      case "success":
        return "bg-gradient-to-br from-success to-success-light text-success-foreground border-success/20";
      default:
        return "bg-card text-card-foreground border-card-border";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "primary":
      case "secondary":
      case "success":
        return "text-current opacity-90";
      default:
        return "text-primary";
    }
  };

  return (
    <div className={cn(
      "p-4 lg:p-6 rounded-lg lg:rounded-xl border shadow-custom-md transition-all duration-200 hover:shadow-custom-lg hover:-translate-y-1 group",
      getVariantStyles()
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className={cn(
            "text-sm font-medium mb-1",
            variant === "default" ? "text-muted-foreground" : "text-current opacity-90"
          )}>
            {title}
          </p>
          <p className="text-xl lg:text-2xl font-bold">{value}</p>
          {subtitle && (
            <p className={cn(
              "text-xs lg:text-sm mt-1",
              variant === "default" ? "text-muted-foreground" : "text-current opacity-80"
            )}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn(
          "p-2 lg:p-3 rounded-lg transition-transform group-hover:scale-110", 
          getIconStyles()
        )}>
          {icon}
        </div>
      </div>
      
      {trend && (
        <div className="flex items-center gap-1 mt-3 lg:mt-4 pt-3 border-t border-current/10">
          <span className={cn(
            "text-xs lg:text-sm font-medium",
            trend.isPositive ? "text-success" : "text-destructive"
          )}>
            {trend.isPositive ? "+" : ""}{trend.value}%
          </span>
          <span className={cn(
            "text-xs lg:text-sm",
            variant === "default" ? "text-muted-foreground" : "text-current opacity-80"
          )}>
            from last month
          </span>
        </div>
      )}
    </div>
  );
};
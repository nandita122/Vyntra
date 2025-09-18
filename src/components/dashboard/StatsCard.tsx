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
      "p-6 rounded-lg border shadow-custom-md transition-all duration-200 hover:shadow-custom-lg",
      getVariantStyles()
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={cn(
            "text-sm font-medium",
            variant === "default" ? "text-muted-foreground" : "text-current opacity-90"
          )}>
            {title}
          </p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {subtitle && (
            <p className={cn(
              "text-sm mt-1",
              variant === "default" ? "text-muted-foreground" : "text-current opacity-80"
            )}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-lg", getIconStyles())}>
          {icon}
        </div>
      </div>
      
      {trend && (
        <div className="flex items-center gap-1 mt-4">
          <span className={cn(
            "text-sm font-medium",
            trend.isPositive ? "text-success" : "text-destructive"
          )}>
            {trend.isPositive ? "+" : ""}{trend.value}%
          </span>
          <span className={cn(
            "text-sm",
            variant === "default" ? "text-muted-foreground" : "text-current opacity-80"
          )}>
            from last month
          </span>
        </div>
      )}
    </div>
  );
};
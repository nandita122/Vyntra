import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  ExternalLink 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  title: string;
  type: string;
  date: string;
  location?: string;
  duration?: string;
  status: "approved" | "pending" | "rejected";
  description?: string;
}

const statusConfig = {
  approved: {
    icon: CheckCircle,
    variant: "default" as const,
    color: "text-success",
    bg: "bg-success/10",
  },
  pending: {
    icon: AlertCircle,
    variant: "secondary" as const,
    color: "text-warning",
    bg: "bg-warning/10",
  },
  rejected: {
    icon: XCircle,
    variant: "destructive" as const,
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
};

export const ActivityCard = ({
  title,
  type,
  date,
  location,
  duration,
  status,
  description,
}: ActivityCardProps) => {
  const statusInfo = statusConfig[status];
  const StatusIcon = statusInfo.icon;

  return (
    <div className="bg-card border border-card-border rounded-lg p-6 shadow-custom hover:shadow-custom-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {type}
          </Badge>
        </div>
        <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full", statusInfo.bg)}>
          <StatusIcon className={cn("h-4 w-4", statusInfo.color)} />
          <span className={cn("text-sm font-medium capitalize", statusInfo.color)}>
            {status}
          </span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
      )}

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        {location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        )}
        {duration && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          View Details
        </Button>
        <Button variant="ghost" size="sm">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
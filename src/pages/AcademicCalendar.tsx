import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  CalendarDays,
  Clock,
  MapPin,
  Plus,
  Filter,
  Download,
  Bell,
  BookOpen,
  Users,
  Award,
  AlertCircle
} from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Mid-term Examinations",
    type: "exam",
    date: "2024-04-15",
    time: "09:00 AM",
    location: "Main Examination Hall",
    description: "Mid-semester examinations for all subjects",
    priority: "high"
  },
  {
    id: 2,
    title: "Tech Symposium 2024",
    type: "event",
    date: "2024-04-18",
    time: "10:00 AM",
    location: "Auditorium",
    description: "Annual technical symposium with industry experts",
    priority: "medium"
  },
  {
    id: 3,
    title: "Project Presentation",
    type: "academic",
    date: "2024-04-20",
    time: "02:00 PM",
    location: "Lab 101",
    description: "Final year project presentations",
    priority: "high"
  },
  {
    id: 4,
    title: "Coding Workshop",
    type: "workshop",
    date: "2024-04-22",
    time: "11:00 AM",
    location: "Computer Lab",
    description: "Advanced JavaScript and React workshop",
    priority: "low"
  },
  {
    id: 5,
    title: "Career Fair",
    type: "placement",
    date: "2024-04-25",
    time: "09:00 AM",
    location: "Campus Grounds",
    description: "Annual career fair with 50+ companies",
    priority: "high"
  }
];

const academicMilestones = [
  { title: "Semester Start", date: "2024-01-15", status: "completed" },
  { title: "Assignment Submissions", date: "2024-03-01", status: "completed" },
  { title: "Mid-term Exams", date: "2024-04-15", status: "upcoming" },
  { title: "Project Presentations", date: "2024-04-20", status: "upcoming" },
  { title: "Final Exams", date: "2024-05-15", status: "upcoming" },
  { title: "Semester End", date: "2024-05-30", status: "upcoming" }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "exam": return "destructive";
    case "workshop": return "secondary";
    case "placement": return "default";
    case "event": return "outline";
    default: return "secondary";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-100 text-red-800 border-red-200";
    case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "low": return "bg-green-100 text-green-800 border-green-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const AcademicCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Academic Calendar</h1>
          <p className="text-muted-foreground">Stay organized with your academic schedule and important events</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter Events
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export Calendar
          </Button>
          <Button className="bg-gradient-primary w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <CalendarDays className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Upcoming Events</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">This Week</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <AlertCircle className="h-8 w-8 mx-auto mb-2 text-destructive" />
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">High Priority</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Today's Events */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your events for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No events scheduled for today</p>
                <Button variant="outline" size="sm" className="mt-3">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your scheduled events and important dates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{event.title}</h4>
                        <Badge variant={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(event.priority)}`}>
                          {event.priority}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Milestones</CardTitle>
              <CardDescription>Key academic dates and deadlines for this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {academicMilestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                    <div className={`w-3 h-3 rounded-full ${
                      milestone.status === "completed" ? "bg-success" : "bg-muted-foreground"
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(milestone.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant={milestone.status === "completed" ? "default" : "secondary"}>
                      {milestone.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>Interactive calendar with all your events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">Interactive Calendar</p>
                <p className="text-sm">Full calendar view with event management will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AcademicCalendar;
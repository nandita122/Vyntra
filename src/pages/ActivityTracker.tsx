import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Upload, 
  Calendar, 
  MapPin, 
  Clock, 
  Award,
  BookOpen,
  Users,
  Briefcase,
  Trophy,
  Heart
} from "lucide-react";

const activityTypes = [
  { id: "seminar", label: "Seminar", icon: BookOpen },
  { id: "conference", label: "Conference", icon: Users },
  { id: "certification", label: "Certification", icon: Award },
  { id: "internship", label: "Internship", icon: Briefcase },
  { id: "competition", label: "Competition", icon: Trophy },
  { id: "volunteering", label: "Volunteering", icon: Heart },
];

const ActivityTracker = () => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Activity Tracker</h1>
          <p className="text-muted-foreground">Record and manage your academic and extracurricular activities</p>
        </div>
        <Button className="bg-gradient-primary w-full lg:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Add New Activity
        </Button>
      </div>

      <Tabs defaultValue="add" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="add">Add Activity</TabsTrigger>
          <TabsTrigger value="manage">Manage Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="add" className="space-y-6">
          {/* Activity Type Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Activity Type</CardTitle>
              <CardDescription>Choose the type of activity you want to record</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {activityTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-lg border transition-all hover:shadow-md ${
                        selectedType === type.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{type.label}</p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Activity Form */}
          {selectedType && (
            <Card>
              <CardHeader>
                <CardTitle>Activity Details</CardTitle>
                <CardDescription>Fill in the details of your {activityTypes.find(t => t.id === selectedType)?.label.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Activity Title</Label>
                    <Input id="title" placeholder="Enter activity title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Institution</Label>
                    <Input id="organization" placeholder="Enter organization name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input id="duration" placeholder="e.g., 2 hours, 3 days" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter location" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the activity, your role, and key learnings..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills Gained</Label>
                    <Input id="skills" placeholder="e.g., JavaScript, Leadership, Public Speaking" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="outcome">Outcome/Achievement</Label>
                    <Input id="outcome" placeholder="e.g., Certificate, Award, Grade" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="documents">Supporting Documents</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload certificates, photos, or other documents</p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-gradient-primary flex-1 lg:flex-none">
                    Submit for Approval
                  </Button>
                  <Button variant="outline" className="flex-1 lg:flex-none">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          {/* Activity Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24</p>
                  <p className="text-sm text-muted-foreground">Total Activities</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">18</p>
                  <p className="text-sm text-muted-foreground">Approved</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-warning">4</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-destructive">2</p>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest activity submissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Machine Learning Workshop", type: "Workshop", status: "approved", date: "Mar 15, 2024" },
                { title: "Google Summer of Code 2024", type: "Internship", status: "pending", date: "May 1, 2024" },
                { title: "IEEE Conference on AI", type: "Conference", status: "approved", date: "Feb 20, 2024" },
                { title: "Coding Competition", type: "Competition", status: "rejected", date: "Mar 10, 2024" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.type} • {activity.date}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      activity.status === "approved" ? "default" : 
                      activity.status === "pending" ? "secondary" : 
                      "destructive"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ActivityTracker;
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  CheckCircle2,
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  MessageSquare,
  Users,
  TrendingUp,
  FileText,
  Calendar,
  Award
} from "lucide-react";

const pendingActivities = [
  {
    id: 1,
    studentName: "John Smith",
    studentId: "CS2024001",
    title: "Machine Learning Workshop",
    type: "Workshop",
    date: "2024-03-15",
    duration: "6 hours",
    organization: "IEEE Student Branch",
    description: "Comprehensive workshop on ML algorithms and practical applications in industry.",
    documents: ["certificate.pdf", "attendance.pdf"],
    submittedOn: "2024-03-16",
    priority: "medium"
  },
  {
    id: 2,
    studentName: "Sarah Johnson",
    studentId: "CS2024002",
    title: "Google Summer of Code 2024",
    type: "Internship",
    date: "2024-05-01",
    duration: "3 months",
    organization: "Google LLC",
    description: "Open source contribution program with Google focusing on web development.",
    documents: ["acceptance_letter.pdf", "project_proposal.pdf"],
    submittedOn: "2024-03-14",
    priority: "high"
  },
  {
    id: 3,
    studentName: "Mike Chen",
    studentId: "CS2024003",
    title: "Hackathon Winner",
    type: "Competition",
    date: "2024-02-20",
    duration: "48 hours",
    organization: "TechFest 2024",
    description: "Won first place in national level hackathon with innovative healthcare solution.",
    documents: ["certificate.pdf", "project_demo.mp4", "team_photo.jpg"],
    submittedOn: "2024-03-10",
    priority: "high"
  }
];

const approvalStats = [
  { title: "Pending Review", count: 15, color: "text-orange-600", bgColor: "bg-orange-100" },
  { title: "Approved Today", count: 8, color: "text-green-600", bgColor: "bg-green-100" },
  { title: "Need Clarification", count: 3, color: "text-blue-600", bgColor: "bg-blue-100" },
  { title: "Rejected", count: 2, color: "text-red-600", bgColor: "bg-red-100" }
];

const FacultyPanel = () => {
  const [selectedActivity, setSelectedActivity] = useState<typeof pendingActivities[0] | null>(null);
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleApprove = (id: number) => {
    console.log("Approving activity:", id);
    // Implement approval logic
  };

  const handleReject = (id: number) => {
    console.log("Rejecting activity:", id);
    // Implement rejection logic
  };

  const filteredActivities = pendingActivities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.studentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || activity.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Faculty Approval Panel</h1>
          <p className="text-muted-foreground">Review and approve student activity submissions</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-gradient-primary w-full sm:w-auto">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {approvalStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.count}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <div className={`w-6 h-6 ${stat.color}`}>
                    {stat.title.includes("Pending") && <Clock className="w-6 h-6" />}
                    {stat.title.includes("Approved") && <CheckCircle2 className="w-6 h-6" />}
                    {stat.title.includes("Clarification") && <MessageSquare className="w-6 h-6" />}
                    {stat.title.includes("Rejected") && <XCircle className="w-6 h-6" />}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search by student name or activity..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full lg:w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="competition">Competition</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Activities List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Pending Activities ({filteredActivities.length})</h3>
              {filteredActivities.map((activity) => (
                <Card 
                  key={activity.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedActivity?.id === activity.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedActivity(activity)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">{activity.studentName} • {activity.studentId}</p>
                        </div>
                        <Badge 
                          variant={activity.priority === "high" ? "destructive" : activity.priority === "medium" ? "default" : "secondary"}
                        >
                          {activity.priority}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(activity.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.duration}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{activity.type}</Badge>
                        <span className="text-xs text-muted-foreground">
                          Submitted: {new Date(activity.submittedOn).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Activity Details */}
            <div>
              {selectedActivity ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Review</CardTitle>
                    <CardDescription>Review and approve the selected activity</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{selectedActivity.title}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Student:</span>
                          <p>{selectedActivity.studentName}</p>
                        </div>
                        <div>
                          <span className="font-medium">ID:</span>
                          <p>{selectedActivity.studentId}</p>
                        </div>
                        <div>
                          <span className="font-medium">Type:</span>
                          <p>{selectedActivity.type}</p>
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span>
                          <p>{selectedActivity.duration}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-medium">Organization:</span>
                      <p className="text-sm mt-1">{selectedActivity.organization}</p>
                    </div>

                    <div>
                      <span className="font-medium">Description:</span>
                      <p className="text-sm mt-1">{selectedActivity.description}</p>
                    </div>

                    <div>
                      <span className="font-medium">Supporting Documents:</span>
                      <div className="mt-2 space-y-2">
                        {selectedActivity.documents.map((doc, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-primary" />
                            <span className="text-sm">{doc}</span>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="font-medium">Review Comments:</label>
                      <Textarea 
                        placeholder="Add your review comments..."
                        className="mt-2"
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => handleApprove(selectedActivity.id)}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button 
                        variant="destructive" 
                        className="flex-1"
                        onClick={() => handleReject(selectedActivity.id)}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </div>

                    <Button variant="outline" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Request Clarification
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Select an activity to review</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="approved" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Approved Activities</CardTitle>
              <CardDescription>Recently approved student activities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                Approved activities will be displayed here with filtering and search capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Activities</CardTitle>
              <CardDescription>Activities that were rejected with reasons</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                Rejected activities with rejection reasons will be displayed here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Student Activity Report</h3>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive report of all student activities</p>
                <Button variant="outline" size="sm">Generate Report</Button>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Approval Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4">Faculty approval patterns and statistics</p>
                <Button variant="outline" size="sm">View Analytics</Button>
              </CardContent>
            </Card>
            
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Department Summary</h3>
                <p className="text-sm text-muted-foreground mb-4">Department-wise activity summary</p>
                <Button variant="outline" size="sm">Generate Summary</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FacultyPanel;
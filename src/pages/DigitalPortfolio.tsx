import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Download, 
  Share2, 
  Eye, 
  Edit,
  Award,
  BookOpen,
  Users,
  Briefcase,
  Trophy,
  Heart,
  ExternalLink,
  Calendar,
  MapPin
} from "lucide-react";

const portfolioSections = [
  { name: "Personal Information", completion: 100, items: 5 },
  { name: "Academic Records", completion: 95, items: 12 },
  { name: "Activities & Achievements", completion: 80, items: 24 },
  { name: "Skills & Certifications", completion: 75, items: 18 },
  { name: "Projects & Internships", completion: 60, items: 8 },
  { name: "Recommendations", completion: 40, items: 3 },
];

const featuredActivities = [
  {
    title: "Machine Learning Workshop",
    type: "Workshop",
    organization: "IEEE Student Branch",
    date: "March 15, 2024",
    location: "Conference Hall A",
    duration: "6 hours",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    achievement: "Certificate of Excellence",
    icon: BookOpen
  },
  {
    title: "Google Summer of Code 2024",
    type: "Internship",
    organization: "Google LLC",
    date: "May 1 - August 31, 2024",
    location: "Remote",
    duration: "3 months",
    skills: ["React", "Node.js", "Open Source"],
    achievement: "Successful Completion",
    icon: Briefcase
  },
  {
    title: "Hackathon Winner",
    type: "Competition",
    organization: "TechFest 2024",
    date: "February 20-22, 2024",
    location: "Mumbai, India",
    duration: "48 hours",
    skills: ["Full Stack Development", "Innovation", "Team Leadership"],
    achievement: "1st Place - ₹50,000 Prize",
    icon: Trophy
  }
];

const DigitalPortfolio = () => {
  const overallCompletion = Math.round(
    portfolioSections.reduce((acc, section) => acc + section.completion, 0) / portfolioSections.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Digital Portfolio</h1>
          <p className="text-muted-foreground">Your comprehensive academic and professional profile</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="w-full sm:w-auto">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Share2 className="h-4 w-4 mr-2" />
            Share Link
          </Button>
          <Button className="bg-gradient-primary w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Portfolio Completion Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Portfolio Completion
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {overallCompletion}%
            </Badge>
          </CardTitle>
          <CardDescription>Complete all sections to maximize your portfolio impact</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="mb-6">
              <Progress value={overallCompletion} className="h-3" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioSections.map((section, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">{section.name}</p>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                  <Progress value={section.completion} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{section.completion}% complete</span>
                    <span>{section.items} items</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Student Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground">JS</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">John Smith</h3>
                    <p className="text-muted-foreground">Computer Science Engineering • Final Year</p>
                    <p className="text-sm text-muted-foreground">Student ID: CS2024001</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">CGPA</p>
                      <p className="text-lg font-bold">8.7/10</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Activities</p>
                      <p className="text-lg font-bold">24</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Certifications</p>
                      <p className="text-lg font-bold">12</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Activities</CardTitle>
              <CardDescription>Highlight your most significant achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {featuredActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{activity.title}</h4>
                            <p className="text-sm text-muted-foreground">{activity.organization}</p>
                          </div>
                          <Badge variant="outline">{activity.type}</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {activity.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {activity.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            {activity.achievement}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>All Activities</CardTitle>
              <CardDescription>Complete list of your recorded activities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                This section will display all your activities in a structured format for your portfolio.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Competencies</CardTitle>
              <CardDescription>Technical and soft skills gained through your activities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                Skills analysis and competency mapping will be displayed here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Settings</CardTitle>
              <CardDescription>Customize your portfolio appearance and privacy settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                Portfolio customization options will be available here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DigitalPortfolio;
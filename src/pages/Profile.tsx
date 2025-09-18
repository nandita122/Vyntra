import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Edit,
  Save,
  Camera,
  Github,
  Linkedin,
  Globe,
  GraduationCap
} from "lucide-react";

const skills = [
  "JavaScript", "React", "Node.js", "Python", "Machine Learning",
  "Data Analysis", "Leadership", "Public Speaking", "Research",
  "Project Management", "Team Collaboration", "Problem Solving"
];

const socialLinks = [
  { platform: "GitHub", url: "github.com/johnsmith", icon: Github },
  { platform: "LinkedIn", url: "linkedin.com/in/johnsmith", icon: Linkedin },
  { platform: "Portfolio", url: "johnsmith.dev", icon: Globe }
];

const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>
        <Button className="bg-gradient-primary w-full lg:w-auto">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Picture */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="relative inline-block">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl">JS</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-muted-foreground">Computer Science Engineering</p>
                  <Badge variant="secondary" className="mt-2">Final Year Student</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Smith" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john.smith@university.edu" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 9876543210" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="2001-06-15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" defaultValue="Male" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    defaultValue="123 University Street, Tech City, State - 123456"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell us about yourself, your interests, and goals..."
                    className="min-h-[120px]"
                    defaultValue="Passionate computer science student with a strong interest in machine learning and web development. Active participant in hackathons and technical competitions."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="academic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
              <CardDescription>Your academic details and performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" defaultValue="CS2024001" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  <Input id="rollNumber" defaultValue="2024CSE001" disabled />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Input id="course" defaultValue="B.Tech Computer Science Engineering" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batch">Batch</Label>
                  <Input id="batch" defaultValue="2021-2025" disabled />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currentSemester">Current Semester</Label>
                  <Input id="currentSemester" defaultValue="8th Semester" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cgpa">CGPA</Label>
                  <Input id="cgpa" defaultValue="8.7" disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attendance">Attendance</Label>
                  <Input id="attendance" defaultValue="94.5%" disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" defaultValue="Machine Learning and Data Science" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="research">Research Interests</Label>
                <Textarea 
                  id="research" 
                  placeholder="Describe your research interests and areas of focus..."
                  className="min-h-[100px]"
                  defaultValue="Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Competencies</CardTitle>
              <CardDescription>Manage your skills and expertise areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Current Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                      <button className="ml-2 text-muted-foreground hover:text-destructive">
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newSkill">Add New Skill</Label>
                <div className="flex gap-2">
                  <Input id="newSkill" placeholder="Enter a skill..." />
                  <Button variant="outline">Add</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-medium">Skill Categories</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Technical Skills</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Programming</span>
                        <span className="text-sm font-medium">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Web Development</span>
                        <span className="text-sm font-medium">Intermediate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Machine Learning</span>
                        <span className="text-sm font-medium">Intermediate</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Soft Skills</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Leadership</span>
                        <span className="text-sm font-medium">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Communication</span>
                        <span className="text-sm font-medium">Advanced</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Team Work</span>
                        <span className="text-sm font-medium">Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>Connect your social media and professional profiles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <Label className="font-medium">{link.platform}</Label>
                      <Input 
                        defaultValue={link.url} 
                        className="mt-1"
                        placeholder={`Enter your ${link.platform} profile URL`}
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                );
              })}
              
              <Button variant="outline" className="w-full">
                <Globe className="h-4 w-4 mr-2" />
                Add Another Link
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control who can see your profile information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Profile Visibility</Label>
                    <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Public
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Activity Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share your activities with the community</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enabled
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Contact Information</Label>
                    <p className="text-sm text-muted-foreground">Allow others to contact you</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Limited
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
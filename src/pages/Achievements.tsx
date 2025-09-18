import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Award,
  Trophy,
  Medal,
  Star,
  Calendar,
  Download,
  Share2,
  Plus,
  ExternalLink,
  Crown,
  Target,
  CheckCircle2
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Hackathon Champion",
    description: "First place in National Level Hackathon 2024",
    category: "Competition",
    date: "2024-03-15",
    organization: "TechFest India",
    level: "National",
    prize: "₹50,000 Cash Prize",
    icon: Trophy,
    color: "text-yellow-600",
    verified: true
  },
  {
    id: 2,
    title: "Research Paper Published",
    description: "Published research on Machine Learning in IEEE Conference",
    category: "Research",
    date: "2024-02-20",
    organization: "IEEE",
    level: "International",
    prize: "Publication Certificate",
    icon: Award,
    color: "text-blue-600",
    verified: true
  },
  {
    id: 3,
    title: "Best Student Award",
    description: "Outstanding academic performance and leadership",
    category: "Academic",
    date: "2024-01-30",
    organization: "College",
    level: "Institution",
    prize: "Gold Medal",
    icon: Medal,
    color: "text-purple-600",
    verified: true
  },
  {
    id: 4,
    title: "Open Source Contributor",
    description: "Significant contributions to popular GitHub projects",
    category: "Technical",
    date: "2024-01-15",
    organization: "GitHub",
    level: "Global",
    prize: "Recognition Badge",
    icon: Star,
    color: "text-green-600",
    verified: false
  }
];

const progressGoals = [
  { name: "Activities Goal", current: 24, target: 30, percentage: 80 },
  { name: "Certifications", current: 12, target: 15, percentage: 80 },
  { name: "Competitions", current: 6, target: 10, percentage: 60 },
  { name: "Research Papers", current: 2, target: 3, percentage: 67 }
];

const milestones = [
  { title: "First Competition Win", completed: true, date: "2023-09-15" },
  { title: "10 Activities Completed", completed: true, date: "2023-11-20" },
  { title: "First Research Publication", completed: true, date: "2024-02-20" },
  { title: "Leadership Role", completed: false, date: "Pending" },
  { title: "Industry Internship", completed: false, date: "Pending" }
];

const Achievements = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Achievements & Awards</h1>
          <p className="text-muted-foreground">Showcase your accomplishments and track your progress</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="w-full sm:w-auto">
            <Share2 className="h-4 w-4 mr-2" />
            Share Achievements
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          <Button className="bg-gradient-primary w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Achievement
          </Button>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-yellow-800">Total Awards</p>
                <p className="text-2xl font-bold text-yellow-900">8</p>
              </div>
              <Crown className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">Competitions Won</p>
                <p className="text-2xl font-bold text-blue-900">6</p>
              </div>
              <Trophy className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">Publications</p>
                <p className="text-2xl font-bold text-green-900">3</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-800">Recognition</p>
                <p className="text-2xl font-bold text-purple-900">12</p>
              </div>
              <Medal className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="achievements" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gray-100 ${achievement.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                        </div>
                      </div>
                      {achievement.verified && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{achievement.category}</Badge>
                        <Badge variant="secondary">{achievement.level}</Badge>
                        {achievement.prize && (
                          <Badge variant="default">{achievement.prize}</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(achievement.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Annual Goals Progress</CardTitle>
              <CardDescription>Track your progress towards your annual achievement goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {progressGoals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{goal.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {goal.current} / {goal.target}
                    </span>
                  </div>
                  <Progress value={goal.percentage} className="h-3" />
                  <div className="text-right">
                    <span className="text-sm font-medium text-primary">{goal.percentage}% Complete</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Competition Success Rate</span>
                    <span className="font-bold">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Publication Rate</span>
                    <span className="font-bold">2 per year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recognition Score</span>
                    <span className="font-bold">92/100</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievement Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Academic</span>
                    <Badge>4 awards</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical</span>
                    <Badge>3 awards</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Leadership</span>
                    <Badge>2 awards</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Research</span>
                    <Badge>3 awards</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Achievement Milestones</CardTitle>
              <CardDescription>Key milestones in your academic journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${
                      milestone.completed ? "bg-green-500" : "bg-gray-300"
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    </div>
                    {milestone.completed && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Achievements;

import { PageLayout } from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, FileText, Video } from "lucide-react";
import { Link } from "react-router-dom";

const DocumentationPage = () => {
  return (
    <PageLayout
      title="Documentation"
      description="Comprehensive guides and resources for understanding Bhagavad Gita teachings."
    >
      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="guides" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Guides</span>
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>API Reference</span>
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Resources</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            <span>Video Tutorials</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="guides" className="space-y-8">
          <div>
            <h2 className="text-2xl font-heading font-bold mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-6">
              New to Bhagavad Gita teachings? These guides will help you understand the fundamental concepts and how to apply them in your life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Introduction to Bhagavad Gita</CardTitle>
                  <CardDescription>Learn about the historical context and significance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    An approachable introduction to the history, context, and central themes of the Bhagavad Gita.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/documentation/intro-to-gita">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Core Principles Explained</CardTitle>
                  <CardDescription>Understanding dharma, karma, and yoga</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A detailed explanation of the core philosophical principles that form the foundation of Gita teachings.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/documentation/core-principles">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h2 className="text-2xl font-heading font-bold mb-4">Application Guides</h2>
            <p className="text-muted-foreground mb-6">
              Detailed guides on how to apply Bhagavad Gita wisdom to specific areas of your life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dealing with Stress</CardTitle>
                  <CardDescription>Ancient wisdom for modern anxiety</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/documentation/stress-management">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Finding Purpose</CardTitle>
                  <CardDescription>Discovering your dharma</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/documentation/finding-purpose">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spiritual Growth</CardTitle>
                  <CardDescription>Steps toward enlightenment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/documentation/spiritual-growth">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Integrate Bhagawad Wisdom into your applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our API allows developers to access Bhagavad Gita verses, interpretations, and wisdom in their own applications. Below are the available endpoints and documentation.
              </p>
              
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <h3 className="font-medium">GET /api/verses</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Retrieve verses from the Bhagavad Gita with optional filters.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Documentation
                  </Button>
                </div>
                
                <div className="rounded-md border p-4">
                  <h3 className="font-medium">GET /api/wisdom</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Get personalized wisdom based on life situations or questions.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Documentation
                  </Button>
                </div>
                
                <div className="rounded-md border p-4">
                  <h3 className="font-medium">GET /api/mantras</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Access mantras and affirmations for different moods and goals.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Downloadable Resources</CardTitle>
                <CardDescription>Guides, worksheets, and reference materials</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <Link to="#" className="text-primary hover:underline">Bhagavad Gita Study Guide (PDF)</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <Link to="#" className="text-primary hover:underline">Personal Reflection Worksheet (PDF)</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <Link to="#" className="text-primary hover:underline">Meditation Techniques Guide (PDF)</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <Link to="#" className="text-primary hover:underline">Key Sanskrit Terms Glossary (PDF)</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recommended Books</CardTitle>
                <CardDescription>Further reading for deeper understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">Bhagavad Gita As It Is</h4>
                    <p className="text-sm text-muted-foreground">by A.C. Bhaktivedanta Swami Prabhupada</p>
                  </li>
                  <li>
                    <h4 className="font-medium">The Essence of the Bhagavad Gita</h4>
                    <p className="text-sm text-muted-foreground">by Paramhansa Yogananda</p>
                  </li>
                  <li>
                    <h4 className="font-medium">God Talks with Arjuna</h4>
                    <p className="text-sm text-muted-foreground">by Sri Paramahansa Yogananda</p>
                  </li>
                  <li>
                    <h4 className="font-medium">The Bhagavad Gita for Daily Living</h4>
                    <p className="text-sm text-muted-foreground">by Eknath Easwaran</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
              <Video className="h-12 w-12 text-muted-foreground" />
              <span className="sr-only">Video placeholder</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Introduction to Bhagavad Gita Wisdom</h3>
              <p className="text-muted-foreground mb-4">
                This tutorial provides a comprehensive introduction to the core teachings of the Bhagavad Gita and how they can be applied to modern life challenges.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium">In this video:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Historical context of the Bhagavad Gita</li>
                  <li>Overview of the dialog between Krishna and Arjuna</li>
                  <li>Introduction to key concepts like dharma and karma</li>
                  <li>How to apply these teachings to everyday situations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="aspect-video bg-secondary rounded-t-lg flex items-center justify-center">
                <Video className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle>Meditation Techniques</CardTitle>
                <CardDescription>Guided practices based on Gita teachings</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <div className="aspect-video bg-secondary rounded-t-lg flex items-center justify-center">
                <Video className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle>Understanding Karma</CardTitle>
                <CardDescription>The law of cause and effect explained</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <div className="aspect-video bg-secondary rounded-t-lg flex items-center justify-center">
                <Video className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle>Path of Devotion</CardTitle>
                <CardDescription>Exploring Bhakti Yoga principles</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default DocumentationPage;

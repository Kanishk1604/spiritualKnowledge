
import { PageLayout } from "@/components/layout/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { HelpCircle, MessageSquare, Search, Phone, Mail, FileText } from "lucide-react";

const SupportPage = () => {
  // Common support questions with quick answers
  const quickHelp = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Login' button, then select 'Forgot Password'. Enter your email address, and we'll send you instructions to reset your password securely."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time by going to your Profile page, selecting 'Subscription', and clicking on 'Cancel Subscription'. Your subscription will remain active until the end of your current billing period."
    },
    {
      question: "Why am I not receiving my verification email?",
      answer: "Check your spam or junk folder first. If you still don't see it, try requesting another verification email. If the issue persists, contact our support team with your account email address."
    },
    {
      question: "How do I update my payment method?",
      answer: "Go to your Profile, click on 'Subscription', then 'Payment Methods', and select 'Update Payment Method'. You can add a new card or select an existing one for future payments."
    }
  ];

  return (
    <PageLayout
      title="Support Center"
      description="Get help with any issues or questions about Bhagavad Wisdom."
    >
      <Tabs defaultValue="help" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="help" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>Quick Help</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Contact Us</span>
          </TabsTrigger>
          <TabsTrigger value="search" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            <span>Knowledge Base</span>
          </TabsTrigger>
          <TabsTrigger value="docs" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Documentation</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="help">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Support Questions</CardTitle>
                <CardDescription>
                  Quick answers to common support requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {quickHelp.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/faq">View All FAQs</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Issues</CardTitle>
                  <CardDescription>Help with login, profile, and settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="#" className="text-primary hover:underline">Login Problems</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Account Verification</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Profile Settings</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Privacy Settings</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Payments</CardTitle>
                  <CardDescription>Help with subscriptions and payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="#" className="text-primary hover:underline">Subscription Management</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Payment Methods</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Invoices & Receipts</Link>
                    </li>
                    <li>
                      <Link to="/refund" className="text-primary hover:underline">Refund Policy</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Using Features</CardTitle>
                  <CardDescription>Help with app functionality</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="#" className="text-primary hover:underline">Problem Solver Guide</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Dream Interpreter Tips</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Mantras & Affirmations</Link>
                    </li>
                    <li>
                      <Link to="#" className="text-primary hover:underline">Daily Verse Features</Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  We typically respond within 24 hours on business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your issue in detail..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Submit Request</Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Alternative ways to reach our support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Email Support</h4>
                      <p className="text-sm text-muted-foreground">support@Bhagavadwisdom.com</p>
                      <p className="text-xs text-muted-foreground mt-1">For general inquiries and support</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Phone Support</h4>
                      <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                      <p className="text-xs text-muted-foreground mt-1">Monday to Friday, 9AM to 6PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Support Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Premium users enjoy priority support with faster response times.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="search">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Our Knowledge Base</CardTitle>
              <CardDescription>
                Find answers to your questions in our extensive knowledge base.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for answers..." 
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Guides for new users</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="text-primary hover:underline">Creating Your Account</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Navigating the Dashboard</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Using the Problem Solver</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Interpreting Your Dreams</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>Fix common issues</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="text-primary hover:underline">App Not Loading</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Login Issues</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Payment Problems</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Missing Features</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Premium Features</CardTitle>
                <CardDescription>Make the most of your subscription</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="text-primary hover:underline">Advanced Problem Solving</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Detailed Dream Analysis</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Custom Mantras</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-primary hover:underline">Personalized Insights</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="docs">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Comprehensive guides and resources to help you make the most of Bhagavad Wisdom.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our documentation provides detailed information about all the features and functionality of Bhagavad Wisdom, along with guides on how to use them effectively.
              </p>
              <Button asChild>
                <Link to="/documentation">Browse Documentation</Link>
              </Button>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>User Guides</CardTitle>
                <CardDescription>Step-by-step instructions for all features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <Link to="#" className="hover:underline">Complete User Guide (PDF)</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <Link to="#" className="hover:underline">Problem Solver Guide (PDF)</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <Link to="#" className="hover:underline">Dream Interpreter Guide (PDF)</Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Visual guides for key features</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/documentation?tab=videos">View Video Tutorials</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default SupportPage;

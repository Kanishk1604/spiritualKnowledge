import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProblemSolver } from "@/components/features/ProblemSolver";
import { DreamInterpreter } from "@/components/features/DreamInterpreter";
import { MoodMantra } from "@/components/features/MoodMantra";
import { DailyVerse } from "@/components/features/DailyVerse";
import { BookOpen, Moon, Sun, Heart, Globe, User, LogIn, Crown, Menu, X, MessageSquare, RefreshCw, Plus, KeyRound, Mail } from "lucide-react";
import { Language } from "@/types";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/auth";
import { AuthModal } from "@/components/auth/AuthModal";
import { useTheme } from "@/components/ui/ThemeProvider";
import { LanguagePicker } from "@/components/features/LanguagePicker";
import { Footer } from "@/components/layout/Footer";

const affirmationsData = {
  english: [
    "I am at peace with my past and present, as taught in the Bhagavad Gita.",
    "My true self is eternal and unchanging, regardless of life's circumstances.",
    "I perform my duties with dedication, without attachment to results.",
    "I accept what I cannot change with equanimity."
  ],
  hindi: [
    "मैं अपने अतीत और वर्तमान से शांति से जुड़ा हूँ, जैसा भगवद गीता में सिखाया गया है।",
    "मेरा वास्तविक स्वयं शाश्वत और अपरिवर्तनीय है, जीवन की परिस्थितियों से निरपेक्ष।",
    "मैं अपने कर्तव्यों को समर्पण के साथ निभाता हूँ, परिणामों से अनासक्त रहकर।",
    "मैं जो नहीं बदल सकता उसे समभाव से स्वीकार करता हूँ।"
  ]
};

const Index = () => {
  const [language, setLanguage] = useState<Language>("english");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user, isPremium, status } = useAuth();

  const [randomAffirmationIndex, setRandomAffirmationIndex] = useState(0);

  const mainLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/support", label: "Support" },
  ];

  const footerLinks = [
    { path: "/contact", label: "Contact" },
    { path: "/terms", label: "Terms" },
    { path: "/privacy", label: "Privacy" },
    { path: "/refund", label: "Refund Policy" },
    { path: "/documentation", label: "Documentation" },
  ];

  const devotees = [
    { id: 1, name: "Manish", role: "Spiritual Seeker" },
    { id: 2, name: "Rita", role: "Spiritual Seeker" },
    { id: 3, name: "Ankur", role: "Spiritual Seeker" },
  ];

  const getRandomAffirmation = () => {
    const affirmations = affirmationsData[language] || affirmationsData.english;
    setRandomAffirmationIndex(Math.floor(Math.random() * affirmations.length));
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    // Here you could save to localStorage or context for persistence
  };

  return (
    <div className="min-h-screen bg-background w-full">
      <nav className="w-full py-4 px-4 md:px-6 flex justify-between items-center border-b border-border">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-heading font-bold text-gradient mr-8">Bhagawad Wisdom</Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {mainLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguagePicker 
              value={language} 
              onValueChange={handleLanguageChange}
              variant="dark"
            />
          </div>
          
          {status === 'authenticated' ? (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/auth" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link to="/auth?tab=signup" className="flex items-center gap-2">
                  <KeyRound className="h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="flex items-center justify-center"
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-background p-4 border-b border-border">
          <div className="flex flex-col space-y-2">
            {mainLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {status === 'authenticated' ? (
              <Link 
                to="/profile" 
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
            ) : (
              <>
                <Link 
                  to="/auth" 
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
                <Link 
                  to="/auth?tab=signup" 
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <KeyRound className="h-4 w-4" />
                  Sign Up
                </Link>
                <Link 
                  to="/auth?showForgotPassword=true" 
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  Forgot Password
                </Link>
              </>
            )}
            
            <div className="pt-2 border-t border-border mt-2">
              {footerLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-border mt-2">
              <span className="text-sm font-medium">Language</span>
              <LanguagePicker 
                value={language} 
                onValueChange={handleLanguageChange}
              />
            </div>
          </div>
        </div>
      )}

      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
                Bhagawad Wisdom
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ancient wisdom from Bhagavad Gita for modern life problems. Discover spiritual guidance, dream interpretations, and daily mantras.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="button-gradient" onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}>Get Started</Button>
              
              {status !== 'authenticated' && (
                <Button variant="outline" asChild>
                  <Link to="/auth">Sign In / Sign Up</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl">
              Spiritual Guidance
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Explore various features that provide spiritual insights based on Bhagavad Gita teachings.
            </p>
          </div>
          
          <Tabs defaultValue="daily-verse" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-6 w-full mb-6">
              <TabsTrigger value="daily-verse" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Daily Verse</span>
              </TabsTrigger>
              <TabsTrigger value="problem-solver" className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                <span className="hidden sm:inline">Problem Solver</span>
              </TabsTrigger>
              <TabsTrigger value="dream" className="flex items-center gap-2">
                <Moon className="h-4 w-4" />
                <span className="hidden sm:inline">Dream Interpretation</span>
              </TabsTrigger>
              <TabsTrigger value="chat-agent" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Chat Agent</span>
              </TabsTrigger>
              <TabsTrigger value="mantra" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Mood Mantra</span>
              </TabsTrigger>
              <TabsTrigger value="affirmations" className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                <span className="hidden sm:inline">Affirmations</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6 rounded-md border">
              <TabsContent value="daily-verse" className="mt-0">
                <Card className="border-0 shadow-none">
                  <CardHeader>
                    <CardTitle>Daily Verse</CardTitle>
                    <CardDescription>Wisdom from Bhagavad Gita for your daily inspiration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DailyVerse language={language} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="problem-solver" className="mt-0">
                <Card className="border-0 shadow-none">
                  <CardHeader>
                    <CardTitle>Problem Solver</CardTitle>
                    <CardDescription>Find solutions to your problems based on Bhagavad Gita teachings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProblemSolver language={language} isPremium={isPremium} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="dream" className="mt-0">
                <Card className="border-0 shadow-none">
                  <CardHeader>
                    <CardTitle>Dream Interpreter</CardTitle>
                    <CardDescription>Understand the spiritual meaning behind your dreams</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DreamInterpreter language={language} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="chat-agent" className="mt-0">
                <Card className="border-0 shadow-none">
                  <CardHeader>
                    <CardTitle>Chat Agent</CardTitle>
                    <CardDescription>Have a conversation with an AI guide inspired by the Bhagavad Gita</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-4">
                      <div className="p-4 bg-secondary/20 rounded-lg">
                        <p className="text-center">Ask questions about life, spirituality, or seek guidance based on Bhagavad Gita's teachings.</p>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="/chat-agent">
                          Start Conversation
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mantra" className="mt-0">
                <Card className="border-0 shadow-none">
                  <CardHeader>
                    <CardTitle>Mood Mantra</CardTitle>
                    <CardDescription>Receive a personalized mantra based on your current mood</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MoodMantra language={language} />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="affirmations" className="mt-0">
                <Card className="border-0 shadow-none">
                  <CardHeader>
                    <CardTitle>Affirmations</CardTitle>
                    <CardDescription>Daily affirmations inspired by the Bhagavad Gita</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-4">
                      <div className="p-4 bg-secondary/20 rounded-lg">
                        <p className="text-center">{(affirmationsData[language] || affirmationsData.english)[randomAffirmationIndex]}</p>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="/affirmations">
                          View All Affirmations
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl">
              Spiritual Journeys
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Read how Bhagawad Wisdom has transformed lives through ancient teachings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devotees.map((devotee) => (
              <Card key={devotee.id} className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">{devotee.name.charAt(0)}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{devotee.name}</CardTitle>
                      <CardDescription>{devotee.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "The Bhagawad Wisdom app has been a guiding light in my spiritual journey. The daily verses and problem-solving features have helped me navigate life's challenges with peace and clarity."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {status !== 'authenticated' && (
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-2xl font-heading font-bold tracking-tighter sm:text-3xl">
                Join Our Spiritual Community
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Create an account to save your insights, track your spiritual progress, and receive personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button asChild className="button-gradient">
                  <Link to="/auth?tab=signup">
                    Create Account
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/auth">
                    Already have an account? Sign In
                  </Link>
                </Button>
              </div>
              <div className="mt-2">
                <Button asChild variant="link" className="text-sm">
                  <Link to="/auth?showForgotPassword=true">
                    Forgot Password?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;

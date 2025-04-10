
import { PageLayout } from "@/components/layout/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQPage = () => {
  // FAQ data organized by categories
  const faqCategories = {
    general: [
      {
        question: "What is bhagawad Wisdom?",
        answer: "bhagawad Wisdom is a platform that provides spiritual guidance based on the teachings of Bhagavad Gita. We offer features like problem solving advice, dream interpretation, daily mantras, and personalized affirmations based on ancient wisdom adapted for modern life challenges."
      },
      {
        question: "Is this app based on Hindu religious teachings?",
        answer: "While the Bhagavad Gita is part of Hindu scripture, our app presents its wisdom as universal philosophical principles that can benefit people of all backgrounds and beliefs. The teachings focus on values like self-knowledge, ethical living, and inner peace that transcend religious boundaries."
      },
      {
        question: "Do I need prior knowledge of Bhagavad Gita to use this app?",
        answer: "Not at all! Our app is designed for both beginners and those familiar with the teachings. We present the wisdom in an accessible, practical way that doesn't require prior study of the text. For those who wish to learn more, we provide resources for deeper understanding."
      },
      {
        question: "How can I get the most benefit from bhagawad Wisdom?",
        answer: "For the best experience, we recommend using the app regularly. Start with the daily verses for daily inspiration, use the problem solver when facing specific challenges, try the mood-based mantras to align your emotional state, and explore the dream interpreter to gain insights from your subconscious mind."
      }
    ],
    account: [
      {
        question: "Do I need to create an account to use the app?",
        answer: "Basic features like daily verses and limited problem solving are available without an account. However, creating a free account allows you to save your favorites, track your spiritual journey, and access additional features."
      },
      {
        question: "How do I reset my password?",
        answer: "If you've forgotten your password, click on the 'Login' button, then select 'Forgot Password'. Enter your email address, and we'll send you instructions to reset your password securely."
      },
      {
        question: "Can I use the app on multiple devices?",
        answer: "Yes, you can access your bhagawad Wisdom account from any device with a web browser. Your favorites and settings will sync across all your devices automatically."
      }
    ],
    premium: [
      {
        question: "What additional features do I get with Premium?",
        answer: "Premium members enjoy unlimited problem solving consultations with detailed wisdom responses, advanced dream interpretation, personalized daily mantras tailored to your spiritual goals, ad-free experience, exclusive content, and priority customer support."
      },
      {
        question: "How much does Premium membership cost?",
        answer: "Premium membership is available for $9.99 per month or $99.99 per year (saving you 16%). We also occasionally offer special promotions and discounts."
      },
      {
        question: "Can I cancel my Premium subscription anytime?",
        answer: "Yes, you can cancel your Premium subscription at any time from your account settings. Your Premium benefits will continue until the end of your current billing period, and you won't be charged thereafter."
      },
      {
        question: "Is there a free trial for Premium?",
        answer: "Yes, new users can try Premium features free for 7 days. You can cancel anytime during the trial period without being charged."
      }
    ],
    features: [
      {
        question: "How does the Problem Solver feature work?",
        answer: "The Problem Solver analyzes your situation through the lens of Bhagavad Gita wisdom. Simply describe your challenge, and the app will provide guidance based on relevant teachings and principles. Premium users receive more detailed responses with specific verses and comprehensive advice."
      },
      {
        question: "Are the dream interpretations psychologically accurate?",
        answer: "Our dream interpretations combine traditional symbolic understanding from Eastern wisdom traditions with modern psychological insights. While they offer valuable perspective, they should be viewed as guidance rather than definitive analysis. The interpretations aim to prompt personal reflection and insight."
      },
      {
        question: "Can I suggest new features for the app?",
        answer: "Absolutely! We welcome user feedback and suggestions. Please visit our Contact page to share your ideas for improving bhagawad Wisdom or adding new features that would enhance your spiritual journey."
      }
    ]
  };

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about bhagawad Wisdom and its features."
    >
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="premium">Premium</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Accordion type="single" collapsible className="w-full">
            {faqCategories.general.map((faq, index) => (
              <AccordionItem key={index} value={`general-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        
        <TabsContent value="account">
          <Accordion type="single" collapsible className="w-full">
            {faqCategories.account.map((faq, index) => (
              <AccordionItem key={index} value={`account-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        
        <TabsContent value="premium">
          <Accordion type="single" collapsible className="w-full">
            {faqCategories.premium.map((faq, index) => (
              <AccordionItem key={index} value={`premium-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        
        <TabsContent value="features">
          <Accordion type="single" collapsible className="w-full">
            {faqCategories.features.map((faq, index) => (
              <AccordionItem key={index} value={`features-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12">
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle>Still have questions?</CardTitle>
            <CardDescription>
              Can't find the answer you're looking for? Please reach out to our customer support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default FAQPage;

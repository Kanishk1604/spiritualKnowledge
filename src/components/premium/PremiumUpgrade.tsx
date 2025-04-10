import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Lock } from "lucide-react";
import { useAuth } from "@/contexts/auth";
import { AuthModal } from "@/components/auth/AuthModal";
import { Link } from "react-router-dom";

export function PremiumUpgrade() {
  const { user, status, isPremium, upgradeToPremium } = useAuth();
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [isUpgrading, setIsUpgrading] = React.useState(false);

  const handleUpgradeClick = async () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }

    setIsUpgrading(true);
    await upgradeToPremium();
    setIsUpgrading(false);
  };

  if (isPremium) {
    return (
      <Card className="glass-card border-gold bg-gold/10 overflow-hidden">
        <div className="absolute top-0 right-0 bg-gold text-white px-3 py-1 rounded-bl">
          <Crown className="h-4 w-4 inline-block mr-1" />
          <span className="text-xs font-medium">Premium</span>
        </div>
        <CardHeader>
          <CardTitle className="text-gradient">You're Premium!</CardTitle>
          <CardDescription>
            Thank you for supporting Bhagawad Wisdom. Enjoy all premium benefits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {premiumFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 bg-green-100 text-green-600 rounded-full p-0.5 dark:bg-green-700 dark:text-green-100">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="glass-card border-gold/30 overflow-hidden relative">
        <div className="absolute -top-10 -right-10 bg-gold/20 w-20 h-20 rounded-full blur-xl z-0" />
        <CardHeader>
          <CardTitle className="text-gradient flex items-center gap-2">
            <Crown className="h-5 w-5" /> 
            Upgrade to Premium
          </CardTitle>
          <CardDescription>
            Unlock the full potential of ancient wisdom with premium features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {premiumFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 bg-gold/10 text-gold rounded-full p-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button 
            onClick={handleUpgradeClick} 
            className="w-full button-gradient"
            disabled={isUpgrading}
          >
            {isUpgrading ? "Processing..." : "Upgrade Now"}
          </Button>
          <Link to="/pricing" className="text-xs text-center w-full text-muted-foreground hover:text-foreground">
            View pricing plans
          </Link>
        </CardFooter>
      </Card>
      
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
}

const premiumFeatures = [
  "Detailed responses with specific verse references",
  "Personalized mantras for your specific situation",
  "Access to all available languages",
  "Voice input and output in all languages",
  "Ad-free experience with priority access",
  "Save and download your personal wisdom history"
];

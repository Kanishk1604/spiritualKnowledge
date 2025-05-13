
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

const AboutPage = () => {
  return (
    <PageLayout
      title="About Bhagavad Wisdom"
      description="Learn more about our mission to bring ancient wisdom to modern seekers."
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          Bhagavad Wisdom was founded with a simple yet profound mission: to make the timeless teachings of Bhagavad Gita accessible and applicable to modern life.
        </p>

        <h2>Our Mission</h2>
        <p>
          In today's fast-paced world filled with distractions and material pursuits, the ancient wisdom of the Bhagavad Gita offers a compass for navigating life's challenges with clarity, purpose, and inner peace. Our mission is to bridge the gap between these ancient teachings and contemporary life problems.
        </p>

        <h2>Our Story</h2>
        <p>
          Bhagavad Wisdom began as a personal journey of its founders, who found profound transformation through the teachings of the Bhagavad Gita during their own life challenges. Recognizing the universal applicability of these teachings, they created this platform to share this wisdom with others seeking guidance.
        </p>

        <h2>Our Approach</h2>
        <p>
          We believe in making spiritual wisdom practical and accessible. Our approach combines:
        </p>
        <ul>
          <li><strong>Authenticity</strong> - Staying true to the original teachings while making them relatable</li>
          <li><strong>Accessibility</strong> - Presenting complex concepts in simple, understandable language</li>
          <li><strong>Applicability</strong> - Focusing on practical implementation in daily life</li>
          <li><strong>Inclusivity</strong> - Welcoming seekers from all backgrounds and beliefs</li>
        </ul>

        <h2>Our Team</h2>
        <p>
          Our team consists of dedicated individuals with deep knowledge of Vedic scriptures and a passion for spiritual growth. Each member brings their unique perspective and expertise, united by a common commitment to sharing this timeless wisdom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">A</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Acharya Prashant</h3>
            <p className="text-muted-foreground">Spiritual Guide</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">S</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Swami Vivekananda</h3>
            <p className="text-muted-foreground">Wisdom Curator</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-4">
              <span className="text-primary text-2xl font-bold">R</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Radha Krishnan</h3>
            <p className="text-muted-foreground">Content Director</p>
          </div>
        </div>

        <h2>Our Vision</h2>
        <p>
          We envision a world where individuals facing modern challenges can easily access and apply the profound wisdom of the Bhagavad Gita to find clarity, purpose, and inner peace in their lives. We strive to be the bridge that connects ancient wisdom to contemporary needs.
        </p>

        <div className="bg-secondary/30 p-6 rounded-lg my-8">
          <h2 className="mt-0">Resources & Documentation</h2>
          <p>
            Explore our comprehensive resources to deepen your understanding of Bhagavad Gita wisdom:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
            <Link to="/documentation/intro-to-gita" className="flex items-center gap-2 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors">
              <BookOpen className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">Introduction to Bhagavad Gita</h3>
                <p className="text-sm text-muted-foreground">Learn about the historical context and significance</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link to="/documentation/core-principles" className="flex items-center gap-2 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors">
              <FileText className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">Core Principles Explained</h3>
                <p className="text-sm text-muted-foreground">Understanding dharma, karma, and yoga</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>

        <h2>Join Our Journey</h2>
        <p>
          Whether you're new to spiritual teachings or have been studying them for years, we invite you to join us on this journey of discovery and transformation. Together, we can explore the depths of this ancient wisdom and apply its timeless insights to create more meaningful, purpose-driven lives.
        </p>
        
        <div className="flex justify-center mt-8 not-prose">
          <Button asChild size="lg">
            <Link to="/documentation">
              Explore Our Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;

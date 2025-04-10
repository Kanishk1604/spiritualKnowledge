
import { PageLayout } from "@/components/layout/PageLayout";

const PrivacyPage = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information."
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          This Privacy Policy explains how bhagawad Wisdom ("we", "our", or "us") collects, uses, and protects your personal information when you use our website and services.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information</h3>
        <p>We may collect the following personal information when you create an account or use our services:</p>
        <ul>
          <li>Name and email address</li>
          <li>Account login credentials</li>
          <li>Profile information (optional)</li>
          <li>Payment information (for Premium subscriptions)</li>
        </ul>

        <h3>1.2 Usage Information</h3>
        <p>We automatically collect certain information about your interaction with our services, including:</p>
        <ul>
          <li>Device information (browser type, operating system, device type)</li>
          <li>IP address and location information</li>
          <li>Pages visited and features used</li>
          <li>Time spent on the platform</li>
          <li>Referral source</li>
        </ul>

        <h3>1.3 Content Data</h3>
        <p>To provide personalized spiritual guidance, we may collect:</p>
        <ul>
          <li>Problems or questions you submit</li>
          <li>Dream descriptions for interpretation</li>
          <li>Mood information for mantra recommendations</li>
          <li>Goals for affirmation generation</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul>
          <li>Providing and improving our services</li>
          <li>Personalizing your experience</li>
          <li>Processing payments and managing subscriptions</li>
          <li>Communicating with you about your account and our services</li>
          <li>Sending promotional content (with your consent)</li>
          <li>Analyzing usage patterns to improve our platform</li>
          <li>Ensuring security and preventing fraud</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li>Service providers who help us operate our platform</li>
          <li>Payment processors to complete transactions</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2>5. Your Rights and Choices</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Access and receive a copy of your personal information</li>
          <li>Correct inaccurate personal information</li>
          <li>Request deletion of your personal information</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent (where processing is based on consent)</li>
        </ul>
        <p>To exercise these rights, please contact us at privacy@bhagawadwisdom.com.</p>

        <h2>6. Cookies and Similar Technologies</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver personalized content. You can control cookies through your browser settings, but disabling certain cookies may limit functionality.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We implement appropriate safeguards to protect your information when transferred internationally.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          Email: privacy@bhagawadwisdom.com<br />
          Address: 123 Spiritual Way, Wisdom Valley, Enlightenment City, 10001, India
        </p>

        <p className="text-muted-foreground mt-8">Last Updated: May 24, 2023</p>
      </div>
    </PageLayout>
  );
};

export default PrivacyPage;

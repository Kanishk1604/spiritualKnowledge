
import { PageLayout } from "@/components/layout/PageLayout";

const TermsPage = () => {
  return (
    <PageLayout
      title="Terms of Service"
      description="Please read these terms carefully before using our services."
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          These Terms of Service ("Terms") govern your access to and use of Bhagavad Wisdom website and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account, accessing, or using our Services, you confirm that you accept these Terms and agree to comply with them. If you do not agree to these Terms, you must not access or use our Services.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We may revise these Terms at any time by updating this page. By continuing to use our Services after such changes are made, you agree to the revised Terms. It is your responsibility to check this page periodically for changes.
        </p>

        <h2>3. Account Registration</h2>
        <p>
          You may need to create an account to access certain features of our Services. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
        </p>
        <p>
          You are responsible for safeguarding your account credentials and for any activities or actions under your account. We are not responsible for any unauthorized access to your account.
        </p>

        <h2>4. Subscription and Payment</h2>
        <h3>4.1 Free and Premium Services</h3>
        <p>
          We offer both free and premium subscription plans. Features available under each plan are described on our website and are subject to change.
        </p>

        <h3>4.2 Billing</h3>
        <p>
          By subscribing to our premium services, you authorize us to charge the applicable fees to your designated payment method. All payments are non-refundable except as expressly stated in our Refund Policy.
        </p>

        <h3>4.3 Subscription Term and Renewal</h3>
        <p>
          Premium subscriptions automatically renew at the end of each billing period unless canceled before the renewal date. You can cancel your subscription at any time through your account settings.
        </p>

        <h2>5. Intellectual Property Rights</h2>
        <p>
          The Services and all content, features, and functionality thereof, including but not limited to text, graphics, logos, icons, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
        </p>
        <p>
          You may not copy, modify, distribute, sell, or lease any part of our Services or included content, nor may you reverse engineer or attempt to extract the source code of our software, unless laws prohibit these restrictions or you have our written permission.
        </p>

        <h2>6. User Content</h2>
        <p>
          You retain ownership of any content you submit, post, or display on or through our Services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content for the purpose of providing and improving our Services.
        </p>
        <p>
          You represent and warrant that you own or have the necessary rights to your User Content and that it does not violate any third party's intellectual property or other rights.
        </p>

        <h2>7. Prohibited Conduct</h2>
        <p>
          You agree not to use our Services for any unlawful purpose or in any way that violates these Terms, including but not limited to:
        </p>
        <ul>
          <li>Engaging in any harmful, fraudulent, deceptive, or offensive conduct</li>
          <li>Attempting to interfere with the proper functioning of our Services</li>
          <li>Attempting to access areas of our Services that you are not authorized to access</li>
          <li>Using our Services to distribute malware or other harmful code</li>
          <li>Collecting information about other users without their consent</li>
          <li>Violating any applicable laws or regulations</li>
        </ul>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          We do not warrant that our Services will be uninterrupted, secure, or error-free, that defects will be corrected, or that our Services or the server that makes them available are free of viruses or other harmful components.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use our Services.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Bhagavad Wisdom and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
        </p>
        <ol>
          <li>Your use of our Services</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of another person or entity</li>
          <li>Your User Content</li>
        </ol>

        <h2>11. Termination</h2>
        <p>
          We may terminate or suspend your access to all or part of our Services, with or without notice, for any conduct that we, in our sole discretion, believe violates these Terms or is harmful to other users of our Services, us, or third parties, or for any other reason.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>

        <h2>13. Dispute Resolution</h2>
        <p>
          Any disputes arising out of or relating to these Terms or our Services shall be finally settled by arbitration in accordance with the rules of the Indian Arbitration Association. The arbitration shall take place in New Delhi, India, and shall be conducted in English.
        </p>

        <h2>14. Severability</h2>
        <p>
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
        </p>

        <h2>15. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@Bhagavadwisdom.com.
        </p>

        <p className="text-muted-foreground mt-8">Last Updated: June 1, 2023</p>
      </div>
    </PageLayout>
  );
};

export default TermsPage;

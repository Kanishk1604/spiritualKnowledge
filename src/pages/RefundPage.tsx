
import { PageLayout } from "@/components/layout/PageLayout";

const RefundPage = () => {
  return (
    <PageLayout
      title="Cancellation & Refund Policy"
      description="Our policies regarding subscription cancellations and refunds."
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          This policy outlines the procedures and guidelines for cancellations and refunds related to Bhagawad Wisdom premium subscriptions.
        </p>

        <h2>1. Subscription Cancellation</h2>
        <p>You can cancel your premium subscription at any time through your account settings. Here's what happens when you cancel:</p>
        <ul>
          <li>Your subscription will remain active until the end of your current billing period.</li>
          <li>You will not be charged for subsequent billing periods.</li>
          <li>You will continue to have access to premium features until the end of your paid period.</li>
          <li>No partial refunds are provided for the remaining days in your current billing period.</li>
        </ul>

        <h2>2. Refund Eligibility</h2>
        <p>We offer refunds under the following circumstances:</p>
        <h3>2.1 New Subscriptions</h3>
        <p>If you are not satisfied with your premium subscription, you may request a refund within 7 days of initial purchase. This is a one-time courtesy for new subscribers only.</p>

        <h3>2.2 Technical Issues</h3>
        <p>If you experience persistent technical issues that significantly impair your ability to use premium features, and our support team cannot resolve these issues within a reasonable time, you may be eligible for a proportional refund.</p>

        <h3>2.3 Unauthorized Charges</h3>
        <p>If you discover unauthorized charges on your account, please contact us immediately. With proper verification, we will process a refund for any unauthorized transactions.</p>

        <h2>3. Non-Refundable Situations</h2>
        <p>Refunds will not be issued for:</p>
        <ul>
          <li>Cancellations after the 7-day refund period</li>
          <li>Partial refunds for unused portions of your subscription</li>
          <li>Subscriptions that have been active for more than one billing cycle</li>
          <li>Claims of dissatisfaction with content without trying to resolve issues through customer support</li>
        </ul>

        <h2>4. Refund Process</h2>
        <p>To request a refund:</p>
        <ol>
          <li>Contact our support team at support@Bhagawadwisdom.com</li>
          <li>Include your account email and order information</li>
          <li>Explain the reason for your refund request</li>
        </ol>
        <p>We will review your request and respond within 3-5 business days. If approved, refunds will be issued to the original payment method and may take 5-10 business days to appear on your statement.</p>

        <h2>5. Subscription Auto-Renewal</h2>
        <p>All premium subscriptions are automatically renewed unless cancelled before the renewal date. You can turn off auto-renewal at any time through your account settings.</p>

        <h2>6. Price Changes</h2>
        <p>If we change subscription prices, we will notify you at least 30 days in advance. Price changes will take effect at the next billing cycle after notification.</p>

        <h2>7. Contact Information</h2>
        <p>For any questions regarding cancellations or refunds, please contact our support team at support@Bhagawadwisdom.com.</p>

        <p className="text-muted-foreground mt-8">Last updated: June 15, 2023</p>
      </div>
    </PageLayout>
  );
};

export default RefundPage;

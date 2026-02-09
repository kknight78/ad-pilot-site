import { site } from "@/content/siteData";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: `Terms of Service | ${site.name}`,
  description: `Terms of Service for ${site.name}`,
};

export default function TermsOfServicePage() {
  return (
    <>
      <header className="border-b border-black/10 py-4">
        <div className="container-xl">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/bird-light-bg.svg" alt={site.name} className="h-10 w-auto" />
            <span className="text-sm font-medium">{site.name}</span>
          </Link>
        </div>
      </header>

      <main className="py-14 sm:py-18">
        <div className="container-xl">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-black/60 mb-10">Effective Date: January 24, 2026</p>

          <div className="prose prose-sm max-w-none space-y-8">
            <section>
              <p className="text-black/80 leading-relaxed">
                Welcome to Ad Pilot. These Terms of Service (&quot;Terms&quot;) govern your access to and use of
                the Ad Pilot platform, website, and services (collectively, the &quot;Service&quot;) operated by
                Ad Pilot (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-black/80 leading-relaxed mt-3">
                By accessing or using our Service, you agree to be bound by these Terms. If you do not agree
                to these Terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">1. Description of Service</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                Ad Pilot is an AI-powered video marketing platform that helps local businesses create authentic
                social media advertising content using AI-generated avatars (&quot;spokespilots&quot;). Our Service includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>AI avatar video generation and customization</li>
                <li>Script creation and content planning tools</li>
                <li>Video distribution to social media platforms</li>
                <li>Performance analytics and reporting</li>
                <li>Account management and collaboration features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Account Registration</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                To use certain features of the Service, you must create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-3">
                You must be at least 18 years old and have the legal authority to enter into these Terms on
                behalf of yourself or the business you represent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Subscription and Payment</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                Ad Pilot offers subscription-based pricing plans. By subscribing to a paid plan, you agree to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>Pay all fees associated with your selected plan</li>
                <li>Provide valid payment information</li>
                <li>Authorize recurring charges for subscription renewals</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-3">
                Subscription fees are billed in advance on a monthly basis. All fees are non-refundable except
                as required by law or as explicitly stated in these Terms. We reserve the right to modify
                pricing with 30 days&apos; notice.
              </p>
              <p className="text-black/80 leading-relaxed mt-3">
                <strong>Third-Party Platform Costs:</strong> Ad Pilot operates on a transparency model. Fees for
                third-party advertising platforms (Meta, TikTok, YouTube, etc.) are paid directly by you to those
                platforms and are separate from your Ad Pilot subscription.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Content and Intellectual Property</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                <strong>Your Content:</strong> You retain ownership of any content you provide to the Service,
                including business information, images, logos, and source materials (&quot;Your Content&quot;). By
                uploading Your Content, you grant us a non-exclusive license to use, process, and display it
                solely for providing the Service.
              </p>
              <p className="text-black/80 leading-relaxed mb-3">
                <strong>Generated Content:</strong> Videos and other content created through the Service using
                your account (&quot;Generated Content&quot;) are owned by you for use in your business marketing. You
                are responsible for ensuring Generated Content complies with applicable laws and platform policies.
              </p>
              <p className="text-black/80 leading-relaxed">
                <strong>Our Platform:</strong> The Ad Pilot platform, including its software, design, features,
                and documentation, remains our exclusive property. These Terms do not grant you any rights to
                our intellectual property except as needed to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. AI Avatars and Likeness</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                Our Service uses AI technology to create video avatars. You agree that:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>You will only create avatars using images and voice samples for which you have proper authorization</li>
                <li>You will not create avatars impersonating real individuals without their explicit written consent</li>
                <li>You are responsible for obtaining all necessary rights and releases for any likeness used</li>
                <li>Generated avatars will be used only for legitimate business marketing purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Acceptable Use</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>Violate any applicable laws or regulations</li>
                <li>Create false, misleading, or deceptive advertising</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Generate content that is defamatory, harassing, or discriminatory</li>
                <li>Distribute malware or engage in fraudulent activities</li>
                <li>Attempt to reverse engineer or compromise the Service</li>
                <li>Resell or redistribute the Service without authorization</li>
                <li>Create content depicting illegal activities or promoting harm</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-3">
                We reserve the right to suspend or terminate accounts that violate these guidelines.
              </p>
            </section>

            <section className="bg-black/5 p-6 rounded-lg border border-black/10">
              <h2 className="text-xl font-semibold mb-3">7. SMS and Notification Consent</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                By providing your phone number and enabling SMS notifications in your account settings, you
                consent to receive text messages from Ad Pilot regarding your account activity, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80 mb-4">
                <li>Avatar preview status updates</li>
                <li>Video generation completion alerts</li>
                <li>Weekly content plan notifications</li>
                <li>Important account and service announcements</li>
              </ul>
              <p className="text-black/80 leading-relaxed mb-3">
                Message frequency varies based on your account activity, typically 2-10 messages per week.
                Message and data rates may apply.
              </p>
              <p className="text-black/80 leading-relaxed">
                To opt out, reply <strong className="font-bold">STOP</strong> to any message or update your notification preferences in your account
                settings. For help, reply <strong className="font-bold">HELP</strong> or contact support@ad-pilot.ai.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Third-Party Services</h2>
              <p className="text-black/80 leading-relaxed">
                The Service integrates with third-party platforms and services, including but not limited to
                social media networks, AI providers, and payment processors. Your use of these third-party
                services is subject to their respective terms and policies. We are not responsible for the
                availability, accuracy, or practices of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Privacy</h2>
              <p className="text-black/80 leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <Link href="/privacy-policy" className="text-[var(--brand-blue)] hover:underline">
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your information. By using the Service, you
                consent to our data practices as described in the Privacy Policy.
              </p>
            </section>

            <section className="bg-black/5 p-6 rounded-lg border border-black/10">
              <h2 className="text-xl font-semibold mb-3">10. Disclaimer of Warranties</h2>
              <p className="text-black/80 leading-relaxed mb-3 uppercase text-sm">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
                ERROR-FREE, OR SECURE. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-black/80 leading-relaxed">
                We do not guarantee specific results from using the Service, including advertising performance,
                lead generation, or return on investment.
              </p>
            </section>

            <section className="bg-black/5 p-6 rounded-lg border border-black/10">
              <h2 className="text-xl font-semibold mb-3">11. Limitation of Liability</h2>
              <p className="text-black/80 leading-relaxed mb-3 uppercase text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AD PILOT AND ITS OFFICERS, DIRECTORS, EMPLOYEES,
                AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM
                YOUR USE OF THE SERVICE.
              </p>
              <p className="text-black/80 leading-relaxed uppercase text-sm">
                OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR THE SERVICE SHALL NOT EXCEED
                THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">12. Indemnification</h2>
              <p className="text-black/80 leading-relaxed">
                You agree to indemnify and hold harmless Ad Pilot and its affiliates from any claims, damages,
                losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of the
                Service, your violation of these Terms, or your violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">13. Termination</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                You may cancel your subscription at any time through your account settings. We may suspend or
                terminate your access to the Service at any time for violation of these Terms or for any other
                reason with reasonable notice.
              </p>
              <p className="text-black/80 leading-relaxed">
                Upon termination, your right to use the Service ceases immediately. We may retain your data
                for a reasonable period to comply with legal obligations or resolve disputes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">14. Changes to Terms</h2>
              <p className="text-black/80 leading-relaxed">
                We may update these Terms from time to time. We will notify you of material changes by posting
                the updated Terms on our website and updating the &quot;Effective Date.&quot; Your continued use of
                the Service after changes become effective constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">15. Governing Law</h2>
              <p className="text-black/80 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of
                Illinois, without regard to its conflict of law principles. Any disputes arising from these
                Terms or the Service shall be resolved in the state or federal courts located in McLean County,
                Illinois.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">16. General Provisions</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute
                the entire agreement between you and Ad Pilot regarding the Service.
              </p>
              <p className="text-black/80 leading-relaxed mb-3">
                <strong>Severability:</strong> If any provision of these Terms is found unenforceable, the
                remaining provisions shall continue in effect.
              </p>
              <p className="text-black/80 leading-relaxed mb-3">
                <strong>Waiver:</strong> Our failure to enforce any right or provision shall not constitute
                a waiver of that right or provision.
              </p>
              <p className="text-black/80 leading-relaxed">
                <strong>Assignment:</strong> You may not assign these Terms without our prior written consent.
                We may assign these Terms without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-black/80 leading-relaxed">
                If you have questions about these Terms of Service, please contact us at:{" "}
                <a href="mailto:legal@ad-pilot.ai" className="text-[var(--brand-blue)] hover:underline">
                  legal@ad-pilot.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

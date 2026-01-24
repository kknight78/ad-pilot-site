import { site } from "@/content/siteData";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: `Privacy Policy for ${site.name}`,
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-black/60 mb-10">Last updated: January 2025</p>

          <div className="prose prose-sm max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">Introduction</h2>
              <p className="text-black/80 leading-relaxed">
                {site.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p className="text-black/80 leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and business information you provide when contacting us or signing up for our services.</li>
                <li><strong>Business Information:</strong> Information about your business, including branding materials, inventory data, and marketing preferences.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website and services.</li>
                <li><strong>Communications:</strong> Records of correspondence when you contact us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
              <p className="text-black/80 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>Provide, maintain, and improve our services</li>
                <li>Create and manage your account</li>
                <li>Generate advertising content on your behalf</li>
                <li>Communicate with you about our services, updates, and support</li>
                <li>Respond to your inquiries and requests</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-black/5 p-6 rounded-lg border border-black/10">
              <h2 className="text-xl font-semibold mb-3">SMS/Text Messaging &amp; Mobile Information</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                If you opt in to receive SMS or text messages from us, we want you to know:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80 mb-4">
                <li>We will only send messages related to your account, services, or information you have requested.</li>
                <li>Message frequency may vary based on your account activity and preferences.</li>
                <li>Message and data rates may apply depending on your mobile carrier.</li>
                <li>You can opt out at any time by replying STOP to any message or contacting us directly.</li>
              </ul>
              <p className="text-black/90 font-medium">
                We do not share, sell, rent, or otherwise disclose your mobile phone number or any information
                collected through SMS/text messaging to third parties for marketing or promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Information Sharing</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li><strong>Service Providers:</strong> With third-party vendors who assist us in operating our business and providing services (e.g., hosting, analytics), under strict confidentiality agreements.</li>
                <li><strong>Platform Publishing:</strong> When you authorize us to publish content on your behalf to social media platforms or advertising networks.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or property.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice to you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Security</h2>
              <p className="text-black/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
              <p className="text-black/80 leading-relaxed mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of certain data processing activities</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-black/80 leading-relaxed mt-3">
                To exercise these rights, please contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Third-Party Links</h2>
              <p className="text-black/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
              <p className="text-black/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes
                by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-black/80 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:{" "}
                <a href="mailto:info@ad-pilot.ai" className="text-[var(--brand-blue)] hover:underline">
                  info@ad-pilot.ai
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

import { site } from "@/content/siteData";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: `SMS Notifications | ${site.name}`,
  description: "How Ad Pilot SMS notifications work, how to opt in/out, and what messages to expect.",
};

export default function SmsNotificationsPage() {
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
          <h1 className="text-3xl font-bold mb-2">Ad Pilot SMS Notifications</h1>
          <p className="text-sm text-black/60 mb-10">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-3">Program Overview</h2>
              <p className="text-black/80 leading-relaxed">
                Ad Pilot offers optional SMS notifications to help you stay informed about your account activity.
                These notifications keep you updated on important events like avatar previews, content plan deadlines,
                and weekly reports—so you never miss an approval window or important update.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">How to Opt In</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                SMS notifications are entirely optional. During onboarding, you provide your phone number on the
                Profile step. An unchecked consent checkbox appears below the phone field — you must actively check
                it to opt in. No SMS messages are sent unless you explicitly consent.
              </p>

              {/* Screenshot: Profile step with SMS consent */}
              <figure className="my-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/compliance/sms-profile-optin.png"
                  alt="Ad Pilot onboarding Profile step showing phone number field and unchecked SMS consent checkbox with disclosure text"
                  className="rounded-lg border border-black/10 shadow-sm max-w-md mx-auto w-full"
                />
                <figcaption className="text-center text-xs text-black/50 mt-2">
                  Profile step — SMS consent checkbox is unchecked by default. Users must actively opt in.
                </figcaption>
              </figure>

              <p className="text-black/80 leading-relaxed mb-3">
                Before reaching the Profile step, users must first review and accept our Terms of Service and
                Privacy Policy, which include full SMS messaging disclosures:
              </p>

              {/* Screenshot: Terms & Privacy step */}
              <figure className="my-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/compliance/sms-terms-privacy.png"
                  alt="Ad Pilot onboarding Terms and Privacy step showing SMS messaging terms, STOP and HELP disclosures, and links to full legal documents"
                  className="rounded-lg border border-black/10 shadow-sm max-w-md mx-auto w-full"
                />
                <figcaption className="text-center text-xs text-black/50 mt-2">
                  Terms &amp; Privacy step — includes SMS messaging terms with STOP/HELP disclosures and links to full documents.
                </figcaption>
              </figure>

              <p className="text-black/80 leading-relaxed">
                By checking the consent box and providing your phone number, you agree to receive text messages from Ad Pilot.
              </p>
            </section>

            <section className="bg-black/5 p-6 rounded-lg border border-black/10">
              <h2 className="text-xl font-semibold mb-3">Important Disclosures</h2>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li><strong>Message Frequency:</strong> Message frequency varies based on your account activity (typically 2-10 messages per week).</li>
                <li><strong>Message and Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier and plan.</li>
                <li><strong>Opt Out:</strong> Reply <strong>STOP</strong> to any message to unsubscribe from SMS notifications at any time.</li>
                <li><strong>Help:</strong> Reply <strong>HELP</strong> to any message for assistance, or contact us at the email below.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Types of Messages</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                You may receive SMS notifications related to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80">
                <li>Account subscription confirmations</li>
                <li>Avatar preview availability</li>
                <li>Weekly content plan readiness</li>
                <li>Weekly report availability</li>
                <li>Deadline reminders for content approval</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Example Messages</h2>
              <p className="text-black/80 leading-relaxed mb-3">
                Below are examples of the types of messages you may receive:
              </p>
              <div className="space-y-3">
                <div className="bg-black/5 p-4 rounded-lg border border-black/10">
                  <p className="text-sm text-black/80 font-mono">
                    Ad Pilot: You&apos;re subscribed to account notifications (approvals, reports, reminders). Msg freq varies. Msg&amp;data rates may apply. Reply STOP to opt out, HELP for help.
                  </p>
                </div>
                <div className="bg-black/5 p-4 rounded-lg border border-black/10">
                  <p className="text-sm text-black/80 font-mono">
                    Your avatar preview is ready! Log in to review and approve: <a href="https://app.ad-pilot.ai/login" className="text-[var(--brand-blue)] hover:underline">https://app.ad-pilot.ai/login</a> — Ad Pilot. Reply STOP to unsubscribe.
                  </p>
                </div>
                <div className="bg-black/5 p-4 rounded-lg border border-black/10">
                  <p className="text-sm text-black/80 font-mono">
                    Your weekly content plan is ready to review. Log in: <a href="https://app.ad-pilot.ai/login" className="text-[var(--brand-blue)] hover:underline">https://app.ad-pilot.ai/login</a> — Ad Pilot. Reply STOP to unsubscribe.
                  </p>
                </div>
                <div className="bg-black/5 p-4 rounded-lg border border-black/10">
                  <p className="text-sm text-black/80 font-mono">
                    Your weekly report is ready. Log in to view results: <a href="https://app.ad-pilot.ai/login" className="text-[var(--brand-blue)] hover:underline">https://app.ad-pilot.ai/login</a> — Ad Pilot. Reply STOP to unsubscribe.
                  </p>
                </div>
                <div className="bg-black/5 p-4 rounded-lg border border-black/10">
                  <p className="text-sm text-black/80 font-mono">
                    Reminder: Your weekly content plan locks tomorrow at 6pm. Log in to review and approve: <a href="https://app.ad-pilot.ai/login" className="text-[var(--brand-blue)] hover:underline">https://app.ad-pilot.ai/login</a> — Ad Pilot. Reply STOP to unsubscribe.
                  </p>
                </div>
              </div>
              <p className="text-sm text-black/60 mt-3 italic">
                Note: Links in messages direct to the Ad Pilot login page where you can access your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">How to Opt Out</h2>
              <p className="text-black/80 leading-relaxed">
                You can stop receiving SMS notifications at any time by:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80 mt-3">
                <li>Replying <strong>STOP</strong> to any SMS message from Ad Pilot</li>
                <li>Updating your notification preferences in your account settings</li>
                <li>Contacting us at the support email below</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Support</h2>
              <p className="text-black/80 leading-relaxed">
                If you have questions about SMS notifications or need assistance, please contact us at:{" "}
                <a href="mailto:support@ad-pilot.ai" className="text-[var(--brand-blue)] hover:underline">
                  support@ad-pilot.ai
                </a>
              </p>
              <p className="text-black/80 leading-relaxed mt-3">
                You can also reply <strong>HELP</strong> to any SMS message for quick assistance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Related Policies</h2>
              <p className="text-black/80 leading-relaxed">
                For more information about how we handle your data, please review our:{" "}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-black/80 mt-3">
                <li>
                  <Link href="/privacy-policy" className="text-[var(--brand-blue)] hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-[var(--brand-blue)] hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

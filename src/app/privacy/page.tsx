import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PullSheet Privacy Policy",
  description: "Privacy Policy for PullSheet mobile app.",
  alternates: { canonical: "https://intentmesh.systems/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="text-white">
      <section className="container-outer pt-28 pb-16" aria-labelledby="privacy-title">
        <div className="jelly-surface px-8 py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">PullSheet</p>
          <h1 id="privacy-title" className="mt-3 text-4xl font-headline tracking-tight md:text-5xl">
            PullSheet Privacy Policy
          </h1>
          <p className="mt-6 text-slate-200">
            This Privacy Policy explains how PullSheet (“we”, “us”, or “our”) collects, uses, and protects personal information when you use our mobile application available on Google Play.
          </p>

          <div className="mt-8 space-y-6 text-slate-100">
            <section>
              <h2 className="text-xl font-semibold">Information We Collect</h2>
              <p className="mt-3 text-sm text-slate-200">
                <strong>Account and usage data.</strong> If you sign in with a Google account, we collect your basic profile information (such as your email) to identify your account. We also collect anonymized usage metrics to understand how you interact with the app.
              </p>
              <p className="mt-3 text-sm text-slate-200">
                <strong>Audio and transcription data.</strong> When you use the speech-to-text feature, your voice input is sent to an on-device Whisper model for transcription. The raw audio is processed locally and is not stored on our servers. Transcripts may be synced to your logbook so you can revisit them later.
              </p>
              <p className="mt-3 text-sm text-slate-200">
                <strong>Logbook and offline data.</strong> PullSheet maintains a logbook of your entries and can function offline. Entries saved offline are stored on your device and are synced to our servers only when you reconnect.
              </p>
              <p className="mt-3 text-sm text-slate-200">
                <strong>Analytics data.</strong> We use Firebase Analytics to collect aggregated, anonymized statistics about app performance and usage (e.g., crash logs, feature usage). These analytics help us improve the app but do not identify individual users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">How We Use Information</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
                <li>To provide core functionality of the app, such as creating and managing logbook entries and transcribing voice notes.</li>
                <li>To maintain and improve the app, troubleshoot issues, and develop new features.</li>
                <li>To communicate with you about important updates or policy changes.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Third-Party Services</h2>
              <p className="mt-3 text-sm text-slate-200">
                We rely on trusted third-party services to operate PullSheet:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
                <li>
                  <strong>Firebase (Google LLC).</strong> Firebase Authentication securely manages user accounts. Firebase Analytics provides aggregated usage data and crash reports.
                </li>
                <li>
                  <strong>On-device Whisper model.</strong> The Whisper speech-to-text model runs locally on your device and does not transmit audio off-device.
                </li>
              </ul>
              <p className="mt-3 text-sm text-slate-200">These providers may collect data in accordance with their own privacy policies.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Data Storage and Retention</h2>
              <p className="mt-3 text-sm text-slate-200">
                Personal data is stored on secure servers located in the United States. We retain data only as long as necessary to provide the service and for legitimate business purposes. You can delete your logbook entries at any time, and you may request deletion of your account by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Security</h2>
              <p className="mt-3 text-sm text-slate-200">
                We implement administrative, technical, and physical safeguards designed to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Children’s Privacy</h2>
              <p className="mt-3 text-sm text-slate-200">
                PullSheet is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child, please contact us so we can remove it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Your Choices</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
                <li>Disable analytics tracking in the app settings.</li>
                <li>Delete your logbook entries at any time from within the app.</li>
                <li>Request deletion of your account data by contacting us at the email below.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Changes to This Policy</h2>
              <p className="mt-3 text-sm text-slate-200">
                We may update this Privacy Policy to reflect changes in our practices or applicable laws. We will notify you of any material changes via an in-app notification or by updating this page with a new effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <p className="mt-3 text-sm text-slate-200">
                If you have any questions about this Privacy Policy or how we handle your data, please email us at <a className="underline" href="mailto:support@pullsheet.app">support@pullsheet.app</a>.
              </p>
              <p className="mt-3 text-xs text-slate-400">Last updated: 28 November 2025</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}


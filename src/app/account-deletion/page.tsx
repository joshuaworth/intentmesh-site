import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PullSheet Account Deletion | IntentMesh",
  description: "How to request deletion of your PullSheet account and associated data.",
  alternates: { canonical: "https://intentmesh.systems/account-deletion" },
};

export default function AccountDeletionPage() {
  return (
    <main className="text-white">
      <section className="container-outer pt-28 pb-16" aria-labelledby="account-deletion-title">
        <div className="jelly-surface px-8 py-10">
          <p className="text-xs uppercase tracking-[0.35em] text-teal-200">PullSheet Account Deletion</p>
          <h1 id="account-deletion-title" className="mt-3 text-4xl font-headline tracking-tight md:text-5xl">
            Account Deletion Policy
          </h1>
          <p className="mt-4 text-slate-200">
            You can request deletion of your PullSheet account and all data associated with it. This page explains how the process
            works and what will be deleted.
          </p>

          <div className="mt-8 space-y-6 text-slate-100">
            <section>
              <h2 className="text-xl font-semibold">How to Request Deletion</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>Email us at <a className="underline" href="mailto:support@pullsheet.app">support@pullsheet.app</a> from the same email address used to log into the PullSheet app.</li>
                <li>Please include the subject line: “Account Deletion Request”.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">What Data Will Be Deleted</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>Your PullSheet account (email authentication record).</li>
                <li>All logbook entries associated with your account.</li>
                <li>All troubleshooting session data.</li>
                <li>App usage and analytics data stored in Firebase.</li>
                <li>Any AI request/response logs tied to your user ID.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">What Data May Be Retained (Temporary)</h2>
              <p className="mt-3 text-sm text-slate-200">
                For security and auditing requirements, some minimal server logs (e.g., IP address, request history) may be retained
                for up to 30 days before being permanently deleted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Deletion Timeline</h2>
              <p className="mt-3 text-sm text-slate-200">
                Once we receive and verify your request:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>Your data will be deleted within 30 days.</li>
                <li>You will receive a confirmation email once deletion is complete.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Questions?</h2>
              <p className="mt-3 text-sm text-slate-200">
                If you have any questions, contact us at <a className="underline" href="mailto:support@pullsheet.app">support@pullsheet.app</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}


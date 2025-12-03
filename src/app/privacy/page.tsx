export default function PrivacyPage() {
  return (
    <div className="mesh-stage min-h-screen text-white">
      <div className="container-outer py-32">
        <h1 className="text-4xl font-headline">Privacy & Data Handling</h1>
        <p className="mt-6 max-w-3xl text-slate-200">
          IntentMesh stores the minimum information required to respond to inbound requests. We do not sell or broker
          your personal data. Customer diagnostic records are encrypted at rest, synced only when crews approve it, and
          deleted upon request. Contact hq@intentmesh.systems for any privacy question.
        </p>
      </div>
    </div>
  );
}


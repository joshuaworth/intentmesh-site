import { redirect } from "next/navigation";

export const metadata = {
  title: "Labs | IntentMesh",
  description: "Labs are paused while we focus on the Pullsheet closed beta.",
  alternates: { canonical: "https://intentmesh.systems/labs" },
};

export default function LabsPage() {
  redirect("/pullsheet");
}


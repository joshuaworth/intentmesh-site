"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "field", label: "Field Tech", description: "Analog observations, symptoms, audio, video." },
  { id: "pullsheet", label: "Pullsheet", description: "Offline reasoning and guided diagnostics." },
  { id: "core", label: "IntentMesh Core", description: "Compliance, knowledge graphs, and AI safety layers." },
  { id: "loop", label: "Intelligence Loop", description: "Insights returning to crews, training, and labs." },
];

export function IntentLayerDiagram() {
  return (
    <section id="principle" className="container-outer py-16 text-white">
      <div className="jelly-surface overflow-hidden px-8 py-10">
        <p className="text-xs uppercase tracking-[0.35em] accent-label">Intent Layer</p>
        <h2 className="mt-3 text-3xl font-headline">How the mesh flows</h2>
        <p className="mt-4 max-w-3xl text-slate-200">
          Pullsheet is the connective tissue between crews, AI, and manufacturing. Every note, capture, and training
          session feeds back into IntentMesh Core so guidance compounds.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true, amount: 0.6 }}
              className="relative rounded-3xl border border-white/10 p-5 accent-card"
            >
              <div className="text-xs uppercase tracking-[0.4em] accent-label">{node.label}</div>
              <p className="mt-3 text-sm text-slate-200">{node.description}</p>
              {index < nodes.length - 1 && (
                <div
                  className="absolute inset-y-0 -right-3 hidden w-px md:block"
                  style={{ background: "linear-gradient(to bottom, transparent, hsla(var(--accent) / 0.8), transparent)" }}
                >
                  <span
                    className="absolute top-1/2 right-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 rotate-45 border-r border-t"
                    style={{ borderColor: "hsl(var(--accent))" }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


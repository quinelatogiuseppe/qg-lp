/** Aurora background: radial gold glow + slow drift + grain.
 *  Pure CSS, no canvas. */
export const AuroraBackground = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Vignette base */}
    <div className="absolute inset-0 bg-background" />

    {/* Drifting gold aurora */}
    <div className="absolute inset-0 animate-aurora-drift">
      <div
        className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at center, hsl(39 47% 56% / 0.22) 0%, hsl(39 47% 56% / 0.08) 28%, transparent 60%)",
        }}
      />
    </div>

    {/* Secondary deep glow */}
    <div
      className="absolute -bottom-1/4 left-1/2 h-[60vh] w-[80vh] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(36 45% 42% / 0.18), transparent 70%)" }}
    />

    {/* Top fade */}
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
    {/* Bottom fade for transition into next section */}
    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

    {/* Grain texture */}
    <div className="grain" />

    {/* Subtle radial vignette edges */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 50%, hsl(0 0% 0% / 0.6) 100%)",
      }}
    />
  </div>
);

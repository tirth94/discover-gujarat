/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ExperiencePopup.jsx
   Full-screen cinematic popup for Experience cards
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ExperiencePopup({ experience, onClose }) {
  const { icon, title, tagline, color, popup } = experience;
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  /* Lock body scroll & handle Escape key */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);

    /* Double-RAF ensures transition fires after mount paint */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (overlayRef.current) overlayRef.current.style.opacity = "1";
        if (panelRef.current) {
          panelRef.current.style.opacity = "1";
          panelRef.current.style.transform = "translateY(0) scale(1)";
        }
      });
    });

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Click outside to close */
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  /* Exit animation then close */
  const handleClose = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = "0";
    if (panelRef.current) {
      panelRef.current.style.opacity = "0";
      panelRef.current.style.transform = "translateY(32px) scale(0.97)";
    }
    setTimeout(onClose, 350);
  };

  if (!popup) return null;

  const content = (
    /* ── Full-screen overlay — sits ABOVE everything including navbar ── */
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,          /* above navbar z-50 = 50 */
        opacity: 0,
        transition: "opacity 0.4s ease",
        background: "rgba(6,2,4,0.88)",
        backdropFilter: "blur(24px) brightness(0.4)",
        WebkitBackdropFilter: "blur(24px) brightness(0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        /* Equal padding top/bottom — keeps popup centered on full viewport */
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
      aria-modal="true"
      role="dialog"
      aria-label={`${title} details`}
    >
      {/* ── Popup Panel ── */}
      <div
        ref={panelRef}
        style={{
          width: "100%",
          maxWidth: "760px",
          /* Use calc so panel never overflows viewport regardless of screen size */
          maxHeight: "min(82vh, 720px)",
          overflowY: "auto",
          overflowX: "hidden",
          opacity: 0,
          transform: "translateY(48px) scale(0.95)",
          transition: "all 0.5s cubic-bezier(0.34,1.2,0.64,1)",
          background: "linear-gradient(145deg, #1E0F12 0%, #2A161B 60%, #1A0C10 100%)",
          border: `1px solid ${color}35`,
          borderRadius: "1.5rem",
          boxShadow: `0 48px 140px rgba(0,0,0,0.85), 0 0 0 1px ${color}18, 0 0 100px ${color}10`,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          /* Ensure panel is never pushed behind navbar */
          position: "relative",
          margin: "auto",
        }}
        className="popup-panel"
      >

        {/* ── Hero Image ── */}
        <div style={{ position: "relative", height: "clamp(180px, 32vw, 280px)", overflow: "hidden", borderRadius: "1.5rem 1.5rem 0 0" }}>
          <img
            src={popup.hero}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 30%, #1E0F12 100%)` }} />

          {/* Gradient accent top line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "3px",
            background: `linear-gradient(90deg, #800020, ${color}, #008080)`,
          }} />

          {/* ── Close Button ── */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              background: "rgba(30,15,18,0.85)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(197,168,128,0.2)";
              e.currentTarget.style.borderColor = `${color}60`;
              e.currentTarget.style.transform = "scale(1.1) rotate(90deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(30,15,18,0.85)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Title on image */}
          <div style={{ position: "absolute", bottom: "1.5rem", left: "1.75rem", zIndex: 5 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", padding: "0.25rem 0.75rem",
              borderRadius: "9999px", marginBottom: "0.6rem",
              background: `${color}18`, color, border: `1px solid ${color}35`,
              fontFamily: "DM Mono, monospace",
            }}>
              {icon} {tagline}
            </div>
          </div>
        </div>

        {/* ── Body Content ── */}
        <div style={{ padding: "2rem 2rem 2.5rem" }}>

          {/* Title */}
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
          }}>
            {icon} {title}
          </h2>

          {/* Accent line */}
          <div style={{
            width: "3rem", height: "2px", borderRadius: "9999px", marginBottom: "1.5rem",
            background: `linear-gradient(90deg, ${color}, #800020)`,
          }} />

          {/* Overview */}
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.92rem",
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: "2rem",
          }}>
            {popup.overview}
          </p>

          {/* Highlights */}
          <h3 style={{
            fontFamily: "Playfair Display, serif",
            color: color,
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "1rem",
            letterSpacing: "0.05em",
          }}>
            ✦ Top Highlights
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.85rem", marginBottom: "2rem" }}>
            {popup.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  padding: "1rem 1.1rem",
                  borderRadius: "0.85rem",
                  background: `${color}06`,
                  border: `1px solid ${color}18`,
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${color}10`;
                  e.currentTarget.style.borderColor = `${color}35`;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${color}06`;
                  e.currentTarget.style.borderColor = `${color}18`;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  color,
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  marginBottom: "0.35rem",
                  fontFamily: "Playfair Display, serif",
                }}>
                  {h.label}
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", lineHeight: 1.6, fontWeight: 300 }}>
                  {h.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Facts & Best Time Row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>

            {/* Quick Facts */}
            <div style={{
              padding: "1.25rem",
              borderRadius: "0.85rem",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "DM Mono, monospace", marginBottom: "0.75rem" }}>
                Quick Facts
              </div>
              {popup.facts.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <span style={{ color, fontSize: "0.7rem", marginTop: "0.1rem", flexShrink: 0 }}>◆</span>
                  <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Best Time & Tip */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{
                padding: "1.1rem",
                borderRadius: "0.85rem",
                background: `${color}08`,
                border: `1px solid ${color}20`,
              }}>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "DM Mono, monospace", marginBottom: "0.4rem" }}>
                  Best Time to Visit
                </div>
                <div style={{ color, fontWeight: 600, fontSize: "0.88rem", fontFamily: "Playfair Display, serif" }}>
                  {popup.bestTime}
                </div>
              </div>

              <div style={{
                padding: "1.1rem",
                borderRadius: "0.85rem",
                background: "rgba(128,0,32,0.08)",
                border: "1px solid rgba(128,0,32,0.2)",
                flex: 1,
              }}>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "DM Mono, monospace", marginBottom: "0.4rem" }}>
                  💡 Pro Tip
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem", lineHeight: 1.6, fontWeight: 300 }}>
                  {popup.tip}
                </div>
              </div>
            </div>
          </div>

          {/* Footer close button */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.5rem" }}>
            <button
              onClick={handleClose}
              style={{
                padding: "0.7rem 1.75rem",
                borderRadius: "9999px",
                background: `linear-gradient(135deg, #800020, ${color})`,
                border: `1px solid ${color}50`,
                color: "white",
                fontWeight: 600,
                fontSize: "0.8rem",
                cursor: "pointer",
                letterSpacing: "0.05em",
                transition: "all 0.25s ease",
                boxShadow: `0 4px 20px ${color}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 32px ${color}35`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 20px ${color}20`;
              }}
            >
              Close ✕
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .popup-panel::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );

  return createPortal(content, document.body);
}

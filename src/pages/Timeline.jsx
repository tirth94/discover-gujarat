import React, { useEffect } from "react";

import { milestones } from "../data/timelineData";

export default function Timeline() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const rows = document.querySelectorAll('.timeline-row');
    rows.forEach(row => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-page">
      {/* Dynamic Advanced Styles */}
      <style>{`
        .timeline-page {
          background-color: #1E0F12;
          min-height: 100vh;
          padding: 8rem 2rem 10rem;
          position: relative;
          overflow: hidden;
          color: #E2D4C9;
        }

        /* ── Dynamic Hide Scrollbar ── */
        .timeline-page::-webkit-scrollbar { display: none !important; width: 0 !important; }
        .timeline-page { -ms-overflow-style: none; scrollbar-width: none; }

        .timeline-atmosphere {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 80vw;
          height: 80vh;
          background: radial-gradient(ellipse at center, rgba(197, 168, 128, 0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .timeline-heading {
          text-align: center;
          margin-bottom: 6rem;
          position: relative;
          z-index: 10;
        }

        .eyebrow {
          font-family: 'DM Mono', monospace;
          color: #C5A880;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .timeline-heading h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 700;
          color: #FFF;
          background: linear-gradient(135deg, #C5A880, #FFF, #C5A880);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 10px 30px rgba(197,168,128,0.2);
        }

        .timeline-stage {
          max-width: 2000px;
          margin: 0 auto;
          position: relative;
          padding-top: 1rem;
        }

        .timeline-spine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, transparent, rgba(197,168,128,0.4), transparent);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-row {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 3rem;
          z-index: 10;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s ease-out, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .timeline-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-row.is-left {
          justify-content: flex-end;
          padding-right: 50%;
        }

        .timeline-row.is-right {
          justify-content: flex-start;
          padding-left: 50%;
        }

        .spine-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: #1E0F12;
          border: 2px solid var(--accent);
          border-radius: 50%;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(197, 168, 128, 0.4);
        }

        .spine-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulseNode 2s infinite;
        }

        @keyframes pulseNode {
          0% { box-shadow: 0 0 0 0 var(--accent); }
          70% { box-shadow: 0 0 0 10px rgba(0,0,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        }

        .pipeline {
          position: absolute;
          top: 50%;
          width: 80px;
          height: 60px;
          border: 2px solid rgba(197, 168, 128, 0.4);
          z-index: 5;
          transform: translateY(-50%);
        }

        .pipeline-left {
          right: 50%;
          border-right: 0;
          border-top: 0;
          border-bottom-left-radius: 2rem;
          transform-origin: right center;
        }

        .pipeline-right {
          left: 50%;
          border-left: 0;
          border-top: 0;
          border-bottom-right-radius: 2rem;
          transform-origin: left center;
        }

        .timeline-card {
          width: 100%;
          max-width: 600px;
          background: rgba(21, 10, 12, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 1.5rem;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          transition: all 0.4s ease;
          z-index: 10;
        }

        .timeline-card:hover {
        cursor:pointer;
          transform: translateY(-5px);
          border-color: rgba(197, 168, 128, 0.3);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(197, 168, 128, 0.1);
        }

        .bubble-left {
          margin-right: 80px;
          border-bottom-right-radius: 0;
        }

        .bubble-right {
          margin-left: 80px;
          border-bottom-left-radius: 0;
        }

        .card-corner-dot {
          position: absolute;
          bottom: -6px;
          width: 12px;
          height: 12px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--accent);
        }

        .bubble-left .card-corner-dot {
          right: -6px;
        }

        .bubble-right .card-corner-dot {
          left: -6px;
        }

        .year-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .year-text {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--accent);
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          line-height: 1;
        }

        .tone-pill {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.4rem 0.8rem;
          border-radius: 2rem;
          border: 1px solid var(--accent);
          color: var(--accent);
          background: rgba(255,255,255,0.03);
        }

        .timeline-card h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFF;
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
        }

        .timeline-card p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          line-height: 1.7;
          font-weight: 300;
        }

        /* ── Mobile Layout Adaptability ── */
        @media (max-width: 768px) {
          .timeline-spine {
            left: 2rem;
            transform: none;
          }

          .timeline-row.is-left,
          .timeline-row.is-right {
            justify-content: flex-start;
            padding-left: 2rem;
            padding-right: 0;
          }

          .spine-node {
            left: 2rem;
            transform: translate(-50%, -50%);
          }

          .pipeline.pipeline-left,
          .pipeline.pipeline-right {
            left: 2rem;
            width: 40px;
            border-left: 2px solid rgba(197, 168, 128, 0.4);
            border-right: 0;
            border-bottom-left-radius: 1.5rem;
            border-bottom-right-radius: 0;
          }

          .timeline-card.bubble-left,
          .timeline-card.bubble-right {
            margin-left: 40px;
            margin-right: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 1.5rem;
            padding: 2rem;
          }

          .bubble-left .card-corner-dot,
          .bubble-right .card-corner-dot {
            left: -6px;
            right: auto;
          }

          .year-text {
            font-size: 2.8rem;
          }
        }
      `}</style>

      <div className="timeline-atmosphere" aria-hidden="true" />

      <div className="timeline-heading">
        <p className="eyebrow">Chronological Infographic</p>
        <h1>History</h1>
      </div>

      <div className="timeline-stage" aria-label="Gujarat historical timeline">
        <div className="timeline-spine" aria-hidden="true" />

        {milestones.map((milestone, index) => {
          const side = index % 2 === 0 ? "left" : "right";

          return (
            <article className={`timeline-row is-${side}`} key={milestone.year}>
              <div className="spine-node" style={{ "--accent": milestone.accent }}>
                <span className="spine-dot" aria-hidden="true" />
              </div>

              <div className={`pipeline pipeline-${side}`} aria-hidden="true">
                <span />
              </div>

              <div
                className={`timeline-card bubble-${side}`}
                style={{ "--accent": milestone.accent }}
              >
                <span className="card-corner-dot" aria-hidden="true" />
                <div className="year-row">
                  <span className="year-text">{milestone.year}</span>
                  <span className="tone-pill">{milestone.tone}</span>
                </div>
                <h2>{milestone.title}</h2>
                <p>{milestone.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

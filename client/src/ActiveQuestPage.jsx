
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ActiveQuestPage.css";

function ActiveQuestPage({ quest }) {
  const [completed, setCompleted] = useState([]);

  const objectives = quest?.objectives ?? [];
  const total = objectives.length;
  const completedCount = completed.length;
  const allCompleted = total > 0 && completedCount === total;
  const progress = total > 0 ? (completedCount / total) * 100 : 0;

  useEffect(() => {
    setCompleted([]);
  }, [quest]);

  function toggleObjective(index) {
    setCompleted((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  }

  return (
    <main className="active-page">
      <nav className="active-nav">
        <Link to="/" className="active-brand">
          <span>✳</span> ramblequest
        </Link>

        <span className="active-nav-label">YOUR FIELD JOURNAL</span>

        <Link to="/create" className="active-exit">
          New quest ↗
        </Link>
      </nav>

      {allCompleted ? (
        <section className="completion-screen">
          <div className="completion-symbol">✳</div>
          <p className="active-eyebrow">FIELD NOTES — COMPLETE</p>

          <h1>
            Well wandered<span>.</span>
          </h1>

          <p className="completion-description">
            You stepped outside, followed your curiosity, and made
            a little room for wonder. That's an adventure worth counting.
          </p>

          <div className="completion-stats">
            <div>
              <strong>{completedCount}/{total}</strong>
              <span>OBJECTIVES COMPLETE</span>
            </div>
            <div>
              <strong>{quest.estimatedDuration ?? "—"}</strong>
              <span>MINUTES PLANNED</span>
            </div>
          </div>

          <div className="completion-actions">
            <Link to="/create" className="active-primary-button">
              Find another adventure <span>↗</span>
            </Link>
            <Link to="/" className="active-secondary-link">
              Return home
            </Link>
          </div>
        </section>
      ) : (
        <>
          <header className="quest-banner">
            <div className="quest-banner-copy">
              <p className="active-eyebrow">
                <span>✳</span> YOUR ADVENTURE IS UNDERWAY
              </p>

              <h1>{quest?.title || "Your next adventure"}</h1>

              <p className="active-description">
                {quest?.description ||
                  "Your next little adventure is waiting to begin."}
              </p>

              <div className="active-meta">
                <span>
                  <span className="meta-dot" />
                  {quest?.estimatedDuration ?? "—"} MINUTES
                </span>
                <span>FIELD QUEST NO. 001</span>
              </div>
            </div>

            <div className="quest-banner-art" aria-hidden="true">
              <span className="banner-orbit orbit-one" />
              <span className="banner-orbit orbit-two" />
              <span className="banner-sun">✳</span>
              <span className="banner-letter">W</span>
              <span className="banner-caption">WANDER OFTEN</span>
            </div>
          </header>

          <section className="quest-workspace">
            <div className="objectives-column">
              <div className="objectives-heading">
                <div>
                  <p className="active-eyebrow">THE PLAN</p>
                  <h2>Your objectives</h2>
                </div>

                <span className="objective-counter">
                  {String(completedCount).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <p className="objectives-hint">
                Take your time. Check off each objective as you go.
              </p>

              {total > 0 ? (
                <ol className="active-objectives">
                  {objectives.map((objective, index) => {
                    const isDone = completed.includes(index);

                    return (
                      <li
                        key={`${index}-${objective}`}
                        className={`objective-item ${isDone ? "is-complete" : ""}`}
                      >
                        <button
                          type="button"
                          className="objective-toggle"
                          onClick={() => toggleObjective(index)}
                          aria-pressed={isDone}
                          aria-label={`Mark objective ${index + 1} ${
                            isDone ? "incomplete" : "complete"
                          }`}
                        >
                          {isDone ? "✓" : ""}
                        </button>

                        <span className="objective-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="objective-text">{objective}</span>

                        <span className="objective-status">
                          {isDone ? "DONE" : "TO DO"}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <p className="active-empty">
                  No objectives were returned for this quest. Try generating
                  another quest.
                </p>
              )}

              <div className="safety-note">
                <span>✳</span>
                <p>
                  <strong>Adventure responsibly.</strong>
                  Stay aware of your surroundings, respect private property,
                  and skip anything that feels unsafe.
                </p>
              </div>
            </div>

            <aside className="progress-card">
              <p className="active-eyebrow">YOUR JOURNEY</p>

              <div className="progress-ring">
                <svg viewBox="0 0 120 120" role="img"
                  aria-label={`${Math.round(progress)} percent complete`}>
                  <circle
                    className="progress-ring-track"
                    cx="60"
                    cy="60"
                    r="49"
                  />
                  <circle
                    className="progress-ring-value"
                    cx="60"
                    cy="60"
                    r="49"
                    strokeDasharray={`${progress * 3.0788} 307.88`}
                  />
                </svg>

                <div className="progress-ring-label">
                  <strong>{Math.round(progress)}%</strong>
                  <span>COMPLETE</span>
                </div>
              </div>

              <div className="progress-divider" />

              <div className="progress-detail">
                <span>Objectives finished</span>
                <strong>{completedCount} of {total}</strong>
              </div>

              <div className="progress-detail">
                <span>Still to explore</span>
                <strong>{total - completedCount}</strong>
              </div>

              <div className="progress-quote">
                <span>“</span>
                Every small discovery counts.
              </div>

              <Link to="/create" className="progress-new-quest">
                Create another quest ↗
              </Link>
            </aside>
          </section>

          <footer className="active-footer">
            <span>RAMBLEQUEST — FIELD JOURNAL</span>
            <span>LESS SCROLLING. MORE EXPLORING.</span>
            <Link to="/">BACK TO BASE ↑</Link>
          </footer>
        </>
      )}
    </main>
  );
}

export default ActiveQuestPage;

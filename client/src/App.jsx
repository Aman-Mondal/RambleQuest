
import { useState } from "react";
import "./App.css";

function App() {
  const [interests, setInterests] = useState("");
  const [duration, setDuration] = useState("30");
  const [difficulty, setDifficulty] = useState("easy");
  const [quest, setQuest] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateQuest(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setQuest("");

    try {
      const response = await fetch("http://localhost:5000/api/quests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ interests, duration, difficulty }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Quest generation failed.");
      }

      setQuest(data.quest);
    } catch (err) {
      setError(err.message || "Couldn't connect to RambleQuest's server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <nav className="navbar">
        <a className="brand" href="/">
          <span className="brand-icon">✳</span>
          RambleQuest
        </a>
        <span className="nav-tag">YOUR NEXT ADVENTURE AWAITS</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">LESS SCROLLING. MORE EXPLORING.</p>

        <h1>
          The world is waiting.
          <br />
          <span>Your quest begins here.</span>
        </h1>

        <p className="hero-description">
          Turn your free time into little adventures.
          Tell us what you love, and let AI create a quest
          that gets you out into the real world.
        </p>

        <div className="quest-card">
          <div className="card-heading">
            <span className="card-icon">✦</span>
            <div>
              <h2>Create your quest</h2>
              <p>A little adventure, made just for you.</p>
            </div>
          </div>

          <form className="quest-form" onSubmit={generateQuest}>
            <label htmlFor="interests">What are you curious about?</label>
            <input
              id="interests"
              value={interests}
              onChange={(event) => setInterests(event.target.value)}
              placeholder="Nature, photography, architecture..."
              required
            />

            <div className="form-row">
              <div>
                <label htmlFor="duration">Time available</label>
                <select
                  id="duration"
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                </select>
              </div>

              <div>
                <label htmlFor="difficulty">Adventure level</label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(event) => setDifficulty(event.target.value)}
                >
                  <option value="easy">Easygoing</option>
                  <option value="medium">A little challenge</option>
                  <option value="hard">Bring it on</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="generate-button"
              disabled={loading}
            >
              <span>✳</span>
              {loading ? "Creating your adventure..." : "Generate my quest"}
              <span>↗</span>
            </button>

            <p className="privacy-note">
              ✦ Powered by AI running on your own machine.
            </p>
          </form>
        </div>

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        {quest && (
          <section className="generated-quest" aria-live="polite">
            <p className="eyebrow">YOUR NEXT ADVENTURE</p>
            <h2>{quest.title}</h2>
            <p className="quest-description">{quest.description}</p>
            <div className="quest-duration">
              ✦ {quest.estimatedDuration} minutes
            </div>
            <h3>Your objectives</h3>
            <ol className="quest-objectives">
              {quest.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ol>
          </section>
        )}

        <div className="bottom-note">
          <span>01 — STEP OUTSIDE</span>
          <span>02 — FIND SOMETHING NEW</span>
          <span>03 — MAKE IT A STORY</span>
        </div>
      </section>
    </main>
  );
}

export default App;

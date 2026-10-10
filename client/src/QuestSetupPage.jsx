
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./QuestSetupPage.css";

function QuestSetupPage({ onQuestGenerated }) {
    const [interests, setInterests] = useState("");
    const [duration, setDuration] = useState("30");
    const [difficulty, setDifficulty] = useState("easy");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function generateQuest(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

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

            onQuestGenerated(data.quest);
            navigate("/quest");
        } catch (err) {
            setError(err.message || "Couldn't connect to RambleQuest's server.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="setup-page">
            <nav className="setup-nav">
                <Link to="/" className="setup-brand">
                    <span><b>✳</b></span> RambleQuest
                </Link>
                <span className="setup-step">FIELD NOTES — 01</span>
                <Link to="/" className="setup-back">← Back home</Link>
            </nav>

            <section className="setup-layout">
                <div className="setup-intro">
                    <p className="setup-eyebrow">
                        <span>✳</span> YOUR ADVENTURE STARTS HERE
                    </p>

                    <h1>
                        Make a little
                        <br />
                        <span>room for wonder.</span>
                    </h1>

                    <p className="setup-description">
                        Every great story starts somewhere. Choose what interests
                        you, set aside a little time, and let your next adventure
                        find its shape.
                    </p>

                    <div className="setup-note">
                        <span className="setup-note-icon">↗</span>
                        <div>
                            <strong>NO BIG PLANS REQUIRED</strong>
                            <p>Just curiosity, a little time, and a willingness to explore.</p>
                        </div>
                    </div>
                </div>

                <div className="setup-card">
                    <div className="setup-card-heading">
                        <span className="setup-number">01</span>
                        <div>
                            <h2>Plan your quest</h2>
                            <p>Make it yours. The possibilities are open.</p>
                        </div>
                    </div>

                    <form onSubmit={generateQuest} className="setup-form">
                        <label htmlFor="setup-interests">
                            WHAT ARE YOU INTO?
                        </label>
                        <input
                            id="setup-interests"
                            value={interests}
                            onChange={(event) => setInterests(event.target.value)}
                            placeholder="Nature, architecture, street art..."
                            required
                            maxLength={200}
                        />

                        <label htmlFor="setup-duration">HOW MUCH TIME DO YOU HAVE?</label>
                        <div className="setup-options">
                            {[
                                { value: "15", label: "15 min" },
                                { value: "30", label: "30 min" },
                                { value: "60", label: "1 hour" },
                                { value: "120", label: "2 hours" },
                            ].map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    className={`setup-option ${duration === option.value ? "selected" : ""
                                        }`}
                                    onClick={() => setDuration(option.value)}
                                    aria-pressed={duration === option.value}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                        <input
                            id="setup-duration"
                            type="hidden"
                            value={duration}
                            readOnly
                        />

                        <label htmlFor="setup-difficulty">PICK YOUR PACE</label>
                        <select
                            id="setup-difficulty"
                            value={difficulty}
                            onChange={(event) => setDifficulty(event.target.value)}
                        >
                            <option value="easy">Easygoing — keep it relaxed</option>
                            <option value="medium">Curious — try something new</option>
                            <option value="hard">Adventurous — challenge yourself</option>
                        </select>

                        {error && (
                            <p className="setup-error" role="alert">
                                {error}
                            </p>
                        )}


                        <button
                            className="setup-submit"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Dreaming up your quest..." : "Generate my quest"}
                            <span className={loading ? "quest-spinner" : ""}>✳</span>
                        </button>


                        <p className="setup-privacy">
                            ✳ Generated locally with AI on your machine.
                        </p>
                    </form>
                </div>
            </section>

            <footer className="setup-footer">
                <span>01 — CHOOSE YOUR CURIOSITY</span>
                <span>02 — STEP OUTSIDE</span>
                <span>03 — MAKE IT A STORY</span>
            </footer>
        </main>
    );
}

export default QuestSetupPage;

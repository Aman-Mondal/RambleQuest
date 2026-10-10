import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <nav className="home-nav">
        <Link to="/" className="home-brand">
          <span className="brand-symbol">✳</span>
          <span>RambleQuest</span>
        </Link>

        <div className="nav-center">A FIELD GUIDE TO EVERYDAY ADVENTURE</div>

        <Link to="/create" className="nav-start">
          Start exploring <span>↗</span>
        </Link>
      </nav>

      <section className="home-hero">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="kicker-line" />
            YOUR WORLD, REIMAGINED
          </div>

          <h1>
            GET
            <br />
            <span>OUT</span> THERE<span className="title-period">.</span>
          </h1>

          <p className="hero-description">
            The best adventures don't need a plane ticket.
            Find a new path, notice the little things, and turn
            an ordinary afternoon into a story worth telling.
          </p>

          <div className="hero-actions">
            <Link to="/create" className="primary-cta">
              Start your adventure <span>↗</span>
            </Link>

            <span className="cta-caption">
              YOUR NEXT STORY STARTS OUTSIDE
            </span>
          </div>

          <div className="hero-footnote">
            <span className="footnote-star">✳</span>
            A LITTLE CURIOSITY GOES A LONG WAY
          </div>
        </div>

        <div className="hero-art">
          <div className="art-topline">
            <span>FIELD NOTES — NO. 001</span>
            <span>MADE FOR THE CURIOUS</span>
          </div>

          <div className="landscape-frame">
            <div className="landscape-image" />

            <div className="landscape-overlay" />

            <div className="art-coordinate">
              22°34' N
              <br />
              FIND YOUR OWN WAY
            </div>

            <div className="art-stamp">
              <span>THE</span>
              <strong>OUTSIDE</strong>
              <span>IS CALLING</span>
            </div>

            <div className="art-bottom">
              <span>WANDER A LITTLE.</span>
              <span className="art-circle">↗</span>
            </div>
          </div>

          <div className="art-caption">
            <span>FIG. 01 — THE WORLD BEYOND YOUR ROUTINE</span>
            <span>EST. TODAY</span>
          </div>

          <span className="art-decoration art-decoration-one">✳</span>
          <span className="art-decoration art-decoration-two">↗</span>
        </div>

        <div className="hero-side-label">
          SMALL QUESTS. BIGGER WORLDS.
        </div>
      </section>

      <section className="home-marquee" aria-label="Adventure ideas">
        <div className="marquee-track">
          <span>FOLLOW YOUR CURIOSITY</span>
          <span className="marquee-star">✳</span>
          <span>TAKE THE SCENIC ROUTE</span>
          <span className="marquee-star">✳</span>
          <span>MAKE ORDINARY MAGIC</span>
          <span className="marquee-star">✳</span>
          <span>FOLLOW YOUR CURIOSITY</span>
          <span className="marquee-star">✳</span>
        </div>
      </section>

      <section className="home-intro">
        <div className="intro-label">01 / THE RAMBLEQUEST IDEA</div>

        <div className="intro-content">
          <h2>
            You don't need
            <br />
            a destination.
            <br />
            <span>Just a reason to wander.</span>
          </h2>

          <div className="intro-right">
            <p>
              Tell us what you love and how much time you have.
              RambleQuest turns it into a real-world mini-adventure
              designed to get you exploring.
            </p>

            <Link to="/create" className="text-link">
              Find your next quest <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <Link to="/" className="footer-brand">
          ✳ RAMBLEQUEST
        </Link>
        <span>LESS SCROLLING. MORE EXPLORING.</span>
        <span>YOUR ADVENTURE STARTS WITH YOU.</span>
      </footer>
    </main>
  );
}

export default Home;
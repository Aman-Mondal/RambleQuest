# 🌿 RambleQuest

### Your next adventure is outside.

RambleQuest is an AI-powered mini-adventure generator designed to help people step away from their screens and reconnect with the world around them.

Tell RambleQuest about your interests, how much time you have, and your preferred difficulty. It generates a small, actionable quest that encourages you to explore your surroundings, notice the little things, and turn an ordinary day into a mini-adventure.

**The goal is simple: less scrolling, more exploring.**

## ✨ Features

- 🤖 **AI-generated quests** — Get personalized mini-adventures generated from your preferences.
- ⏱️ **Flexible durations** — Choose how much time you want to spend on your next adventure.
- 🎯 **Customizable difficulty** — Tailor quests to your preferred level of challenge.
- 📋 **Actionable objectives** — Break an adventure into manageable steps.
- ✅ **Progress tracking** — Check off objectives as you complete them.
- 🎨 **Immersive interface** — A warm, nature-inspired design built around the feeling of a field journal.
- 🌱 **Touch Grass philosophy** — Encourages real-world exploration instead of endless screen time.

## 🎮 How It Works

1. **Set your preferences:** Choose your interests, available time, and difficulty.
2. **Generate a quest:** The AI creates a mini-adventure tailored to your choices.
3. **Head outside:** Follow your objectives and explore your surroundings.
4. **Track your progress:** Complete the objectives one by one.
5. **Make the ordinary extraordinary:** Discover something new in places you might normally overlook.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Interactive frontend |
| Vite | Frontend development and build tooling |
| React Router | Page navigation |
| CSS | Styling and responsive layouts |
| Node.js | Backend runtime |
| Express.js | REST API |
| Ollama | Local AI inference during development |
| Qwen 2.5 3B | Local language model for quest generation |

## 🏗️ Project Structure

```text
RambleQuest/
├── client/
│   ├── public/
│   │   └── ramblequest.svg
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── QuestSetupPage.jsx
│       │   └── ActiveQuestPage.jsx
│       └── ...
├── server/
│   ├── prompts/
│   │   └── questPrompt.js
│   └── server.js
├── .gitignore
└── README.md
```

*The structure above highlights the main application files; supporting components, stylesheets, and configuration files are omitted for brevity.*

## 🚀 Getting Started

### Prerequisites

Install the following before running RambleQuest locally:

- [Node.js](https://nodejs.org/) and npm
- [Git](https://git-scm.com/)
- [Ollama](https://ollama.com/) for local AI inference

### 1. Clone the repository

```bash
git clone https://github.com/Aman-Mondal/RambleQuest.git
cd RambleQuest
```

### 2. Download the AI model

Install Ollama, then download the model used for local development:

```bash
ollama pull gemma3:1b
```

Start Ollama and make sure the model is available:

```bash
ollama list
```

### 3. Start the backend

Open a terminal:

```bash
cd server
npm install
node server.js
```

The Express API should be available at:

```text
http://localhost:5000
```

Keep Ollama running while generating quests locally.

### 4. Configure the frontend

Open a second terminal:

```bash
cd client
npm install
```

Create a `.env` file inside the `client/` directory:

```env
VITE_API_URL=http://localhost:5000
```

This tells the frontend where to find the backend API during local development.

### 5. Start the frontend

From the `client/` directory, run:

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

You're ready to generate your first quest!

## 🔌 API

### Generate a quest

**Endpoint:** `POST /api/quests`

The frontend sends the user's preferences to the Express backend, which constructs a prompt and requests a quest from the configured AI model.

Example request:

```json
{
  "interests": ["nature", "photography"],
  "duration": 30,
  "difficulty": "easy"
}
```

Example quest structure:

```json
{
  "title": "The Little Things Expedition",
  "description": "Take a short walk and notice the details you usually overlook.",
  "objectives": [
    "Find an interesting natural pattern.",
    "Photograph or sketch a small detail.",
    "Notice one sound you normally ignore."
  ],
  "estimatedDuration": 30
}
```

*The example illustrates the expected response structure; actual quests are generated dynamically.*

## 🧠 Why AI?

A static checklist can suggest things to do, but AI makes each quest adaptable to the person using it.

RambleQuest uses a language model to turn interests, available time, and difficulty preferences into small, actionable real-world experiences.

During local development, Ollama allows the model to run on the user's own machine rather than requiring every prompt to be sent to a hosted AI service. This provides a path toward more private, locally controlled AI experiences.

## 🌍 Built for the Touch Grass Challenge

RambleQuest explores a simple question:

**What if AI helped us spend less time staring at screens and more time experiencing the world?**

Instead of using AI solely to generate more digital content, RambleQuest uses it as a starting point for offline activities, exploration, and curiosity.

The project is built around three ideas:

- **Open innovation:** Use open-weight models and accessible tools to experiment with AI.
- **Real-world interaction:** Turn generated suggestions into activities beyond the screen.
- **Accessible exploration:** Make it easier to start small, even when you have only a few minutes available.

The best part of a quest isn't generating it. It's going out and completing it.

## 🗺️ Roadmap

- [x] Build the initial React frontend.
- [x] Create an Express API for quest generation.
- [x] Integrate local Ollama inference.
- [x] Add quest objectives and progress tracking.
- [x] Deploy the frontend and backend.
- [ ] Finish hosted AI inference integration for the public deployment.
- [ ] Test quests in real-world settings and document the experience.
- [ ] Improve quest variety, personalization, and safety.
- [ ] Add more ways to record completed adventures.

## 🔐 Safety First

RambleQuest is designed to encourage exploration responsibly.

- Choose activities appropriate for your surroundings and abilities.
- Prefer safe, public places and respect private property.
- Follow local rules and pay attention to traffic and environmental hazards.
- Never put yourself or others at risk just to complete a quest.

You can always skip or adapt an objective.

## 🤝 Contributing

Contributions, ideas, and feedback are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes locally.
5. Submit a pull request describing what you improved.

For larger changes, open an issue first so we can discuss the idea.

## 📜 License

A license has not yet been specified. Add a `LICENSE` file and update this section once the project license is chosen.

---

**Made with curiosity, code, and a little encouragement to go outside. 🌿**

[Explore the repository on GitHub](https://github.com/Aman-Mondal/RambleQuest)
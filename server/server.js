const express = require("express");
const cors = require("cors");
const buildQuestPrompt = require("./prompts/questPrompt");
const app = express();

const PORT = 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "RambleQuest API Running"
    });
});

app.post("/api/quests", async (req, res) => {
    try {
        const { interests, duration, difficulty } = req.body;
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "qwen2.5:3b",
                format: "json",
                prompt: buildQuestPrompt(interests, duration, difficulty),
                stream: false,
            }),
        });

        if (!response.ok) {
            throw new Error("Ollama request failed");
        }

        const data = await response.json();
        const quest = JSON.parse(data.response);


        if (!response.ok) {
            throw new Error("Ollama request failed");
        }
        res.json({ quest });
    } catch (error) {
        console.error("Quest generation failed:", error.message);

        res.status(500).json({
            error: "Could not generate a quest. Make sure Ollama is running."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Api is listning at port ${PORT}`)
});
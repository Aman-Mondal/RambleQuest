const express = require("express");
const app = express();

const PORT = 5000;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message : "IRL Quest API Running"
    });
});

app.listen(PORT, () => {
    console.log(`Api is listning at port ${PORT}`)
});
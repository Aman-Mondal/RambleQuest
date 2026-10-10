
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./Home";
import QuestSetupPage from "./QuestSetupPage";
import ActiveQuestPage from "./ActiveQuestPage";

function App() {
  const [quest, setQuest] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/create"
          element={<QuestSetupPage onQuestGenerated={setQuest} />}
        />
        <Route
          path="/quest"
          element={
            quest ? (
              <ActiveQuestPage quest={quest} />
            ) : (
              <Navigate to="/create" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<AuthPage />} />
      <Route path="signup" element={<AuthPage />} />
      <Route path="chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;

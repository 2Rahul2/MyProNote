import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import NotesList from "./pages/NotesList";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="notes/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

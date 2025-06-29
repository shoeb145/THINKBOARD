import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreatePage from "./pages/createPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";
function App() {
  return (
    <div data-theme="forest" className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

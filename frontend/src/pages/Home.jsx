import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import RateLimitedUI from "../components/RateLimitedUi";
import axios from "axios";
import NoteCard from "../components/NoteCard";
import toast from "react-hot-toast";

function Home(props) {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const featch = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        setNotes(res.data);
        console.log(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log(error);
        if (error.response?.status == 429) {
          setIsRateLimited(true);
        } else {
          toast.error("failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    featch();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}
        {notes && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

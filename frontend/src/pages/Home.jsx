import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import RateLimitedUI from "../components/RateLimitedUi";
import axios from "axios";

function Home(props) {
  const [isRateLimited, setIsRateLimitd] = useState(false);
  const [note, setNote] = useState([]);
  const [losding, setLoading] = useState(true);

  useEffect(() => {
    const featch = async () => {
      const res = await axios.get("");
      try {
      } catch (error) {}
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
}

export default Home;

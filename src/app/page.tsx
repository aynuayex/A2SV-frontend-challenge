import Featured from "@/components/Featured";
import Intro from "@/components/Intro";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Featured />
    </div>
  );
}

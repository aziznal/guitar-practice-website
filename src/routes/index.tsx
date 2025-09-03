import { AudioVisualizer } from "@/components/AudioVisualizer";
import { Header } from "@/components/Header";
import { PracticeLog } from "@/components/PracticeLog";
import { ScaleFingering } from "@/components/ScaleFingering";
import { Timer } from "@/components/Timer";
import { GPPage } from "@/components/ui/Page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <Header />

      <GPPage className="flex flex-col">
        <Timer className="mb-5" />

        <div className="mb-4">Practicing: Myxolydian in G Major</div>

        <AudioVisualizer className="mb-16" />

        <div className="self-center mb-12">
          <ScaleFingering />
        </div>

        <PracticeLog />
      </GPPage>
    </div>
  );
}

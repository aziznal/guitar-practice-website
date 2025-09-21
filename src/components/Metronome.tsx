import { cn } from "@/lib/utils";
import { GPButton } from "./ui/button";
import { useEffect, useState } from "react";
import { LucidePlay, LucidePause } from "lucide-react";
import { GPSlider } from "./ui/slider";

// TODO: use bpms for slider
// TODO: add (toggleable) visualization
// TODO: convert to pinnable popover

const audio = new Audio("/audio/metronome/click.wav");
audio.preload = "auto";

export const Metronome: React.FC<{ className?: string }> = (props) => {
  const [isMetronomePlaying, setIsMetronomePlaying] = useState(false);
  const [metronomeIntervalMs, setMetronomeIntervalMs] = useState(1000);

  const startMetronome = () => {
    setIsMetronomePlaying(true);
  };
  const stopMetronome = () => {
    setIsMetronomePlaying(false);
  };

  // play tick every interval
  useEffect(() => {
    if (!isMetronomePlaying) return;

    const interval = setInterval(() => {
      // need to restart before playing
      audio.currentTime = 0;
      audio.play();
    }, metronomeIntervalMs);

    return () => clearInterval(interval);
  }, [isMetronomePlaying, metronomeIntervalMs]);

  return (
    <div className={cn(props.className)}>
      <GPButton
        className="mb-4"
        onClick={isMetronomePlaying ? stopMetronome : startMetronome}
        variant={isMetronomePlaying ? "secondary" : "default"}
      >
        {isMetronomePlaying ? "Stop" : "Start"} metronome{" "}
        {isMetronomePlaying ? <LucidePause /> : <LucidePlay />}
      </GPButton>

      {isMetronomePlaying && (
        <div>
          <p className="text-muted-foreground mb-1 font-mono">
            {metronomeIntervalMs}
          </p>

          <GPSlider
            value={[metronomeIntervalMs]}
            onValueChange={([value]) => setMetronomeIntervalMs(value)}
            step={50}
            max={2000}
            min={50}
          />
        </div>
      )}

      <GPButton
        onClick={() => {
          audio.currentTime = 0;
          audio.play();
        }}
      >
        Click
      </GPButton>
    </div>
  );
};

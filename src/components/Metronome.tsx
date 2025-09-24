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
  const [angle, setAngle] = useState(15);

  const startMetronome = () => {
    setIsMetronomePlaying(true);
  };

  function animateAngleToStart() {
    // Animate angle back to 15
    let start: number | null = null;
    const from = angle;
    const to = 15;
    const duration = 400; // ms
    let rafId: number;

    function animateBack(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setAngle(from + (to - from) * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(animateBack);
      }
    }

    rafId = requestAnimationFrame(animateBack);
  }

  const stopMetronome = () => {
    setIsMetronomePlaying(false);
    animateAngleToStart();
  };

  // play tick every interval
  useEffect(() => {
    if (!isMetronomePlaying) return;

    let lastBeatTime = performance.now();
    let side = 1; // 1 = right, -1 = left
    let rafId: number;

    function animate() {
      const now = performance.now();
      const phase = (now - lastBeatTime) / metronomeIntervalMs; // 0..1 between beats

      // interpolate smoothly between +max and -max depending on `side`
      const angle = side * 15 * Math.cos(phase * Math.PI);
      setAngle(angle);

      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    const intervalId = setInterval(() => {
      audio.currentTime = 0;
      audio.play();
      lastBeatTime = performance.now();
      side *= -1; // flip side each tick
    }, metronomeIntervalMs);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(rafId);
    };
  }, [isMetronomePlaying, metronomeIntervalMs]);

  return (
    <div className={cn(props.className)}>
      <div className="flex gap-2 w-[220px] mb-4">
        <svg viewBox="60 60 180 210" className="w-[120px] h-fit">
          {/* base */}
          <polygon
            points="70,240 230,240 240,270 60,270"
            className="fill-orange-950 stroke-zinc-900"
            strokeWidth={3}
          />

          {/* body with flat top */}
          <polygon
            points="135,60 165,60 230,240 70,240"
            className="fill-zinc-800 stroke-zinc-900"
            strokeWidth={3}
          />

          {/* window */}
          <rect
            x="137.5"
            y="100"
            width="25"
            height="130"
            rx="3"
            className="fill-zinc-400 stroke-zinc-600"
            strokeWidth={2}
          />

          {/* pendulum arm */}
          <line
            x1="150"
            y1="226"
            x2="150"
            y2="60"
            className="stroke-slate-300"
            strokeWidth={5}
            strokeLinecap="round"
            transform={`rotate(${angle} 150 226)`}
          />

          {/* sliding weight */}
          <rect
            x="140"
            y="100"
            width="20"
            height="20"
            className="fill-slate-500 stroke-slate-700"
            strokeWidth={2}
            transform={`rotate(${angle} 150 226)`}
          />
        </svg>

        <button
          className={cn(
            "cursor-pointer border h-fit w-fit self-end p-2 rounded-full shadow-[0px_4px] shadow-zinc-400 active:translate-y-[2px] transition-transform active:shadow-[0px_2px] duration-75 hover:bg-zinc-800",
            isMetronomePlaying && "shadow-amber-400",
          )}
          onClick={isMetronomePlaying ? stopMetronome : startMetronome}
        >
          {isMetronomePlaying ? (
            <LucidePause size="20" />
          ) : (
            <LucidePlay size="20" />
          )}
        </button>
      </div>

      {isMetronomePlaying && (
        <div className="animate-in">
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
    </div>
  );
};

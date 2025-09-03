import { cn } from "@/lib/utils";

export const AudioVisualizer: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={cn(
        "h-[300px] border rounded-xl flex items-center justify-center",
        props.className,
      )}
    >
      [AUDIO VISUALIZER]
    </div>
  );
};

import { cn } from "@/lib/utils";
import { Metronome } from "../Metronome";

export const GPPage: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <div
      className={cn(
        props.className,
        "mt-8 mx-8 sm:mx-auto sm:px-6 min-h-dvh max-w-[768px] w-full",
      )}
    >
      <Metronome />
    </div>
  );
};

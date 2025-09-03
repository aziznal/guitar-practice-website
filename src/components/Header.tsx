import { cn } from "@/lib/utils";
import { Nav } from "./Nav";
import { Logo } from "./Logo";
import { Metronome } from "./Metronome";

export const Header: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={cn("p-8 flex items-center justify-between", props.className)}
    >
      <Logo />

      <Nav />

      <Metronome />
    </div>
  );
};

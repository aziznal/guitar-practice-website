import { cn } from "@/lib/utils";

export const Nav: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={cn(props.className, "flex gap-12")}>
      <span>[NAV]</span>
      <span>[NAV]</span>
      <span>[NAV]</span>
      <span>[NAV]</span>
      <span>[NAV]</span>
    </div>
  );
};

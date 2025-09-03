import { cn } from "@/lib/utils";

export const Logo: React.FC<{ className?: string }> = (props) => {
  return <div className={cn(props.className)}>[LOGO]</div>;
};

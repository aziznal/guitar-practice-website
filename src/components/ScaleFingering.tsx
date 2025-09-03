import { cn } from "@/lib/utils";

export const ScaleFingering: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center h-[400px] w-[250px] border rounded-xl",
        props.className,
      )}
    >
      [SCALE FINGERING]
    </div>
  );
};

import { cn } from "@/lib/utils";

export const GPPage: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <div
      className={cn(
        props.className,
        "mt-8 mx-8 sm:mx-auto min-h-dvh max-w-[768px] w-full",
      )}
    >
      {props.children}
    </div>
  );
};

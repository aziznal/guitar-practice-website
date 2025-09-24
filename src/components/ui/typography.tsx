import { cn } from "@/lib/utils";

export const H1: React.FC<{ children: React.ReactNode; className?: string }> = (
  props,
) => {
  return (
    <div className={cn("text-[28px] pb-2", props.className)}>
      {props.children}
    </div>
  );
};

export const H2: React.FC<{ children: React.ReactNode; className?: string }> = (
  props,
) => {
  return (
    <div className={cn("text-[24px] pb-2", props.className)}>
      {props.children}
    </div>
  );
};

export const H3: React.FC<{ children: React.ReactNode; className?: string }> = (
  props,
) => {
  return (
    <div className={cn("text-[20px] pb-2", props.className)}>
      {props.children}
    </div>
  );
};

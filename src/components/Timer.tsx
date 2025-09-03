import { cn } from '@/lib/utils';

export const Timer: React.FC<{ className?: string }> = (props) => {
  return <div className={cn(props.className)}>
    [TIMER]
  </div>
}

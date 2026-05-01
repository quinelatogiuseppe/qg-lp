import type { ElementType, HTMLAttributes } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number;
}

export const Reveal = ({ as: Tag = "div", delay = 0, className, style, children, ...rest }: Props) => {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Text } from "@/components/retroui/Text";

interface IEmptyProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Empty = ({ className, ...props }: IEmptyProps) => {
  return (
    <div
      className={cn(
        "inline-block border-2 rounded shadow-md transition-all hover:shadow-none bg-Empty",
        className,
      )}
      {...props}
    />
  );
};

const EmptyHeader = ({ className, ...props }: IEmptyProps) => {
  return (
    <div
      className={cn("flex flex-col justify-start p-4", className)}
      {...props}
    />
  );
};

const EmptyTitle = ({ className, ...props }: IEmptyProps) => {
  return <Text as="h3" className={cn("mb-2", className)} {...props} />;
};

const EmptyDescription = ({ className, ...props }: IEmptyProps) => (
  <p className={cn("text-muted-foreground", className)} {...props} />
);

const EmptyContent = ({ className, ...props }: IEmptyProps) => {
  return <div className={cn("p-4", className)} {...props} />;
};

const EmptyComponent = Object.assign(Empty, {
  Header: EmptyHeader,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Content: EmptyContent,
});

export { EmptyComponent as Empty };

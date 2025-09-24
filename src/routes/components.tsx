import { Metronome } from "@/components/Metronome";
import { GPPage } from "@/components/ui/page";
import { H1, H2, H3 } from "@/components/ui/typography";
import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <GPPage className="flex flex-col gap-8">
      <H1>Components</H1>

      <Section>
        <SectionTitle>Typography</SectionTitle>

        <div className="mb-6">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
        </div>

        <div>
          <H1>Title</H1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            optio?
          </p>
        </div>
      </Section>

      <Section>
        <SectionTitle>Metronome</SectionTitle>
        <Metronome />
      </Section>
    </GPPage>
  );
}

const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = (props) => {
  return (
    <div className={cn("p-6 rounded-2xl border", props.className)}>
      {props.children}
    </div>
  );
};

const SectionTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = (props) => {
  return (
    <H2 className={cn(props.className, "text-muted-foreground mb-4")}>
      {props.children}
    </H2>
  );
};

import { Metronome } from "@/components/Metronome";
import { GPPage } from "@/components/ui/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <GPPage>
      <Metronome />
    </GPPage>
  );
}

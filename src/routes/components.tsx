import { GPPage } from "@/components/ui/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return <GPPage>Hello "/components"!</GPPage>;
}

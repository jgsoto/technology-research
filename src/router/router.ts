import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { indexRoute } from "./index";
import { usersRoute } from "./users";
import { aboutRoute } from "./about";

const routeTree = rootRoute.addChildren([indexRoute, usersRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
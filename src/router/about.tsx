import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { About } from "../pages/About";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { Users } from "../pages/Users";

export const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: Users,
});
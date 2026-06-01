import { createRootRoute } from "@tanstack/react-router";
import { MainLayout } from "../components/templates/MainLayout";

export const rootRoute = createRootRoute({
  component: MainLayout,
});
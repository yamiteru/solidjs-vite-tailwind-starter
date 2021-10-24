import { lazy } from "solid-js";
import { RouteDefinition } from "solid-app-router";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/test",
    component: lazy(() => import("./pages/Test")),
  },
  {
    path: "/*all",
    component: lazy(() => import("./pages/Error404")),
  },
];

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      redirect: "/starter",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "Welcome",
          path: "/starter",
          component: () => import("@/views/StarterPage.vue")
        },
        {
          name: "Pick Metric",
          path: "/metrics",
          component: () => import("@/views/StarterMetrics.vue")
        },
        {
          name: "Pick Tools",
          path: "/tools",
          component: () => import("@/views/StarterTools.vue")
        },
        {
          name: "My Library",
          path: "/library",
          component: () => import("@/views/StarterLibrary.vue")
        },
        {
          name: "Workflows",
          path: "/workflows",
          component: () => import("@/views/workflows/WorkflowsTable.vue")
        },
        {
          name: "Workflow pipeline",
          path: "/workflows/:id",
          component: () => import("@/views/workflows/Workflow.vue")
        },
        {
          name: "Data Sources",
          path: "/sources",
          component: () => import("@/views/sources/index.vue"),
        },
        {
          name: "Integrations",
          path: "/integrations",
          component: () => import("@/views/integrations/index.vue"),
        },
        {
          name: "Insights",
          path: "/insights",
          component: () => import("@/views/insights/index.vue"),
        },
        {
          name: "Editable Table",
          path: "/editable-table",
          component: () => import("@/views/workflows/EditableTable.vue"),
        },
      ],
    },
    {
      path: "/authentication",
      component: () => import("@/layouts/blank/BlankLayout.vue"),
      children: [
        {
          name: "Login",
          path: "/authentication/fulllogin",
          component: () => import("@/views/authentication/FullLogin.vue"),
        },
        {
          name: "Boxed Login",
          path: "/authentication/boxedlogin",
          component: () => import("@/views/authentication/BoxedLogin.vue"),
        },
        {
          name: "Error",
          path: "/authentication/error",
          component: () => import("@/views/authentication/Error.vue"),
        },
        {
          name: "Register",
          path: "/authentication/fullregister",
          component: () => import("@/views/authentication/FullRegister.vue"),
        },
        {
          name: "Boxed Register",
          path: "/authentication/boxedregister",
          component: () => import("@/views/authentication/BoxedRegister.vue"),
        },
      ],
    },
  ],
});

export default router;

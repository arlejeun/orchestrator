export interface menu {
  header?: string;
  group?: string;
  model?: boolean;
  title?: any;
  icon?: string;
  to?: any;
  children?: menu[];
}

const sidebarItem: menu[] = [
  { header: "Orchestrator" },
  {
    title: "Workflows",
    icon: "codepen",
    to: "/workflows",
  },  
  {
    title: "Sources",
    icon: "layers",
    to: "/sources",
  },  
  {
    title: "Integrations",
    icon: "package",
    to: "/integrations",
  },  
  {
    title: "AI/ML Insights",
    icon: "activity",
    to: "/insights",
  },  
];

export default sidebarItem;
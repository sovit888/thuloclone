import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Sidebar from "../pages/sidebar/Sidebar";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/sidebar", component: Sidebar },
  { path: "/login", component: Login },
];

export default routes;

import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Notifications from "views/Notifications/Notifications";

const dashboardRoutes = [

  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Alunos da turma",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications
  },
  
  { redirect: true, path: "/", to: "/user", name: "User Profile" }
];

export default dashboardRoutes;

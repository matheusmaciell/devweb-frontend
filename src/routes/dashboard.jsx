import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";


const dashboardRoutes = [
  
  {
    path: "/user",
    name: "Perfil de usuário",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Alunos da turma",
    icon: "pe-7s-note2",
    component: TableList
  },
  { redirect: true, path: "/", to: "/user", name: "User Profile" }
];

export default dashboardRoutes;

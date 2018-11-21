<<<<<<< HEAD
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import UserGrades from "../views/UserGrades/UserGrades";
=======
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
>>>>>>> parent of e8e6279... DEUS AGORA FOI


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
  {
    path: "/Notas",
    name: "Notas",
    icon: "pe-7s-paper-plane",
    component: UserGrades

  },


  { redirect: true, path: "/", to: "/user", name: "User Profile" }
];

export default dashboardRoutes;

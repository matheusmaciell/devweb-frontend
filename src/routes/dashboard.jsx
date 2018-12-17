
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import UserGrades from "../views/UserGrades/UserGrades";
import Register from "../views/Register/Register";


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
  {
    path: "/cadastro",
    name: "Cadastro",
    icon: "pe-7s-plus",
    component: Register

  },

  { redirect: true, path: "/", to: "/user", name: "User Profile" }
];

export default dashboardRoutes;

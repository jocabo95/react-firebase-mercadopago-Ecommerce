import Home from "../components/pages/home/Home";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import Login from "../components/pages/login/Login"

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
  },
 
];

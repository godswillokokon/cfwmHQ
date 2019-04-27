import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/home";
import Err from "./components/err";
import Landing from "./components/landing";
import Shop from "./components/shop";
import About from "./components/aboutUs";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Live from "./components/live";
let display = createStackNavigator({
Home: Home, 
 Landing: Landing,
  Err: Err,
  Shop: Shop,
  About: About,
  Blog: Blog,
  Contact: Contact,
  Live: Live
});
export default createAppContainer(display);

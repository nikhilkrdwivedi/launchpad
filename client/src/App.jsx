import { useState } from "react";
import "./App.css";
import { useTheme } from "@contexts/ThemeContext";
import TopHeader from "@components/headers/TopHeader";
import HomePageBanner from "@components/banners/HomePageBanner";
import Footers from "./components/headers/Footers";
import Tab from "./components/Tabs/ActionTab";
import LoginPage from "./pages/publicPages/GetStarted";
import PageNotFound from "./pages/commonPages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/publicPages/Home";
import Router from "./routes/Router";
const light = ["bg-red-900", "bg-green-900", "bg-yellow-900", "bg-pink-900"];
const dark = [
  "dark:bg-red-900",
  "dark:bg-green-900",
  "dark:bg-yellow-900",
  "dark:bg-pink-900",
].reverse();
function App() {
  const [count, setCount] = useState(0);
  const { isDarkMode, toggleTheme } = useTheme();
  return <Router />;
}

export default App;

import api from "./api";
import "./App.css";

import Searchbar from "./components/Searchbar";

import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import MyRoutes from "./Routes/Routes";

function App() {
  return (
    <div className="container mx-auto">
      <Sidebar />
      
      <MyRoutes />
    </div>
  );
}

export default App;

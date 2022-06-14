
import { useState } from "react";
import Routerdata from "./components/Router";

import Userdata from "./components/User";
import "./styles.css";

export default function App() {
  const [page,setPage]=useState(1)
  return (
    <div className="App">
     
    <Routerdata />
</div>
  );
}

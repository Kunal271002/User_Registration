import logo from "./logo.svg";
import "./App.css";
import CrudTable from "./Compoents/CrudTable/CrudTable";
import AddForm from "./Compoents/CrudTable/AddForm";
import Practice from "./Compoents/PraticeFetchData/Practice";
import Form from "../src/Compoents/PraticeFetchData/From";
import DesignForm from "./Compoents/PraticeFetchData/DesignForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DesignForm />} />
          <Route path="/CrudTable" element={<CrudTable />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

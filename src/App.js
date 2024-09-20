import "./App.css";
import DesignForm from "./Compoents/PraticeFetchData/DesignForm";
import Details from "./Compoents/CrudTable/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudTable from "./Compoents/CrudTable/CrudTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DesignForm />} />
          <Route path="/CrudTable" element={<CrudTable />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

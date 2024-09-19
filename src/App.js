import logo from './logo.svg';
import './App.css';
import CrudTable from './Compoents/CrudTable/CrudTable';
import AddForm from './Compoents/CrudTable/AddForm';
import Practice from './Compoents/PraticeFetchData/Practice';
import Form from '../src/Compoents/PraticeFetchData/From';
import DesignForm from './Compoents/PraticeFetchData/DesignForm';

function App() {
  return (
    <div className="App">
      <DesignForm/>
      {/* <Form/> */}
    </div>
  );
}

export default App;

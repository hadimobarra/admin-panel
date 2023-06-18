import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import {ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Table />
    </div>
  );
}

export default App;

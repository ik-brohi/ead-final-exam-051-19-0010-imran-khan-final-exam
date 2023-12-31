import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
    <CustomNavbar/>
     <Home/>
      <CustomFooter/>
    </div>
  );
}

export default App;

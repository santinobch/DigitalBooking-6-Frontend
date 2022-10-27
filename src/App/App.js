import './App.scss';
import Home from "./pages/home/home";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SearchBar from './components/inputs/select/SearchBar';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;

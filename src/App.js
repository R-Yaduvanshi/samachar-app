import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";

function App() {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;

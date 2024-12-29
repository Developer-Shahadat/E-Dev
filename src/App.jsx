
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";

const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} ></Route>
          <Route path="/*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
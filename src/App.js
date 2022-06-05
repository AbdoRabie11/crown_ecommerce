import "./App.css";
import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/Navigation'
import Home from "./routes/Home";
const Ap2 = () => {
  return <h3>hello from react i am the shop page </h3>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="home" element={<Home />} />;
        <Route path="shop" element={<Ap2 />} />;
      </Route>
    </Routes>
  );
}

export default App;

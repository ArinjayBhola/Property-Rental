import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PropertyList from "./views/PropertyList";
import Booking from "./views/Booking";
import Navbar from "./Components/Navbar";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/properties"
              element={<PropertyList />}
            />
            <Route
              path="/booking"
              element={<Booking />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

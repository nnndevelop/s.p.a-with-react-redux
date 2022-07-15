import "./App.css";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import NotFound from "./containers/NotFound/NotFound";

function App() {
  return (

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="product/:productId"exact element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  
  );
}

export default App;

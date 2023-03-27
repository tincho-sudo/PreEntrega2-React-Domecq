import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

function Router() {
  return (
    <>
      <BrowserRouter>
        <div className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/products/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/products/category/:categoryId/:genId"
              element={<ItemListContainer />}
            />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            {/* sin uso por ahora */}
            <Route path="/about" />
            {/* sin uso por ahora */}
            <Route path="/contact" />
            <Route path="*" element={<h1>Error 404: Page not found</h1>} />
          </Routes>
        </div>

        {/* Footer */}
      </BrowserRouter>
    </>
  );
}

export default Router;

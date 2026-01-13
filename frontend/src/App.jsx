import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import ProductsPage from "./components/Products/GenderCollectionSelections";
import ProductDetails from "./components/Products/ProductDetails";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CheckOut from "./components/Cart/CheckOut";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

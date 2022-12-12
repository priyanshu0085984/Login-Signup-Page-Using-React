import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  );
};
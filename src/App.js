import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import TodoPage from "./pages/todo";

export default function App() {
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("access_token")) setIsEmpty(false);
  });

  return (
    <Routes>
      <Route
        path="/"
        element={isEmpty ? <SigninPage /> : <Navigate to="/todo" />}
      />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/todo"
        element={isEmpty ? <Navigate to="/" /> : <TodoPage />}
      />
    </Routes>
  );
}

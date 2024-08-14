import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import AuthLayout from "./pages/auth/AuthLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthLayout />} />
      </Routes>
    </>
    // <div className="App">
    //   <Layout />
    // </div>
  );
}

export default App;

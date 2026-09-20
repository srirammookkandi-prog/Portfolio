import { BrowserRouter, Routes, Route } from "react-router";
import WorkPage from "./Pages/WorkPage";
import LifePage from "./Pages/LifePage";
import NotFoundPage from "./Pages/NotFoundPage";
import Projects from "./section/work/Projects";
import PortfolioLayout from "./layout/PortfolioLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route
            path="/"
            element={<WorkPage />}
          />
          <Route
            path="/life"
            element={<LifePage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
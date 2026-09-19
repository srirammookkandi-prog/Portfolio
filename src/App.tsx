import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import WorkPage from "./Pages/WorkPage";
import LifePage from "./Pages/LifePage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/life" element={<LifePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
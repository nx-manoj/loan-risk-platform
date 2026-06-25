import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { HealthPage } from "./pages/HealthPage";
import { LandingPage } from "./pages/LandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PredictionPage } from "./pages/PredictionPage";

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/predict" element={<PredictionPage />} />
      <Route path="/health" element={<HealthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;

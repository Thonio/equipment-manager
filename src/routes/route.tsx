import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DetailsBuildingPage } from "../pages/DetailsBuildingPage";
import { DetailsEquipmentPage } from "../pages/DetailsEquipmentPage";

export const route = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'building/:id',
    element: <DetailsBuildingPage />
  },
  {
    path: 'equipment/:id',
    element: <DetailsEquipmentPage />
  }
])

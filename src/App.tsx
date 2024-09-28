import { Box, Tab, Tabs } from "@mui/material"
import { LayoutComponent } from "./components/LayoutComponent"
import { useState } from "react"
import { ListBuilding } from "./pages/ListBuilding"
import { ListEquipment } from "./pages/ListEquipment"

function App() {
  const [value, setValue] = useState('building')
  return (
    <LayoutComponent title="Liste des etablissement">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={value} onChange={(e, val) => setValue(val)} aria-label="basic">
          <Tab value="building" label="Batiment" />
          <Tab value="equipment" label="équipement" />
        </Tabs>
      </Box>

      {
        value === 'building' ? (
          <ListBuilding />
        ) : (
          <ListEquipment />
        )
      }
    </LayoutComponent>
  )
}

export default App

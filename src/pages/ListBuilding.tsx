import { Add, Apartment } from "@mui/icons-material"
import { ItemListComponent } from "../components/ItemListComponent"
import { BuildingType } from "../types/types"
import { Box, Button, Drawer } from "@mui/material"
import { useState } from "react"
import { FormBuildingComponent } from "../components/FormBuildingComponent"

const buildingArr: BuildingType[] = [
  {
    id: 1,
    name: 'Batiment A',
    address: 'aile A',
    description: 'Lorem Ipsum dolor sit amet'
  },
  {
    id: 2,
    name: 'Batiment B',
    address: 'aile B',
    description: 'Lorem Ipsum dolor sit amet'
  }
]

export const ListBuilding = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box sx={{ mb: 2, textAlign: "right" }}>
        <Button startIcon={<Add />} variant="outlined" onClick={() => setOpen(true)}>Ajouter un Batiment</Button>
      </Box>
      {
        buildingArr.map((item) => (
          <ItemListComponent key={item.id} onView={() => console.log('test')} onEdit={() => { }} icon={<Apartment />}>
            <>{item.name}</>
          </ItemListComponent>
        ))
      }

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <FormBuildingComponent />
      </Drawer>
    </>
  )
}

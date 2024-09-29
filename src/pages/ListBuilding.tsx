import { Add, Apartment } from "@mui/icons-material"
import { ItemListComponent } from "../components/ItemListComponent"
import { BuildingType } from "../types/types"
import { Box, Button, Drawer, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { FormBuildingComponent } from "../components/FormBuildingComponent"
import { localStorageTools } from "../tools/localStorage"

export const ListBuilding = () => {
  const [open, setOpen] = useState(false)
  const [editedId, setEditedId] = useState<number>()
  const [listBuilding, setListBuilding] = useState<BuildingType[]>([])
  const dataBuilding = localStorageTools('building').get()
  const resetState = () => {
    setOpen(false)
    setEditedId(undefined)
  }

  useEffect(() => {
    if (!dataBuilding) {
      setListBuilding([])
    } else {
      setListBuilding(JSON.parse(dataBuilding))
    }
  }, [dataBuilding])

  return (
    <>
      <Box sx={{ mb: 2, textAlign: "right" }}>
        <Button startIcon={<Add />} variant="outlined" onClick={() => setOpen(true)}>Ajouter un Batiment</Button>
      </Box>
      {
        !dataBuilding && (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>Pas de batiment encore enregistrer</Typography>
        )
      }
      {
        listBuilding.map((item) => (
          <ItemListComponent
            key={item.id}
            onView={() => console.log('test')}
            onEdit={() => {
              setEditedId(item.id)
              setOpen(true)
            }}
            icon={<Apartment />}
          >
            {item.name}
          </ItemListComponent>
        ))
      }

      <Drawer open={open} anchor="right" onClose={resetState}>
        <FormBuildingComponent currentList={listBuilding} onClose={resetState} editedId={editedId} />
      </Drawer>
    </>
  )
}

import { Add, Construction } from "@mui/icons-material"
import { ItemListComponent } from "../components/ItemListComponent"
import { EquipmentType } from "../types/types"
import { Box, Button, Drawer, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { FormEquipmentComponent } from "../components/FormEquipmentComponent"
import { localStorageTools } from "../tools/localStorage"

export const ListEquipment = () => {
  const [open, setOpen] = useState(false)
  const [listEquipment, setListEquipment] = useState<EquipmentType[]>([])
  const dataEquipment = localStorageTools('equipment').get()

  useEffect(() => {
    setListEquipment(JSON.parse(dataEquipment || ''))
  }, [dataEquipment])

  return (
    <>
      <Box sx={{ mb: 2, textAlign: "right" }}>
        <Button startIcon={<Add />} variant="outlined" onClick={() => setOpen(true)}>Ajouter un equipement</Button>
      </Box>
      {
        !dataEquipment && (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>Pas d'equipement encore enregistrer</Typography>
        )
      }
      {
        listEquipment.map((item) => (
          <ItemListComponent key={item.id} onView={() => console.log('test')} onEdit={() => { }} icon={<Construction />}>
            <>{item.name}</>
          </ItemListComponent>
        ))
      }

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <FormEquipmentComponent />
      </Drawer>
    </>
  )
}

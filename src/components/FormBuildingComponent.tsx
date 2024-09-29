import { Box, Button, FormControlLabel, TextField, Typography, Checkbox, FormGroup } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import { BuildingType, EquipmentType } from "../types/types"
import { localStorageTools } from "../tools/localStorage"

interface FormBuildingProps {
  currentList: BuildingType[]
  editedId?: number
  onClose: () => void
}

const initData: BuildingType = {
  id: 0,
  name: '',
  address: '',
  description: '',
  equimentListId: []
}

export const FormBuildingComponent = ({ currentList, editedId, onClose }: FormBuildingProps) => {
  const lastId = localStorageTools('buildingId').get() || 1
  const dataEquipment = localStorageTools('equipment').get()

  const [data, setData] = useState<BuildingType>(initData)
  const [listEquipment, setListEquipment] = useState<EquipmentType[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    setData((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }
  const handleCheck = (id: number) => {
    if (data.equimentListId?.includes(id)) {
      setData((prev) => ({
        ...prev,
        equimentListId: prev.equimentListId.filter((item) => item !== id)
      }))
    } else {
      setData((prev) => ({
        ...prev,
        equimentListId: [...prev.equimentListId, id]
      }))
    }
  }
  const handleSubmit = () => {
    if (!editedId) {
      localStorageTools('buildingId').set(Number(lastId) + 1)
      localStorageTools('building').set([...currentList, data])
    } else {
      const editedIndex = currentList.findIndex((item) => item.id === editedId)
      currentList.splice(editedIndex, 1, data)
      localStorageTools('building').set(currentList)
    }
    onClose()
  }

  useEffect(() => {
    if (!editedId) {
      setData((prev) => ({
        ...prev,
        id: Number(lastId)
      }))
    } else {
      const editedObj: BuildingType = currentList.find((item) => item.id === editedId) || initData
      setData(editedObj)
    }
  }, [])

  useEffect(() => {
    if (dataEquipment) {
      setListEquipment(JSON.parse(dataEquipment))
    }
  }, [dataEquipment])
  return (
    <Box sx={{
      minWidth: 300,
      p: 2
    }}>
      <Typography variant="h5" component='div' sx={{ mb: 3, textAlign: 'center' }}>
        {!editedId ? "Creation de batiment" : "Edition de batiment"}
      </Typography>
      <Box sx={{ mb: 1 }}>
        <TextField name="name" value={data?.name} fullWidth label="Nom de l'etablissement" onChange={handleChange} />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField name="address" value={data?.address} fullWidth label="Adresse" onChange={handleChange} />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField name="description" value={data?.description} multiline fullWidth label="Description" onChange={handleChange} />
      </Box>
      <Typography variant="body1" sx={{ my: 2, fontWeight: 500 }}>Liste des equipements associes</Typography>
      <FormGroup sx={{ mb: 3 }}>
        {
          listEquipment.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              onChange={() => handleCheck(item.id)}
              control={<Checkbox />}
              label={item.name}
              checked={data.equimentListId.includes(item.id)}
            />
          ))
        }
      </FormGroup>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="outlined" color="error" sx={{ mr: 1 }} onClick={onClose}>Annuler</Button>
        <Button variant="outlined" onClick={handleSubmit}>Valider</Button>
      </Box>
    </Box>
  )
}

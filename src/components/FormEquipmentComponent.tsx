import { Box, Button, TextField, Typography } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import { EquipmentType } from "../types/types"
import { localStorageTools } from "../tools/localStorage"

interface FormEquipmentProps {
  currentList: EquipmentType[]
  editedId?: number
  onClose: () => void
}

const initData: EquipmentType = {
  id: 0,
  name: '',
  type: '',
  description: '',
}

export const FormEquipmentComponent = ({ currentList, editedId, onClose }: FormEquipmentProps) => {
  const [data, setData] = useState<EquipmentType>(initData)
  const lastId = localStorageTools('equipmentId').get() || 1
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    setData((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }
  const handleSubmit = () => {
    if (!editedId) {
      localStorageTools('equipmentId').set(Number(lastId) + 1)
      localStorageTools('equipment').set([...currentList, data])
    } else {
      const editedIndex = currentList.findIndex((item) => item.id === editedId)
      currentList.splice(editedIndex, 1, data)
      localStorageTools('equipment').set(currentList)
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
      const editedObj: EquipmentType = currentList.find((item) => item.id === editedId) || initData
      setData(editedObj)
    }
  }, [])

  return (
    <Box sx={{
      minWidth: 300,
      p: 2
    }}>
      <Typography variant="h5" component='div' sx={{ mb: 3, textAlign: 'center' }}>
        {!editedId ? "Creation d'equipement" : "Edition d'equipement"}
      </Typography>
      <Box sx={{ mb: 1 }}>
        <TextField name="name" value={data?.name} fullWidth label="Nom de l'equipement" onChange={handleChange} />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField name="type" value={data?.type} fullWidth label="Type d'equipement" onChange={handleChange} />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField name="description" value={data?.description} multiline fullWidth label="Description" onChange={handleChange} />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="outlined" color="error" sx={{ mr: 1 }} onClick={onClose}>Annuler</Button>
        <Button variant="outlined" onClick={handleSubmit}>Valider</Button>
      </Box>
    </Box>
  )
}

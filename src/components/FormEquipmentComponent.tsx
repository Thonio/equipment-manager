import { Box, Button, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { EquipmentType } from "../types/types"

const initData: EquipmentType = {
  id: 0,
  name: '',
  type: '',
  description: '',
}

export const FormEquipmentComponent = () => {
  const [data, setData] = useState<EquipmentType>(initData)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    setData((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }
  const handleSubmit = () => {
    console.log(data)
  }
  return (
    <Box sx={{
      minWidth: 300,
      p: 2
    }}>
      <Typography variant="h5" component='div' sx={{ mb: 3, textAlign: 'center' }}>
        Creation d'equipement
      </Typography>
      <Box sx={{ mb: 1 }}>
        <TextField name="name" value={data?.name} fullWidth label="Nom de l'etablissement" onChange={handleChange} />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField name="type" value={data?.type} fullWidth label="Adresse" onChange={handleChange} />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField name="description" value={data?.description} multiline fullWidth label="Description" onChange={handleChange} />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="outlined" color="error" sx={{ mr: 1 }}>Annuler</Button>
        <Button variant="outlined" onClick={handleSubmit}>Valider</Button>
      </Box>
    </Box>
  )
}

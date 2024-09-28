import { Box, Button, FormControlLabel, TextField, Typography, Checkbox, FormGroup } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { BuildingType } from "../types/types"

const initData: BuildingType = {
  id: 0,
  name: '',
  address: '',
  description: '',
  equimentListId: []
}

export const FormBuildingComponent = () => {
  const [data, setData] = useState<BuildingType>(initData)
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
        Creation de batiments
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
        <FormControlLabel control={<Checkbox />} label="Equipement A" />
        <FormControlLabel control={<Checkbox />} label="Equipement B" />
        <FormControlLabel control={<Checkbox />} label="Equipement C" />
      </FormGroup>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="outlined" color="error" sx={{ mr: 1 }}>Annuler</Button>
        <Button variant="outlined" onClick={handleSubmit}>Valider</Button>
      </Box>
    </Box>
  )
}

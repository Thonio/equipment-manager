import { Avatar, Box, Typography } from "@mui/material"
import { LayoutComponent } from "../components/LayoutComponent"
import { Apartment } from "@mui/icons-material"
import { deepOrange } from "@mui/material/colors"

export const DetailsEquipmentPage = () => {
  return (
    <LayoutComponent title="Details batiment">
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Avatar sx={{ width: 100, height: 100, bgcolor: deepOrange[500] }}>
          <Apartment sx={{ fontSize: 40 }} />
        </Avatar>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Nom du batiment:</Typography>
        <Typography variant="body1">hello batiment</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Adresse du batiment:</Typography>
        <Typography variant="body1">hello batiment</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Description:</Typography>
        <Typography variant="body1">hello batiment</Typography>
      </Box>
      <Box>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Liste des equipements associes:</Typography>
      </Box>
    </LayoutComponent>
  )
}

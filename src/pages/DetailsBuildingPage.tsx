import { Avatar, Box, Button, Paper, Typography } from "@mui/material"
import { LayoutComponent } from "../components/LayoutComponent"
import { Apartment, ArrowBack } from "@mui/icons-material"
import { deepOrange } from "@mui/material/colors"
import { localStorageTools } from "../tools/localStorage"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { BuildingType, EquipmentType } from "../types/types"

export const DetailsBuildingPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState<BuildingType>()
  const [displayEquipment, setDisplayEquipment] = useState<EquipmentType[]>()
  const fetchList = localStorageTools('building').get()
  const fetchListEquipment = localStorageTools('equipment').get()

  useEffect(() => {
    if (fetchList) {
      const list: BuildingType[] = JSON.parse(fetchList)
      setDetails(list.find((item) => item.id === Number(id)))
    }
  }, [fetchList])

  useEffect(() => {
    if (fetchListEquipment) {
      const list: EquipmentType[] = JSON.parse(fetchListEquipment)
      setDisplayEquipment(list.filter((item) => details?.equimentListId.includes(item.id)))
    }
  }, [fetchListEquipment, details])

  return (
    <LayoutComponent title="Details bâtiment">
      <Box>
        <Button onClick={() => navigate('/')} startIcon={<ArrowBack />}>Retour</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Avatar sx={{ width: 100, height: 100, bgcolor: deepOrange[500] }}>
          <Apartment sx={{ fontSize: 40 }} />
        </Avatar>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Nom du bâtiment:</Typography>
        <Typography variant="body1">{details?.name}</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Adresse du bâtiment:</Typography>
        <Typography variant="body1">{details?.address}</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Description:</Typography>
        <Typography variant="body1">{details?.description}</Typography>
      </Box>
      <Box>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500, mb: 2 }}>Liste des equipements associes:</Typography>
        {
          displayEquipment?.map((item) => (
            <Paper key={item.id} elevation={1} sx={{ p: 2, mb: 2 }}>{item.name}</Paper>
          ))
        }
      </Box>
    </LayoutComponent>
  )
}

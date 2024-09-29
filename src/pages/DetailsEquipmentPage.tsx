import { Avatar, Box, Button, Typography } from "@mui/material"
import { LayoutComponent } from "../components/LayoutComponent"
import { ArrowBack, Construction } from "@mui/icons-material"
import { deepOrange } from "@mui/material/colors"
import { EquipmentType } from "../types/types"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { localStorageTools } from "../tools/localStorage"

export const DetailsEquipmentPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState<EquipmentType>()
  const fetchList = localStorageTools('equipment').get()

  useEffect(() => {
    if (fetchList) {
      const list: EquipmentType[] = JSON.parse(fetchList)
      setDetails(list.find((item) => item.id === Number(id)))
    }
  }, [fetchList])

  return (
    <LayoutComponent title="Details équipement">
      <Box>
        <Button onClick={() => navigate('/')} startIcon={<ArrowBack />}>Retour</Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <Avatar sx={{ width: 100, height: 100, bgcolor: deepOrange[500] }}>
          <Construction sx={{ fontSize: 40 }} />
        </Avatar>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Nom de l'équipement:</Typography>
        <Typography variant="body1">{details?.name}</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Type de l'équipement:</Typography>
        <Typography variant="body1">{details?.type}</Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component='div' sx={{ fontWeight: 500 }}>Description:</Typography>
        <Typography variant="body1">{details?.description}</Typography>
      </Box>
    </LayoutComponent>
  )
}

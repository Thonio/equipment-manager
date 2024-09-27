import { Edit, Visibility } from "@mui/icons-material"
import { Avatar, Box, IconButton, Paper } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { ReactNode } from "react"

interface ItemListProps {
  icon: ReactNode,
  children: ReactNode,
  onView: () => void,
  onEdit: () => void
}

export const ItemListComponent = ({ icon, children, onView, onEdit }: ItemListProps) => {
  return (
    <Paper elevation={1} sx={{
      p: 3,
      mb: 3
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 3 }}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {icon}
            </Avatar>
          </Box>
          <Box>
            {children}
          </Box>
        </Box>
        <Box>
          <IconButton onClick={onView} size="large">
            <Visibility />
          </IconButton>
          <IconButton onClick={onEdit} size="large">
            <Edit />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  )
}

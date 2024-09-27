import { Box, Container, Typography } from "@mui/material"
import { ReactNode } from "react"

interface LayoutComponentProps {
  title: string,
  children: ReactNode
}

export const LayoutComponent = ({ title, children }: LayoutComponentProps) => {
  return (
    <Container>
      <Typography variant="h3" component="div" sx={{
        textAlign: 'center',
        my: 4
      }}>{title}</Typography>
      <Box>{children}</Box>
    </Container>
  )
}

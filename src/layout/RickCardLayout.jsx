import { Grid } from "@mui/material"

export const RickCardLayout = ({ children }) => {
  return (
    <Grid container 
        className="spaceImage"
        sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', 
        padding: 5 }}
        >
        { children }
    </Grid>
  )
}

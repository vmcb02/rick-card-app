import { Grid } from "@mui/material"
import { CardItem } from "./CardItem"

export const CardCase = ({ data, onDecrement, onIncrement }) => {
  return (
    <Grid container sx={{ height: '400px', width: '400px', backgroundColor: 'rgb(195, 198, 201)', 
    borderRadius: 5, opacity: 0.9, border: '10px solid rgb(49, 24, 24)', outline: '2px solid white' }}>
    <CardItem {...data } onDecrement={ onDecrement } onIncrement={ onIncrement }/>
    </Grid>
  )
}

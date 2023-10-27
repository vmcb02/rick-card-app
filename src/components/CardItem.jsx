
import { Circle, Female, Male } from "@mui/icons-material"
import { Button, Grid, Icon, Typography } from "@mui/material"

export const CardItem = ({image, name, gender, species, status, location, id, onDecrement, onIncrement }) => {
  return (
   <Grid container sx={{ display: 'block', width: '400px', heigth: '400px', margin: 2 }}>
    <Grid item sx={{ display: 'flex', width: '350px', height: '120px', justifyContent: 'space-between' }}>
        <Typography variant="img" component="img" sx={{ width: '118px', height: '118px', border: '1px solid black'}} 
        src={image}></Typography>
        <Typography variant="h6" component="h6" sx={{ height: '30px', border: '1px solid black', borderRadius: 3, padding: 1 }}>Personaje: { id }</Typography>
    </Grid>
    <Grid item sx={{ width: '200px', minHeight: '190px', mt: 1 }}>
        <Typography variant="p" component="p" mb={1} ><Typography variant="b" component="b">Nombre:</Typography> { name }</Typography>
        <Grid item sx={{ display: 'flex'}}>
        <Typography variant="p" component="p" mb={1} ><Typography variant="b" component="b">Género:</Typography> { gender }</Typography>
        { (gender !== 'Male') ?
         <Icon><Female /></Icon>
         :
         <Icon><Male /></Icon>
        }
        </Grid>
        <Typography variant="p" component="p" mb={1} ><Typography variant="b" component="b">Especie:</Typography> { species }</Typography>
        <Grid item sx={{ display: 'flex' }}>
        <Typography variant="p" component="p" mb={1} ><Typography variant="b" component="b">Estado:</Typography> { status } </Typography>
        { 
         (status === 'unknown') ? ''
         :
        <Icon><Circle sx={{ fontSize: 20, color: `${(status === 'Alive') ? 'green' : 'red'}` }} /></Icon>
          }
        </Grid>
        <Typography variant="p" component="p" mb={1} ><Typography variant="b" component="b">Ubicación:</Typography> { location?.name }</Typography>
        
    </Grid>
    <Grid item sx={{ display: 'flex', width: '300px', justifyContent: `${(id <= 1) ? 'end' : 'space-between'}`, ml: '20px',}} >
        { (id <= 1) ? ''
          :
          <Button onClick={ onDecrement } sx={{ border: '1px solid black', borderRadius: 2, ':hover': { backgroundColor: 'grey', color: 'white', border: 'none'}}}>Anterior</Button>
        }
          <Button onClick={ onIncrement } sx={{ border: '1px solid black', borderRadius: 2, ':hover': { backgroundColor: 'grey', color: 'white', border: 'none'}}}>Siguiente</Button>
        </Grid>
   </Grid>
  )
}

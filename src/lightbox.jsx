import './App.css'
import image20 from './assets/20.jpg'
import { Paper } from '@mui/material'
function Artgallery(){

    return(
        <div>
<h1 style={{color:'black'}}>ART GALLREY </h1>
<h2 style={{color:'black'}}>punk artwork </h2>
<h3  style={{color:'black'}}>ramat-gan israel</h3>
<Paper>
   <img src={image20} width={'250px'}/> 
</Paper>
        </div>
    )
}
export default Artgallery
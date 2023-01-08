import './App.css'
import { Paper } from '@mui/material'






const Card2 = (props) => {
  return (

    <div>


      <Paper elevation={4} className='card1'>
        <p style={{ fontSize: '16px' }}>PHOTO </p>
        <img className='img' height={'150vw'} width={'100vh'} src={props.image} />

        <p style={{ marginBlock: '10px', fontSize: '11px' }}>no.001......100$</p>

      </Paper>
    </div>
  )
}
export default Card2
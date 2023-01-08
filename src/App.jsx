import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidemenu from './sidemenu'
import Artgallery from './lightbox'
import Card2 from './cardx'
import Gallery from './Gallery'
import Pics from './photos'


function App() {
    return (
        <div className='icon'>
            <h1 className='text-3xl' >art gallery</h1>
            <Sidemenu />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Artgallery />} />
                    <Route path='/vids' element={<Gallery />} />
                    <Route path='/lightbox' element={<Artgallery />} />
                    <Route path='/links' element={<Pics />} />



                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App
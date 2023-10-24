
import Button from "../components/commons/Button"
import Carousel from "../components/home/CarouselSlider"
import {Link} from "react-router-dom"
export default function Home(){
    return <>
             <Carousel/>
             <Link to="/registro">
                <Button className="btn-primary mt-5">QUIERO UN PRESTAMO</Button>
             </Link>

             <Link to="/login">
             <Button className="btn-link mt-3 w-100">Ya tengo un prestamo</Button>
             </Link>
    </>
}
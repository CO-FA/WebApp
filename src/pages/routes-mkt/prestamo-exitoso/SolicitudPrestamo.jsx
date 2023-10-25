import Encabezado from "components/commons/Encabezado";
import { useSolicitudAtom } from "../../atoms/Atoms";

export function SolicitudPrestamo () {
    const {pdfSolicitud} = useSolicitudAtom();

    return(
        <div>
            <Encabezado/>
            <div  style={{marginTop: "40%",textAlign: "center"}}>
                <h3>¡Descargar tu contrato! </h3>
                <br></br>
                <a href={pdfSolicitud} target="_blank" rel="noopener noreferrer">
                    Ir al Contrato
                </a>
            </div>
        </div>
    )
}
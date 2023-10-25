import Encabezado from "components/commons/Encabezado";
import React, { useEffect, useState } from 'react';
import { useDetallesAtom } from "../../atoms/Atoms";

function LoanDetails({ prestamo }) {
    console.log(prestamo)
  return (
    <div>
      <h2>Detalles del Préstamo</h2>
      <ul>
        {Object.entries(prestamo).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
    
function CuotaDetail({ cuota }) {
  return (
    <div>
      <h4>Detalle de Cuota</h4>
      <ul>
        {Object.entries(cuota).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
  
export function DetallesPrestamo() {
  const { detallesPrestamo } = useDetallesAtom();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (detallesPrestamo.Prestamo && detallesPrestamo.Prestamo.length > 0) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Cargando datos del préstamo...</div>;
  }

  return (
    <div>
      <Encabezado />
        <div style={{ overflowY: 'auto', maxHeight: '80vh' }}>
            <LoanDetails prestamo={detallesPrestamo.Prestamo[0]} />
            <h2>Detalles de las Cuotas</h2>
            {detallesPrestamo.Cuotario.map((cuota, index) => (
            <CuotaDetail key={index} cuota={cuota} />
            ))}
            <h2>Detalles de Intereses</h2>
            <ul>
            {detallesPrestamo.Intereses.map((interes, index) => (
                <li key={index}>
                <strong>{interes.Descripcion}:</strong> {interes.Importe}
                </li>
            ))}
            </ul>
        </div>  
    </div>
  );
}

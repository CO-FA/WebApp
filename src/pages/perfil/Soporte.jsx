import React from "react";
import Encabezado from "../../components/commons/Encabezado";
import NavigationHeader from "../../components/commons/NavigationHeader";
import SoporteOpciones from "../../components/commons/SoporteOpciones";
import {
  legalesIcon,
  reclamosIcon,
  whatsappIcon,
  preguntasIcon,
} from "../../utils/iconsSvg";

export default function Soporte() {
  return (
    <>
      <Encabezado
        withoutBackButton
        title={<NavigationHeader title="Ayuda" />}
      />
      <section>
        <div className="row">
          <div className="col-6">
            <SoporteOpciones text="Soporte" icon={whatsappIcon} />
          </div>
          <div className="col-6">
            <SoporteOpciones text="Preguntas" icon={preguntasIcon} />
          </div>
          <div className="col-6">
            <SoporteOpciones text="Reclamos" icon={reclamosIcon} />
          </div>
          <div className="col-6">
            <SoporteOpciones text="Legales" icon={legalesIcon} />
          </div>
        </div>
      </section>
    </>
  );
}

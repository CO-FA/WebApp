import React from "react";
import HeaderNavigation from "../components/commons/HeaderNavigation";
import NotificationCard from "../components/commons/NotificationCard";

export default function Notificaciones() {
  const HeaderNavitationTitle = () => (
    <div className="col-8">
      <h4 className="text-center text-white mt-3">Ronaldo de Assis Moreira</h4>
      <p className="small text-center text-white mt-2">MASC | 24.235.647 </p>
    </div>
  );

  return (
    <>
      <HeaderNavigation centerElement={<HeaderNavitationTitle />} />
      <div className="row">
        <div className="col-12 mb-3">
          <NotificationCard
            permanent
            textRow1="Te recordamos que las cuotas vencen los días 7 de cada mes."
            textRow2="Si querés conocer los medios de pago hacé "
            textLink="/home"
          />
          <NotificationCard textRow1="Completá tus datos personales para poder obtener más rápido tu préstamo." />
          <NotificationCard
            permanent
            textRow1="Pasate por la sección MIS PROMOS para poder obtener beneficios para el seguro de tu auto, tu casa, tu moto y facilidades para tener su seguro de alquiler. También tenemos combos de seguros ........"
          />
        </div>
      </div>
    </>
  );
}

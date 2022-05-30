import React from 'react'
import Encabezado from 'components/commons/Encabezado'


import RegistroSetps from "../components/registro/RegistroSteps";
import { STEPS } from "../components/registro/constantsSteps";
import { LoaderContext } from "../components/loader/LoaderContext";


function RegistroStep6() {
  return (
    <div>
      <Encabezado title={<RegistroSetps current={STEPS.STEP_3_EMAIL} />}/>
    </div>
  )
}

export default RegistroStep6


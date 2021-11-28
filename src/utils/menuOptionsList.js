import MenuOption from "../components/commons/MenuOption";
import {
  estadoCuentaIcon,
  modificarDatosIcon,
  misPromocionesIcon,
  soporteIcon,
} from "./iconsSvg";
export const menuOptions = {
  estadoCuenta: (
    <MenuOption href="#" text="Estado de mi cuenta" icon={estadoCuentaIcon} />
  ),
  modificarDatos: (
    <MenuOption href="#" text="Modificar mis datos" icon={modificarDatosIcon} />
  ),
  promociones: (
    <MenuOption href="#" text="Mis promociones" icon={misPromocionesIcon} />
  ),
  soporte: (
    <MenuOption
      href="#"
      text="Ayuda | Soporte | Reclamos | Legales"
      icon={soporteIcon}
    />
  ),
};

import MenuOption from "../components/commons/MenuOption";
import {
  estadoCuentaIcon,
  modificarDatosIcon,
  misPromocionesIcon,
  soporteIcon,
  celularIcon,
  emailIcon,
  passwordIcon,
  cbuIcon,
  domicilioIcon,
  tarjetaIcon,
  seguroIcon
} from "./iconsSvg";
export const menuOptions = {
  estadoCuenta: (
    <MenuOption href="/estadoCuenta" text="Estado de mi cuenta" icon={estadoCuentaIcon} />
  ),
  modificarDatos: (
    <MenuOption
      href="/informacionPersonal"
      text="Modificar mis datos"
      icon={modificarDatosIcon}
    />
  ),
  promociones: (
    <MenuOption href="#" text="Mis promociones" icon={misPromocionesIcon} />
  ),
  pagoRecarga: (
    <MenuOption
      href="#"
      text="Pago y Recarga"
      icon={soporteIcon}
    />
  ),
  soporte: (
    <MenuOption
      href="/soporte"
      text="Ayuda | Soporte | Reclamos | Legales"
      icon={soporteIcon}
    />
  ),
  cambiarMiCelular: (
    <MenuOption
      href="#"
      text="Cambiar mi Celular"
      icon={celularIcon}
    />
  ),
  cambiarMiEmail: (
    <MenuOption
      href="#"
      text="Cambiar mi Email"
      icon={emailIcon}
    />
  ),
  cambiarMiContrasenia: (
    <MenuOption
      href="#"
      text="Cambiar mi Contraseña"
      icon={passwordIcon}
    />
  ),
  cambiarMiDomicilio: (
    <MenuOption
      href="#"
      text="Cambiar mi Domicilio"
      icon={domicilioIcon}
    />
  ),
  cargarMiCBU: (
    <MenuOption
      href="#"
      text="Cargar mi CBU/CVU"
      icon={cbuIcon}
    />
  ),
  cargarMiTarjeta: (
    <MenuOption
      href="#"
      text="Cargar mi Tarjeta"
      icon={tarjetaIcon}
    />
  ),
  estadoPrestamo: (
    <MenuOption
      href="#"
      text="Estado de mi préstamo"
      icon={soporteIcon}
    />
  ),
  estadoSeguro: (
    <MenuOption
      href="#"
      text="Estado de mi seguro"
      icon={seguroIcon}
    />
  ),
};

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
  seguroIcon,
  misPrestamos,
  estadoFinanciero,
  proximosVenc,
  celuIcon,
  alquilerIcon,
  casaIcon,
  motoIcon,
  autoIcon,
} from "./iconsSvg";
export const menuOptions = {
  estadoCuenta: (
    <MenuOption
      href="/estadoCuenta"
      text="Estado de mi cuenta"
      icon={estadoCuentaIcon}
    />
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
  pagoRecarga: <MenuOption href="#" text="Pago y Recarga" icon={soporteIcon} />,
  soporte: (
    <MenuOption
      href="/soporte"
      text="Ayuda | Soporte | Reclamos | Legales"
      icon={soporteIcon}
    />
  ),
  cambiarMiCelular: (
    <MenuOption href="#" text="Cambiar mi Celular" icon={celularIcon} />
  ),
  cambiarMiEmail: (
    <MenuOption href="#" text="Cambiar mi Email" icon={emailIcon} />
  ),
  cambiarMiContrasenia: (
    <MenuOption href="#" text="Cambiar mi Contraseña" icon={passwordIcon} />
  ),
  cambiarMiDomicilio: (
    <MenuOption href="#" text="Cambiar mi Domicilio" icon={domicilioIcon} />
  ),
  cargarMiCBU: <MenuOption href="#" text="Cargar mi CBU/CVU" icon={cbuIcon} />,
  cargarMiTarjeta: (
    <MenuOption href="#" text="Cargar mi Tarjeta" icon={tarjetaIcon} />
  ),
  estadoPrestamo: (
    <MenuOption href="#" text="Estado de mi préstamo" icon={soporteIcon} />
  ),
  estadoSeguro: (
    <MenuOption href="#" text="Estado de mi seguro" icon={seguroIcon} />
  ),
};

export const optionsToShow2 = [
  {
    menu: "Cambiar mis datos personales",
    icon: modificarDatosIcon,
    submenu: [
      {
        menu: "Cambiar mi celular",
        submenu: [],
        href: "/perfilModificarCelular",
        icon: celularIcon,
      },
      {
        menu: "Cambiar mi email",
        submenu: [],
        href: "/perfilModificarEmail",
        icon: emailIcon,
      },
      {
        menu: "Cambiar mi contraseña",
        submenu: [],
        href: "/perfilModificarPass",
        icon: passwordIcon,
      },
      {
        menu: "Cambiar mi domicilio",
        submenu: [],
        href: "/perfilModificarDireccion",
        icon: domicilioIcon,
      },
    ],
  },
  {
    menu: "Ver mi estado financiero",
    icon: estadoFinanciero,
    submenu: [
      { menu: "Mis préstamos", submenu: [], icon: misPrestamos, href: "/" },
      {
        menu: "Proximos vencimientos",
        submenu: [],
        icon: proximosVenc,
        href: "/",
      },
      {
        menu: "Cargar mi CBU/CVU",
        submenu: [],
        icon: cbuIcon,
        href: "/cargarmiCbu",
      },
      { menu: "Cargar mi Tarjeta", submenu: [], icon: tarjetaIcon, href: "/" },
    ],
  },

  {
    menu: "Ver mis seguros",
    icon: seguroIcon,
    submenu: [
      { menu: "Seguro de Auto", submenu: [], icon: autoIcon, href: "/" },
      { menu: "Seguro de Moto", submenu: [], icon: motoIcon, href: "/" },
      { menu: "Seguro de Casa", submenu: [], icon: casaIcon, href: "/" },
      {
        menu: "Seguro de Alquiler",
        submenu: [],
        icon: alquilerIcon,
        href: "/",
      },
      { menu: "Seguro de Celular", submenu: [], icon: celuIcon, href: "/" },
    ],
  },
];

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { menuOptions } from "utils/menuOptionsList";
import ItemMenu from "./ItemMenu";


const iconCelular = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
  <path d="M3.42857 24C2.51958 23.999 1.64812 23.6539 1.00537 23.0403C0.362619 22.4268 0.00105864 21.5949 0 20.7273V3.27273C0.00105864 2.40506 0.362619 1.57321 1.00537 0.959672C1.64812 0.346136 2.51958 0.00101052 3.42857 0H12.5714C13.4804 0.00101052 14.3519 0.346136 14.9946 0.959672C15.6374 1.57321 15.9989 2.40506 16 3.27273V20.7273C15.9989 21.5949 15.6374 22.4268 14.9946 23.0403C14.3519 23.6539 13.4804 23.999 12.5714 24H3.42857ZM1.14286 3.27273V20.7273C1.14286 21.3059 1.38367 21.8609 1.81233 22.2701C2.24098 22.6792 2.82236 22.9091 3.42857 22.9091H12.5714C13.1776 22.9091 13.759 22.6792 14.1877 22.2701C14.6163 21.8609 14.8571 21.3059 14.8571 20.7273V3.27273C14.8571 2.69407 14.6163 2.13912 14.1877 1.72995C13.759 1.32078 13.1776 1.09091 12.5714 1.09091H3.42857C2.82236 1.09091 2.24098 1.32078 1.81233 1.72995C1.38367 2.13912 1.14286 2.69407 1.14286 3.27273ZM6.85714 20.7273C6.85714 20.5115 6.92417 20.3006 7.04975 20.1212C7.17533 19.9418 7.35382 19.802 7.56265 19.7194C7.77148 19.6368 8.00127 19.6152 8.22296 19.6573C8.44465 19.6994 8.64829 19.8033 8.80812 19.9559C8.96795 20.1084 9.0768 20.3028 9.12089 20.5145C9.16499 20.7261 9.14237 20.9454 9.05587 21.1448C8.96937 21.3441 8.82288 21.5145 8.63494 21.6343C8.447 21.7542 8.22604 21.8182 8 21.8182C7.6969 21.8182 7.4062 21.7032 7.19188 21.4987C6.97755 21.2941 6.85714 21.0166 6.85714 20.7273ZM6.28571 3.27273C6.13416 3.27273 5.98882 3.21525 5.88165 3.11296C5.77449 3.01067 5.71429 2.87194 5.71429 2.72727C5.71429 2.58261 5.77449 2.44388 5.88165 2.34159C5.98882 2.23929 6.13416 2.18182 6.28571 2.18182H9.71429C9.86584 2.18182 10.0112 2.23929 10.1183 2.34159C10.2255 2.44388 10.2857 2.58261 10.2857 2.72727C10.2857 2.87194 10.2255 3.01067 10.1183 3.11296C10.0112 3.21525 9.86584 3.27273 9.71429 3.27273H6.28571Z" fill="#353A40"/>
  </svg>
}


export default function SimpleAccordion() {
  const optionsToShow = [
    "Cambiar mis datos personales",
    "Ver mi estado financiero",
    "Ver mis seguros",
  ];

  const optionsToShow2 = [
    {
      menu: "Cambiar mis datos personales",
      submenu: [
        { menu: "Modificar Mi Celular", submenu: [] ,},
        { menu: "Modificar Mi DNI", submenu: [] },
        { menu: "Modificar Mi DOMICILIO", submenu: [] },
      ],
    },
    {
      menu: "Ver mi estado financiero",
      submenu: [
        { menu: "Modificar Mi Celular", submenu: [] },
        { menu: "Modificar Mi DNI", submenu: [] },
        { menu: "Modificar Mi DOMICILIO", submenu: [] },
      ],
    },

    {
      menu: "Ver mis seguros",
      submenu: [
        { menu: "Modificar Mi Celular", submenu: [] },
        { menu: "Modificar Mi DNI", submenu: [] },
        { menu: "Modificar Mi DOMICILIO", submenu: [] },
      ],
    },
  ];

  return (
    <div>
      {optionsToShow2.map((opcion) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{opcion.menu}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {opcion.submenu.map((opcion2) => {
                  return (
                    <ItemMenu text={opcion2.menu}/>
                  );
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { optionsToShow2 } from "utils/menuOptionsList";
import { menuOptions } from "utils/menuOptionsList";

import ItemMenu from "./ItemMenu";

export default function Menu() {
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
              <Typography>{opcion.icon} {opcion.menu} </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {opcion.submenu.map((opcion2) => {
                  return <ItemMenu text={opcion2.menu} href={opcion2.href} icon={opcion2.icon}/>;
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

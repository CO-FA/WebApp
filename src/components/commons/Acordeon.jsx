import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { menuOptions } from "utils/menuOptionsList";

export default function SimpleAccordion() {
  const optionsToShow = [
    "estadoCuenta",
    "modificarDatos",
    "promociones",
    "pagoRecarga",
    "soporte",
  ];

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div className="accordion-container">
              {optionsToShow.map((option) => {
              return menuOptions[option];
            })}
            </div>   
          <Typography>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
   
    </div>
   
  );
}

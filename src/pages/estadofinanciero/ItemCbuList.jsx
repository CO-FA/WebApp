import { ReactComponent as Tachito } from "assets/images/tachito.svg";
import Button from "components/commons/Button";

export const ItemCbuList = ({ cbu, borrarItem }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <p>CBU: {cbu.cbu}</p>
          <p>{cbu.banco}</p>
        </div>
        <div className="align-self-center">
          <Button
            onClick={() => {
              if (borrarItem) borrarItem(cbu);
            }}
          >
            <Tachito />
          </Button>
        </div>
      </li>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function PinEmailScreen() {
  const [showMessage, setShowMessage] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);

      history.push("/onboarding/validar-pin-email");
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [history]);

  return (
    <div className="bg-gradient d-flex justify-content-center align-items-center" 
      style={{
        width: "100vw !important",
        height: "100vh",
        padding: "40px",
        marginLeft: "-15px",
        marginRight: "-15px",
      }} >
        <div className="col-12 text-center">
          {showMessage && <h3>Te va a llegar un mail...</h3>}
        </div>
    </div>
  );
}

export default PinEmailScreen;
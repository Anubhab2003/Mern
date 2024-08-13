import React, { useState } from 'react';

function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    props.alert && showAlert &&
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
        
      </div>
    
  );
}

export default Alert;

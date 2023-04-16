import React from "react";
import Button from "./Button";

import { ReactNode, useState } from "react";

interface Props{
    children: ReactNode;
    onClose: () => void;
}

function ShowAlert({children, onClose}: Props) {
  return (
    <div className={"alert alert-warning alert-dismissible fade show"} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick = {onClose}
      ></button>
    </div>
  );
}

export default ShowAlert;

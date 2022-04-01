import { Button } from "@mui/material";
import React from "react";
import SupplierCard from "../../SupplierCard/SupplierCard";
import RouteChange from "../../RouteChange/RouteChange";
import "./ListSuppliers.css";

const ListSuppliers = () => {
  return (
    <div className="List-Suppliers_Body">
      <h2 className="List-Suppliers_Title">SUPPLIERS</h2>
      <div className="List-Suppliers_Card-Body">

      <SupplierCard/>
      </div>
      <div className="List-Suppliers_div-button">
      <Button className="List-Suppliers_Button" variant="contained" onClick={ RouteChange("/supplier_detail")}>
        SUPPLIER +
      </Button>
      </div>
    </div>
  );
};

export default ListSuppliers;

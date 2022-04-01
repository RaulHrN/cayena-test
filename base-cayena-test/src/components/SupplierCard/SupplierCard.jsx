import { Button } from "@mui/material";
import axios from "axios";
import "./SupplierCard.css";
import React, { useState, useEffect } from "react";
import RouteChange from "../RouteChange/RouteChange";

const SupplierCard = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/suppliers").then((res) => {
      const suppliersData = res.data;
      setSuppliers(suppliersData);
    });
  });

  return (
    <div className="Supplier-Card">
      {suppliers.map((supplier) => (
        <section key={supplier.id} className="Supplier-Card_body">
          <div className="Supplier-Card_Info">
            <h3 className="Supplier-Card_Name">{supplier.name}</h3>
            <p className="Supplier-Card_Owner-Name">{supplier.ownerName}</p>
            <p>{supplier.cnpj}</p>
            <p>{supplier.phoneNumber}</p>
          </div>
          <div className="Supplier-Card_Buttons-Body">
          <Button
            variant="contained"
            className="Supplier-Card_button"
            onClick={ RouteChange("/supplier_detail")}
          >
            Edit
          </Button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SupplierCard;

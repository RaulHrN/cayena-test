import React, { useEffect} from "react";
import { Button } from "@mui/material";
import RouteChange from "../../RouteChange/RouteChange";
import "./SupplierDetail.css";
import axios from "axios";

const SupplierDetail = () => {

  return (
    <section className="Detail_Body">
      <div className="Detail_Body-Header">
        <h1 className="Detail_Title">SUPPLIER'S DETAILS</h1>
        <Button
          variant="contained"
          className="Detail_Button"
        >
          SUBMIT
        </Button>
      </div>

      <section className="Detail-Info_Body">
        <form className="Detail_Form-Body">
          <h2>COMPANY'S DETAILS</h2>
          <div className="Detail_Form-Input-Body">
            <div className="Detail_Form-Input">
              <p>SUPPLIER'S NAME</p>
              <input type="text" placeholder="SUPPLIER A" />
            </div>
            <div className="Detail_Form-Input">
              <p>CNPJ</p>
              <input type="text" placeholder="99.999.999/0009-99" />
            </div>
            <div className="Detail_Form-Input">
              <p>PHONE NUMBER</p>
              <input type="text" placeholder="(99) 9 9999 - 9999" />
            </div>
          </div>
        </form>

        <form className="Detail_Form-Body">
          <h2>OWNER'S DETAILS</h2>
          <div className="Detail_Form-Input-Body">
            <div className="Detail_Form-Input">
              <p>OWNER'S NAME</p>
              <input type="text" placeholder="NAME" />
            </div>
            <div className="Detail_Form-Input ">
              <p>OWNER'S EMAIL</p>
              <input type="email" placeholder="@MAIL.COM" />
            </div>
            <div className="Detail_Form-Input">
              <p>OWNER'S PHONE NUMBER</p>
              <input type="text" placeholder="(99) 9 9999 - 9999" />
            </div>
          </div>
        </form>

        <form className=" Detail_Form-Address-Body">
          <h2>ADDRESS DETAILS</h2>
          <div className="Detail_Form-Adress-Input-Body">
            <section>
              <div className="Detail_Form-Input Detail_Form-Input-Adress">
                <p>ADRESS</p>
                <input type="text" />
              </div>
              <div className="Detail_Form-Input Input-Adress">
                <p>NUMBER</p>
                <input type="text" />
              </div>
              <div className="Detail_Form-Input Input-Adress">
                <p>COMPLEMENT</p>
                <input type="text" />
              </div>
            </section>
            <section>
              <div className="Detail_Form-Input Input-Adress">
                <p>NEIGHBORHOOD</p>
                <input type="text" />
              </div>
              <div className="Detail_Form-Input Input-Adress">
                <p>CITY</p>
                <input type="text" />
              </div>
              <div className="Detail_Form-Input Input-Adress">
                <p>STATE</p>
                <input type="text" />
              </div>
              <div className="Detail_Form-Input Input-Adress">
                <p>ZIP CODE</p>
                <input type="text" />
              </div>
            </section>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SupplierDetail;

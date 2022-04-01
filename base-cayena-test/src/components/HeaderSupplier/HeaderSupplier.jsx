import { Button } from "@mui/material";
import "./HeaderSupplier.css";
import React from "react";
import RouteChange from "../RouteChange/RouteChange";

const HeaderSupplier = (() => {
    return (
        <header>
            <h1>Technoburst</h1>

            <section>
                        <Button variant = "contained" className="Header_Button"onClick={ RouteChange("/")}>EXIT</Button>

            </section>
        </header>
    )
})

export default HeaderSupplier;
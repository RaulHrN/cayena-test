import React from 'react';
import { useHistory } from "react-router-dom";
function RouteChange(info) {
  
  const history = useHistory();
  
  const routeChange = () =>{  
    history.push(info);
  }

  return routeChange;
}

export default RouteChange;
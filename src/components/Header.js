import React from "react";
import SwapHorizontalCircleOutlinedIcon from '@material-ui/icons/SwapHorizontalCircleOutlined';

function Header() {
  return (
    <header>
      <h1>
      <SwapHorizontalCircleOutlinedIcon padding = "10px" style={{ fontSize: 30}}/>
        Image Wonder Trade     
        <SwapHorizontalCircleOutlinedIcon padding = "10px" style={{ fontSize: 30}}/>
      </h1>
    </header>
  );
}

export default Header;
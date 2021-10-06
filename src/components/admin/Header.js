import React from "react";
import { Link, useLocation } from "react-router-dom";
import QRCode from "qrcode.react";

import classes from "./Header.module.css";
import { Button } from "semantic-ui-react";

const Header = (props) => {
  const location = useLocation();

  const switchResMode = () => {
    props.switchResMode();
  };

  const getUrlForAdim = () => {
    // return (
    //   <div>
    //     <QRCode
    //       id="qrcode"
    //       value= window.location.href
    //       size={290}
    //       level={"H"}
    //       includeMargin={true}
    //     />
    //   </div>
    // );
  };

  return (
    <div className={classes.header}>
      <div className={classes.information}>
        <div className={classes.label}>
          <div>Shop Name</div>
          <div>Phone Number</div>
        </div>
        <div>
          <div>Shop 1</div>
          <div>0902338703</div>
        </div>
      </div>
      <div className={`${classes["list-button"]}`}>
        <div>
          <Button onClick={getUrlForAdim}>Copy</Button>
          <Button>Share</Button>
        </div>
        <button
          type="button"
          onClick={switchResMode}
          className={classes.toggle}
        >
          {props.isMenu ? "View Orders" : "View Menu"}
        </button>
      </div>
    </div>
  );
};

export default Header;

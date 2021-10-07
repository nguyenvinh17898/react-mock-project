import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import QRCode from "qrcode.react";

import classes from "./Header.module.css";
import { Button, Modal } from "semantic-ui-react";
import ModalUrl from "./ModalUrl";

const Header = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState('');

  const switchResMode = () => {
    props.switchResMode();
  };

  const showModal = (admin = true) => {
    setOpenModal(true);
    if(admin){
      setUrl(window.location.href);
    }else{
      setUrl(window.location.href.replace('admin', 'shop'));
    }
  };

  const hideModal = () => {
    setOpenModal(false);
    
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
          <Button onClick={showModal}>Copy</Button>
          <Button onClick={()=>showModal(false)}>Share</Button>
        </div>
        <button
          type="button"
          onClick={switchResMode}
          className={classes.toggle}
        >
          {props.isMenu ? "View Orders" : "View Menu"}
        </button>
      </div>
      <ModalUrl open={openModal} hideModal={hideModal} url={url} />
    </div>
  );
};

export default Header;

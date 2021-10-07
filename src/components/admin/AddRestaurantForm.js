import React, { useRef, useState } from "react";
import { useHistory } from "react-router";

import { Button, Checkbox, Form } from "semantic-ui-react";
import classes from "./AddRestaurant.module.css";
const AddRestaurantForm = () => {
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const [enteredImg, setEnteredImg] = useState();
  const [enteredName, setEnteredName] = useState();
  const [enteredPhone, setEnteredPhone] = useState();

  const history = useHistory();

  const chooseImage = async () => {
    await imgRef.current.click();
  };

  const submitHandler = () => {
    if (nameRef.current.value.length === 0 || phoneRef.current.length === 0) {
      return;
    }

    setEnteredName(nameRef.current.value);
    setEnteredPhone(phoneRef.current.value);

    //call api

    history.push("/admin/10");
  };
  return (
    <section className={classes.add}>
      <div className={`${classes.image}`}>
        <img onClick={chooseImage} src="C:\fakepath\1233.png" />
      </div>
      <div>
        <h1>Create New Restaurant</h1>
        <Form onClick={submitHandler}>
          <input type="file" hidden ref={imgRef} />
          <Form.Field>
            <input placeholder="Shop Name" ref={nameRef} required />
          </Form.Field>
          <Form.Field>
            <input placeholder="Phone Number" ref={phoneRef} required />
          </Form.Field>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    </section>
  );
};

export default AddRestaurantForm;

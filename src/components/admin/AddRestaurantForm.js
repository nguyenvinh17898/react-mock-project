import React, { useRef, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

import classes from "./AddRestaurant.module.css";
const AddRestaurantForm = () => {
  const imgRef = useRef(null);
  const [enteredImg, setEnteredImg] = useState();
  const [enteredName, setEnteredName] = useState();
  const [enteredPhone, setEnteredPhone] = useState();

  const chooseImage = async() => {
    await imgRef.current.click();
  };

  return (
    <section className={classes.add}>
      <div className={`${classes.image}`}>
        <img onClick={chooseImage} src="C:\fakepath\1233.png" />
      </div>
      <div>
        <h1>Create New Restaurant</h1>
        <Form>
          <input type="file" hidden ref={imgRef} />
          <Form.Field>
            <input placeholder="Shop Name" />
          </Form.Field>
          <Form.Field>
            <input placeholder="Phone Number" />
          </Form.Field>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    </section>
  );
};

export default AddRestaurantForm;

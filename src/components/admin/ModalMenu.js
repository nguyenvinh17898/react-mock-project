import { useRef } from "react";

import { Button, Modal, Form, Input } from "semantic-ui-react";
import classes from "./ModalMenu.module.css";

const ModalMenu = (props) => {
  const imgRef = useRef(null);

  const chooseImage = async () => {
    imgRef.current.click();
  };

  return (
    <Modal open={props.open} onClose={() => props.hideModal(false)} size="mini">
      <Modal.Header>Detail</Modal.Header>
      <Modal.Content>
        <Modal.Description style={{ "text-align": "center" }}>
          <Form>
            <Form.Field inline>
              <label>Name</label>
              <Input placeholder="Name" />
            </Form.Field>
            <Form.Field inline>
              <label>Price</label>
              <Input placeholder="Price" />
            </Form.Field>
            <div>
              <img className={classes.img}
                onClick={chooseImage}
                src="https://bizweb.dktcdn.net/thumb/large/100/395/283/products/208303881-3005575669720867-9039646633917089217-n.jpg?v=1625538297000"
              />
            </div>
            <input type="file" hidden ref={imgRef} />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => props.hideModal(false)}>Save</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalMenu;

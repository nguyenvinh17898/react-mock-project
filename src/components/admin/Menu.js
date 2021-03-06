import { useState } from "react";

import { Button, Table } from "semantic-ui-react";
import classes from "./Menu.module.css";
import ModalMenu from "./ModalMenu";

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal =()=>{
    setOpenModal(true);
  }

  const hideModal =()=>{
    setOpenModal(false);
  }
  return (
    <div className={classes.menu}>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Picture
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Price
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Action
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Product 1</Table.Cell>
            <Table.Cell>$8.00</Table.Cell>
            <Table.Cell>
              <Button onClick={showModal}>Edit</Button>
              <Button>Delete</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Product 2</Table.Cell>
            <Table.Cell>$9.00</Table.Cell>
            <Table.Cell>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <ModalMenu open={openModal} hideModal={hideModal}/>
    </div>
  );
};

export default Menu;

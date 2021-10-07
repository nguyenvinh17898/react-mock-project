import { Button, Table } from "semantic-ui-react";

import classes from "./Menu.module.css";

const Orders = () => {
  return (
    <div className={classes.menu}>
      <Table padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              #
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Customer Name
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Customer Phone
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Total Status
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{ position: "sticky", top: 0, "z-index": 1 }}
            >
              Order Time
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
            <Table.Cell>Product 1</Table.Cell>
            <Table.Cell>Product 1</Table.Cell>
            <Table.Cell>$8.00</Table.Cell>
            <Table.Cell>
              <Button>View</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Orders;

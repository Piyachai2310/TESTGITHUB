import * as React from "react";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import './YourComponent.css'; // Import your CSS file

const columns = [
  {
    Header: 'เลขห้องพัก',
    accessor: 'roomNumber',
  },
  {
    Header: 'ชื่อ',
    accessor: 'firstName',
  },
  {
    Header: 'นามสกุล',
    accessor: 'lastName',
  },
  {
    Header: 'ระดับชั้น',
    accessor: 'grade',
  },
  {
    Header: 'สถานะหอพัก',
    accessor: 'dormStatus',
  },
  {
    Header: 'หมายเหตุ',
    accessor: 'note',
  },
];

const initialData = [
  {
    roomNumber: "110232",
    firstName: "นาย",
    lastName: "พนธกร",
    grade: "5",
    dormStatus: "เช็คชื่อแล้ว",
    note: "",
  },
  {
    roomNumber: "110233",
    firstName: "พลภัทร",
    lastName: "",
    grade: "6",
    dormStatus: "เช็คชื่อแล้ว",
    note: "",
  },
  // ...
];

const Component = () => {
  const [tableData, setTableData] = React.useState({
    nodes: initialData,
  });

  return (
    <div className="table-container">
      <div>
        <Table data={tableData}>
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  {columns.map((column) => (
                    <HeaderCell key={column.accessor}>{column.Header}</HeaderCell>
                  ))}
                </HeaderRow>
              </Header>

              <Body>
                {tableList.map((item) => (
                  <Row key={item.id} item={item}>
                    {columns.map((column) => (
                      <Cell key={column.accessor}>{item[column.accessor]}</Cell>
                    ))}
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Component;

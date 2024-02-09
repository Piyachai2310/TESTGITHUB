import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const data = [
  {
    roomNumber: "110232",
    firstName: "นาย",
    lastName: "พนธกร",
    grade: "11.4/5",
    dormStatus: "11.4/6",
    note: "",
  },
  {
    roomNumber: "110233",
    firstName: "พลภัทร",
    lastName: "",
    grade: "11.4/6",
    dormStatus: "เช็คชื่อแล้ว",
    note: "",
  },
  // ...
];

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            สถานะประจำวันของนักเรียนโครงการ วมว. ปีการศึกษา 2566
          </Typography>
        </Toolbar>
      </AppBar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>เลขห้องพัก</TableCell>
            <TableCell>ชื่อ</TableCell>
            <TableCell>นามสกุล</TableCell>
            <TableCell>ระดับชั้น</TableCell>
            <TableCell>สถานะหอพัก</TableCell>
            <TableCell>หมายเหตุ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.roomNumber}>
              <TableCell>{row.roomNumber}</TableCell>
              <TableCell>{row.firstName} {row.lastName}</TableCell>
              <TableCell>{row.grade}</TableCell>
              <TableCell>{row.dormStatus}</TableCell>
              <TableCell>{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


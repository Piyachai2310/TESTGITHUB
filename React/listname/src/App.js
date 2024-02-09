import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Input, Table, Tbody, Th, Td, Tr } from '@chakra-ui/react';


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

const ChakraTable = ({ columns, data }) => {
  // ใช้ `useTable` กับ `useSortBy` สำหรับการเรียงลำดับ
  const tableInstance = useTable({ columns, data, initialSortBy: [{ id: 'roomNumber', desc: true }] });

  // ดึง props ที่จำเป็น
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, getSortByToggleProps, state: { sorting } } = tableInstance;

  // คอมโพเนนต์ Input สำหรับการกรอง
  const CustomInput = ({ value, onChange, placeholder }) => (
    <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
  );

  // แสดงตาราง
  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Th {...column.getHeaderProps(getSortByToggleProps(column))}>
                {column.render('Header')}
                {/* แสดงตัวบ่งชี้การเรียงลำดับ */}
                <span {...getSortByToggleProps(column)}>
                  {sorting.find(s => s.id === column.id) ? (
                    sorting.find(s => s.id === column.id).desc ? '▼' : '▲'
                  ) : ''}
                </span>
                {/* แสดง Input กรองข้อมูล */}
                {column.canFilter && (
                  <div>
                    <CustomInput
                      value={column.getFilterValue()}
                      onChange={e => column.setFilter(e.target.value)}
                      placeholder={`ค้นหา ${column.id}`}
                    />
                  </div>
                )}
              </Th>
            ))}
          </Tr>
        ))}
      </thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default ChakraTable;
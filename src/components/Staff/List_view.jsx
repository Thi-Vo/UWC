import * as React from "react";
import {
    LeftColumn,
    RightColumn,
    Split,
    Container
} from "./List_view.styled"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Janitor', minWidth: 170 },
  { id: 'task', label: 'Task', minWidth: 100 },
  {
    id: 'mcp',
    label: 'MCPs',
    minWidth: 170,
    // align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'vehicle',
    label: 'Phương\u00a0tiện',
    minWidth: 170,
    // align: 'left',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'progress',
    label: 'Tiến\u00a0độ',
    minWidth: 170,
    // align: 'left',
    // format: (value) => value.toFixed(2),
  },
];

function createData(name, task, mcp, vehicle, progress) {
  return { name, task, mcp, vehicle, progress };
}

const rows = [
  createData('Cao Ngọc Hạ', 'WP1,WP2,WP3', 'A001,A003', "TRT01", "1/3"),
  createData('Lý Thành An', 'GB1,DC2', 'A0010,A003', "TRT01","1/3"),
  createData('Võ Xuân Cung', 'WP1,CDS2', 'A0010,A0030',"TRT01", "1/3"),
  createData('Nguyễn Quang Thạch', 'CS1,WP2', 'A001,A003',"TRT01", "3/3"),
  createData('Nguyễn Hạo Nhiên', 'CSD1,CS2', 'A002,A073', "TRT01","2/3"),
  createData('Đỗ Phương Trinh', 'GE1,CP2', 'A08,A07', "TRT01","1/1"),
  createData('Lý Hữu Tài', 'GE1,WP2,WP3', 'A001,A003', "TRT01","1/4"),
  createData('Võ Long Quân', 'WP1,GEG2,WP3', 'A06,A003',"TRT01", "1/3"),
  createData('Võ Long Quân', 'GGEP1,WP2,GE3X', 'B001,A003',"TRT01", "1/1"),
  createData('Võ Long Quân', 'WP1,WP2,WP3', 'A001,A003', "TRT01",'1/1'),
  createData('Võ Long Quân', 'WP1,WP2,WP3', 'A001,A003',"TRT01", "1/2"),
];

export function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead color="red">
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const List = () =>{
    return (
        <Container>
            <LeftColumn>
                <StickyHeadTable />
            </LeftColumn>
            <Split></Split>
            <RightColumn>
                dqdq
                dewdwedw
                dwqdqwdqwdwd
                widthwd
            </RightColumn>
        </Container>
    );
};
export default List;


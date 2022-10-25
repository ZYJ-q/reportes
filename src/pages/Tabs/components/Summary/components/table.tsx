import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  Id: number,
  Currency: string,
  Latest_net_value: number,
  Shares_held: number,
  Earnings_in_the_last_seven_days: number,
  Annualized_income: string,
  Maximum_rollback: string,
  Latest_equity: number,
) {
  return {
    Id,
    Currency,
    Latest_net_value,
    Shares_held,
    Earnings_in_the_last_seven_days,
    Annualized_income,
    Maximum_rollback,
    Latest_equity,
  };
}

const rows = [
  createData(1, 'USDT', 0.999154, 200000.0, 1, '-4.0%', '2.0%', 999),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Table1() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>币种</TableCell>
            <TableCell align="right">最新净值</TableCell>
            <TableCell align="right">持有股份</TableCell>
            <TableCell align="right">最近七天收益</TableCell>
            <TableCell align="right">年化收益</TableCell>
            <TableCell align="right">最大回撤</TableCell>
            <TableCell align="right">最新权益</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Currency}
              </TableCell>
              <TableCell align="right">{row.Latest_net_value}</TableCell>
              <TableCell align="right">{row.Shares_held}</TableCell>
              <TableCell align="right">
                {row.Earnings_in_the_last_seven_days}
              </TableCell>
              <TableCell align="right">{row.Annualized_income}</TableCell>
              <TableCell align="right">{row.Maximum_rollback}</TableCell>
              <TableCell align="right">{row.Latest_equity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

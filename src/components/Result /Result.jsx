import React from "react";
import Button from "@material-ui/core/Button";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";

import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

export const Result = ({ keyInfo, scanKey, logout }) => {
  return (
    <>
      <Table style={{ width: "80%", margin: "auto" }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Password</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>QR code </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          {keyInfo.map((info) => (
            <TableCell key={info}>{info}</TableCell>
          ))}
          <TableCell>
            <a href={scanKey}>
              <h3>{scanKey}</h3>
            </a>
          </TableCell>
        </TableRow>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={logout}
        style={{ marginTop: "30px" }}
      >
        Logout in
      </Button>
    </>
  );
};

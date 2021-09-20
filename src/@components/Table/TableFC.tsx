import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSpentSumTC } from '../../@store/clients/slice';
import { ClientsItemType, Genders } from '../../@types/Clients';
import { ReactComponent as FemaleDefaultAvatar } from '../UI/Icons/FemaleDefaultAvatar.svg';
import { ReactComponent as MaleDefaultAvatar } from '../UI/Icons/MaleDefaultAvatar.svg';
import { DiscountTypeCell } from './DiscountTypeCell';
import { SpentSumCell } from './SpentSumCell';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props {
  data: ClientsItemType[];
}

export const TableFC: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateSum = (userId: string, spentSum: number) => {
    dispatch(updateSpentSumTC({ userId, spentSum }));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Клиент
              <span>Имя</span>
            </TableCell>
            <TableCell align="right">Скидка тип</TableCell>
            <TableCell align="right">Потрачено</TableCell>
            <TableCell align="right">СК.Сумма</TableCell>
            <TableCell align="right">Скидка процент</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((client: ClientsItemType) => (
            <TableRow key={client.id}>
              <TableCell component="th" scope="row">
                {client.gender === Genders.FEMALE ? (
                  <FemaleDefaultAvatar />
                ) : (
                  <MaleDefaultAvatar />
                )}
                {client.name}
              </TableCell>
              {/* <TableCell align="right">{client.discountType}</TableCell> */}
              <DiscountTypeCell
                value={client.discountType}
                updateCb={handleUpdateSum}
                userId={client.id}
              />
              {/* <TableCell align="right">{client.spentSum}</TableCell> */}
              <SpentSumCell
                value={client.spentSum}
                updateCb={handleUpdateSum}
                userId={client.id}
              />
              <TableCell align="right">
                {(client.spentSum * client.discountProcent) / 100}
              </TableCell>
              <TableCell align="right">{client.discountProcent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

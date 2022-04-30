import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import usePrevious from '../../@hooks/usePrevious';
import { DiscountFilters, DiscountType } from '../../@types';

type PropsType = {
  updateCb: (userId: string, spentSum: number) => void;
  userId: string;
  value: DiscountType;
};

export const DiscountTypeCell: React.FC<PropsType> = ({
  updateCb,
  userId,
  value,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [cellVal, setCellVal] = useState<DiscountType>(value);
  const prevCellVal = usePrevious(cellVal);
  const inputRef = useRef<any>(null);

  // state from props
  useEffect(() => setCellVal(value), [value]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    // prevent unnecessary api call
    if (cellVal !== prevCellVal) {
      //   updateCb(userId, cellVal);
    }
    setEditMode(false);
  };

  // https://stackoverflow.com/a/53315615/3988363
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.currentTarget.value);
    setCellVal(e.currentTarget.value as DiscountType);
  };

  return (
    <>
      {!editMode ? (
        <TableCell align="right" onDoubleClick={activateEditMode}>
          {value}
        </TableCell>
      ) : (
        <TableCell align="right">
          {/* <input
            name="spentSum"
            ref={inputRef}
            onChange={onInputChange}
            // autoFocus
            onBlur={deactivateEditMode}
            value={cellVal}
            style={{ maxWidth: '50px' }}
          /> */}
          <select
            name="discountType"
            onBlur={deactivateEditMode}
            onChange={(e: any) => onSelectChange(e)}
            ref={inputRef}
            style={{ width: '75px' }}
            value={value}
          >
            <option value={DiscountFilters.GOLD}>{DiscountFilters.GOLD}</option>
            <option value={DiscountFilters.SILVER}>
              {DiscountFilters.SILVER}
            </option>
            <option value={DiscountFilters.STANDART}>
              {DiscountFilters.STANDART}
            </option>
            <option value={DiscountFilters.WOOD}>{DiscountFilters.WOOD}</option>
          </select>
        </TableCell>
      )}
    </>
  );
};

export default DiscountTypeCell;

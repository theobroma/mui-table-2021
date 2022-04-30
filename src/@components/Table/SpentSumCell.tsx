import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import usePrevious from '../../@hooks/usePrevious';

type PropsType = {
  updateCb: (userId: string, spentSum: number) => void;
  userId: string;
  value: number;
};

export const SpentSumCell: React.FC<PropsType> = ({
  updateCb,
  userId,
  value,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [cellVal, setCellVal] = useState<number>(value);
  const prevCellVal = usePrevious(cellVal);
  const inputRef = useRef<HTMLInputElement>(null);

  // state from props
  useEffect(() => setCellVal(value), [value]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    // prevent unnecessary api call
    if (cellVal !== prevCellVal) {
      updateCb(userId, cellVal);
    }
    setEditMode(false);
  };

  // https://stackoverflow.com/a/53315615/3988363
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCellVal(Number(e.currentTarget.value));

  return (
    <>
      {!editMode ? (
        <TableCell align="right" onDoubleClick={activateEditMode}>
          {value}
        </TableCell>
      ) : (
        <TableCell align="right">
          <input
            name="spentSum"
            ref={inputRef}
            onChange={onInputChange}
            // autoFocus
            onBlur={deactivateEditMode}
            value={cellVal}
            style={{ maxWidth: '50px' }}
          />
        </TableCell>
      )}
    </>
  );
};

export default SpentSumCell;

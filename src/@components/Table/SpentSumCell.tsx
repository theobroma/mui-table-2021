import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import usePrevious from '../../@hooks/usePrevious';

type PropsType = {
  // updateStatus: (status: string) => void;
  value: number;
};

export const SpentSumCell: React.FC<PropsType> = ({
  // updateStatus,
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
      // updateStatus(statusVal);
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
        // <div>
        //   <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
        // </div>
        <TableCell align="right" onDoubleClick={activateEditMode}>
          {value}
        </TableCell>
      ) : (
        <input
          ref={inputRef}
          onChange={onInputChange}
          // autoFocus
          onBlur={deactivateEditMode}
          value={cellVal}
        />
      )}
    </>
  );
};

export default SpentSumCell;

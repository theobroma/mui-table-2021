import React from 'react';
import cn from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export interface IHeaderFixedProps {
  children?: React.ReactNode | false;
  hideSecond?: boolean;
}

interface ElevationScrollProps {
  children: React.ReactElement;
  classes: any;
}

function ElevationScroll({ children, classes }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    className: trigger
      ? classes.appBar
      : cn(classes.appBar, classes.appBarOpacity),
    elevation: trigger ? 4 : 0,
  });
}

export const HeaderFC: React.FC<IHeaderFixedProps> = ({
  children,
  hideSecond,
}) => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll classes={classes}>
        <AppBar key="top" position="fixed" color="default">
          <Toolbar className={classes.firstToolbar}>{children}</Toolbar>
        </AppBar>
      </ElevationScroll>
      {!hideSecond && <Toolbar className={classes.secondToolbar} />}
    </>
  );
};

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    transition: theme.transitions.create('background-color'),
  },
  appBarOpacity: {
    backgroundColor: 'rgba(37, 36, 38, 0.6)',
  },
  brand: {
    height: 45,
    marginTop: 6,
    width: 99,
  },
  firstToolbar: {
    justifyContent: 'space-between',
  },
  secondToolbar: {
    pointerEvents: 'none',
  },
}));

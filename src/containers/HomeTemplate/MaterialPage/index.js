import React from 'react';
import { Button } from '@material-ui/core';
import useStyle from '../../../Style';
export default function MaterialPage() {
  const classes = useStyle();
  return (
    <div className={classes.content}>
      <Button variant='contained' color='primary' href='#contained-buttons'>
        Link
      </Button>
      <span>this is material</span>
    </div>
  );
}

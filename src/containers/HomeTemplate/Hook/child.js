import React, { memo } from 'react';

function Child(props) {
  console.log('ok');
  return <div>Child {props.number}</div>;
}
export default memo(Child);

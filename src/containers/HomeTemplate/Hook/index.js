import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Child from './child';
export default function HookPage() {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(number + 1);
  };
  useEffect(() => {
    /* useEffect nếu như tham số thứ 2 là mảng rỗng thì nó là componentDidmount tương ứng bên class
      chỉ chạy 1 lần duy nhất 
    */
    console.log('useEffect-componentDidmount');
  }, []);
  useEffect(() => {
    /* useEffect nếu như tham số thứ 2 là mảng khác rỗng thì nó là componentDidUpdate tương ứng bên class
      chỉ chạy nhiều lần duy nhất 
    */
    console.log('useEffect-componentDidUpdate');
  }, [number]);
  useEffect(() => {
    //  tương ứng với componet  willunmount
    let interval = setInterval(() => {
      console.log('hello');
    }, 2000);
    return () => {
      console.log('useEffect - componentWillUnmount');
      clearInterval(interval);
    };
  }, []);
  const showNumber = () => {
    console.log('showNumber');
  };
  //useCallBack dùng để khoong render lại component con
  const showNumberCallBack = useCallback((showNumber) => {}, []);

  const numberUP = () => {
    let i = 0;
    while (i < 1000) i++;
    return i;
  };
  const numberUpMeno = useMemo(() => numberUP(), []);
  return (
    <div>
      <h3>Number : {number}</h3>

      <button className='btn btn-success' onClick={handleClick}>
        Click
      </button>
      <Child showNumber={showNumberCallBack} />
      <h3> numberup : {numberUpMeno}</h3>
    </div>
  );
}

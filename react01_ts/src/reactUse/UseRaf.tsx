import {useRaf} from 'react-use';
import React,{useMemo} from 'react';

const UseRaf = () => {
  /**
   * @desc useRaf(ms?: number, delay?: number): number;
   * ms: 多少秒运动完
   * delay： 延迟多少秒
   */
  const elapsed = useRaf(10000,500);

  useMemo(() => {
    console.log(111);
  },[elapsed])

  return (
    <div>
      Elapsed: {elapsed}
    </div>
  );
};

export default UseRaf;

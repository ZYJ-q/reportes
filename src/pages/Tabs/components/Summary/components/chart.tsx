import React, { Component } from 'react';

import ReactEcharts from 'echarts-for-react';

// type Props = {
//   data: Array<number>
//   name: string
// }
interface Props {
  data: Array<number>;
}

// export default function Chart1(   data:Array<number> , name :string  ){
export default function Chart1(props: Props) {
  const data = props.props.data;

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data,
        // data: [150, 230, 224, 218, 135, 147, 260],
        // data: data,
        type: 'line',
      },
    ],
  };

  return (
    <>
      {/* <p> { name } </p> */}

      <ReactEcharts option={option} style={{ width: 700, height: 400 }} />
    </>
  );
}

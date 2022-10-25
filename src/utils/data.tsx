import type { ColumnsType } from 'antd/es/table';

interface DataType {
  order: string;
  time: string;
  equity: string;
  money: string;
  networth: string;
  withdrawal?: string;
  remarks?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '日期',
    dataIndex: 'time',
  },

  {
    title: '净值',
    dataIndex: 'networth',
  },
  {
    title: '份额',
    dataIndex: 'money',
  },
  {
    title: '权益',
    dataIndex: 'equity',
  },
  {
    title: '出入金',
    dataIndex: 'withdrawal',
  },
  {
    title: '备注',
    dataIndex: 'remarks',
  },
];

const data: DataType[] = [
  {
    order: '41',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01573',
  },
  {
    order: '42',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01573',
  },
  {
    order: '43',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01573',
  },
  {
    order: '44',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01573',
  },
  {
    order: '45',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '46',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '47',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '48',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '49',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '50',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '51',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '52',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '53',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '54',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '55',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '56',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '57',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
  {
    order: '58',
    time: '2022/09/22',
    equity: '1515.8600',
    money: '1500.0000',
    networth: '1.01.573',
  },
];

export { columns, data };

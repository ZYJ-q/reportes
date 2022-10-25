import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './index.less';
import { columns, data } from '@/utils/data';

const Detailed = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          total: 20,
        }}
      />
    </div>
  );
};

export default Detailed;

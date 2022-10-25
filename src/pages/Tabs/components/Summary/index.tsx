import React from 'react';
import styles from './index.less';

import Chart1 from './components/chart';
import Container from '@mui/material/Container';
import Table1 from './components/table';

export default function Products() {
  const num = {
    data: [150, 230, 224, 218, 135, 147, 260],
  };

  return (
    <>
      <Container maxWidth="lg">
        <div className={styles.contain_p}>
          <div className={styles.text1}>
            <p>产品名称： </p>
            <p>产品持有人： </p>
          </div>

          <div className={styles.table1}>
            <Table1 />
          </div>

          <div className={styles.chart1}>
            <p>量化套利8号数据图</p>

            <Chart1 props={num} />
          </div>
        </div>
      </Container>
    </>
  );
}

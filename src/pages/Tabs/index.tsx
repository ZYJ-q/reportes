import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../components/TabPanel';
import a11yProps from '../components/a11yProps';

import './index.less';
import Summary from './components/Summary';
import Detailed from './components/Detailed';
import Header from '../Header';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="tabs">
      <Header></Header>
      <div className="title">量化套利产品A类产品</div>
      <Box>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="汇总表" {...a11yProps(0)} />
            <Tab label="明细表" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Summary></Summary>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Detailed></Detailed>
        </TabPanel>
      </Box>
    </div>
  );
};

export default Home;

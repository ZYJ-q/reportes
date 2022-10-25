import * as React from 'react';
import logo from '@/assets/imgs/logo.jpg';
import { Button } from 'antd';
import { Select, Modal } from 'antd';
import FormControl from '@mui/material/FormControl';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import './index.less';
import { useHistory } from 'umi';
// import   './styles/head.scss'

const { Option } = Select;
const { confirm } = Modal;

export default function Header() {
  const SelectChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const history = useHistory();

  const outLogin = () => {
    confirm({
      title: '确定退出登录?',
      icon: <ExclamationCircleOutlined />,
      okText: '确认',
      cancelText: '取消',
      onOk() {
        history.replace('/');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const goReset = () => {
    history.push('/reset');
  };

  return (
    <React.Fragment>
      <div className="navBar">
        <div className="nav">
          <ul>
            {/* LOGO 图像 */}
            <a href="#">
              <img className="avatar" src={logo}></img>
            </a>
            <span className="select">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  defaultValue="产品名称"
                  style={{ width: 120 }}
                  onChange={SelectChange}
                >
                  <Option value="产品A">A</Option>
                  <Option value="产品B">B</Option>
                </Select>
              </FormControl>
            </span>
          </ul>
        </div>
        <div className="other">
          <ul>
            <li>
              <a href="#" onClick={outLogin}>
                退出登录
              </a>
            </li>
            <li>
              <a href="#" onClick={goReset}>
                重置密码
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* </Toolbar> */}
    </React.Fragment>
  );
}

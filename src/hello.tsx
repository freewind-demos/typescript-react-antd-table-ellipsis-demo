import { Table } from 'antd';
import React from 'react';

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

export default function Hello() {
  return <div>
    <Table
      style={{ width: 200 }}
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          width: 50,
          ellipsis: { showTitle: true },
        },
        {
          title: 'Cash Assets',
          className: 'column-money',
          width: 50,
          ellipsis: { showTitle: true },
          dataIndex: 'money',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          width: 50,
          ellipsis: { showTitle: true },
          render: (text: string) => <div style={{ display: 'inline' }}><a>{text}</a></div>,
        },
      ]}
      dataSource={data}
      bordered
      title={() => 'Header'}
      footer={() => 'Footer'}
    />
  </div>
};

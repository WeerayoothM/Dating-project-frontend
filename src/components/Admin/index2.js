import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../../css/admin.css";
import axios from "../../config/axios";
import { Table, Input, Modal, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PicCenterOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = async (id) => {
    console.log("id", id);
    await axios.delete(`/admin/users/${id}`).then((res) => {
      getAllUser();
    });
  };
  const getAllUser = async () => {
    await axios.get("/admin/users").then((res) => {
      setData(res.data);
    });
  };

  const onSearch2 = (value) => {
    console.log("searching", value);
    axios.get(`/admin/users?name=${value}`).then((res) => {
      console.log("res.data", res.data);
      setData(res.data);
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "status",
      dataIndex: "status",

      render: (text, record) => (
        <DeleteOutlined onClick={() => deleteUser(record.status)} />
      ),
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Target",
      dataIndex: "target",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Lat",
      dataIndex: "lat",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Long",
      dataIndex: "long",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "motto",
      dataIndex: "motto",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => (
        <DeleteOutlined onClick={() => deleteUser(record.id)} />
      ),
    },
  ];

  return (
    <div class="body">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" onClick={getAllUser} icon={<UserOutlined />}>
              users
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => setData([])}
              icon={<VideoCameraOutlined />}
            >
              report
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="small"
                onSearch={(value) => onSearch2(value)}
              />
              <Table columns={columns} dataSource={data} onChange={onChange} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      ,
    </div>
  );
}
export default Admin;

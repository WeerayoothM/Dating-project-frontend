import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../../css/admin.css";
import axios from "../../config/axios";
import { Table, Input, InputNumber, Form, Popconfirm } from "antd";
import { EditOutlined, FireFilled, LogoutOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import LocalStorageService from "../../services/localStorage";
import { useHistory } from "react-router-dom";

import {
  UserOutlined,
  VideoCameraOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function Admin(props) {
  const [form] = Form.useForm();
  const history = useHistory();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);
      //console.log("row", row);
      // save to backend
      axios.post(`/admin/users/${id}`, row);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  // On loading procedure

  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = async (id) => {
    //console.log("id", id);
    await axios.delete(`/admin/users/${id}`).then((res) => {
      getAllUser();
    });
  };
  const getAllUser = async () => {
    await axios.get("/admin/users").then((res) => {
      setData(res.data);
      //console.log("rere");
    });
  };

  const onSearch2 = (value) => {
    console.log("searching", value);
    axios.get(`/admin/users?name=${value}`).then((res) => {
      console.log("res.data", res.data);
      setData(res.data);
    });
  };

  const changeStatus = (id) => {
    axios.put(`./admin/users/${id}`).then((res) => {
      //console.log("status.id", id);
      getAllUser();
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      editable: true,

      sorter: {
        compare: (a, b) => a.email > b.email,
        multiple: 3,
      },
    },
    {
      title: "status",
      dataIndex: "status",

      render: (text, record) => (
        <div>
          <FireFilled
            style={{ color: `${text ? "limeGreen" : "red"}` }}
            onClick={() => changeStatus(record.id)}
          />
        </div>
      ),
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      sorter: {
        compare: (a, b) => a.birthday - b.birthday,
        multiple: 1,
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: {
        compare: (a, b) => a.gender > b.gender,
        multiple: 2,
      },
    },
    {
      title: "Target",
      dataIndex: "target",
      sorter: {
        compare: (a, b) => a.target > b.target,
        multiple: 4,
      },
    },
    {
      title: "Lat",
      dataIndex: "lat",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 5,
      },
    },
    {
      title: "Long",
      dataIndex: "long",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 6,
      },
    },
    {
      title: "motto",
      dataIndex: "motto",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 7,
      },
    },
    {
      title: "Delete",
      dataIndex: "Action",
      render: (text, record) => (
        <div>
          <DeleteOutlined onClick={() => deleteUser(record.id)} />
        </div>
      ),
    },
    {
      title: "Edit",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ""} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const logout = () => {
    LocalStorageService.clearToken();
    history.push("/");
    props.setRole("GUEST");
  };

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
              Users
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => setData([])}
              icon={<VideoCameraOutlined />}
            >
              Report
            </Menu.Item>
            <Menu.Item key="3" onClick={logout} icon={<LogoutOutlined />}>
              Logout
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
              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  columns={mergedColumns}
                  dataSource={data}
                />
              </Form>
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

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

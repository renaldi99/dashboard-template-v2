import React, { useState } from "react";
import {
  PieChartOutlined,
  TeamOutlined,
  FileProtectOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Layout, Menu, Row, theme, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { todayIs } from "../utils/utilsItem";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const itemsMenu = [
  getItem("Dashboard", "/protected", <PieChartOutlined />),
  getItem("Customer", "/protected/customer", <TeamOutlined />),
  getItem("Submission", "", <FileProtectOutlined />, [
    getItem("Submission Product", "/protected/submission-product"),
  ]),
];

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  const navigation = useNavigate();
  const selectedKey = location.pathname;
  console.log(selectedKey);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    sessionStorage.removeItem("token");
    navigation("/", { replace: true });
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={selectedKey}
          mode="inline"
          items={itemsMenu}
          onClick={(itemsMenu) => navigation(itemsMenu.key)}
        />
        {/* <Menu.Item
            key="/protected"
            style={{ margin: "12px 0 0 0", width: "100%" }}
            title="Dashboard"
          >
            <PieChartOutlined style={{ marginRight: 12 }} />
            <Link to="/protected">{collapsed ? "" : "Dashboard"}</Link>
          </Menu.Item>
          <Menu.Item
            key="/protected/customer"
            style={{ margin: "12px 0 0 0", width: "100%" }}
            title="Customer"
          >
            <TeamOutlined style={{ marginRight: 12 }} />
            <Link to="/protected/customer">{collapsed ? "" : "Customer"}</Link>
          </Menu.Item>*/}
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row
            style={{
              padding: "0 16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography.Text
                style={{ color: "#e74c3c", fontSize: 16, fontWeight: 600 }}
              >
                Template
              </Typography.Text>{" "}
              | Development
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 8 }}>{todayIs()}</div>
              <Menu
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: 0,
                  minWidth: 150,
                }}
                mode="horizontal"
                items={[
                  {
                    style: { width: "100%" },
                    icon: <Avatar>R</Avatar>,
                    label: "Renaldi",
                    key: "username",
                    children: [
                      {
                        type: "group",
                        label: "Account",
                        children: [
                          {
                            label: "Settings",
                            key: "settings",
                            icon: <SettingOutlined />,
                            onClick: () => console.log("setting click"),
                          },
                          {
                            label: "Logout",
                            key: "logout",
                            icon: <LogoutOutlined />,
                            onClick: () => logout(),
                          },
                        ],
                      },
                    ],
                  },
                ]}
              />
            </div>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Template ©2022 Build for system
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

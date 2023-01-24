import React, { useState } from "react";
import SideMenu from "./components/SideMenu";
import { Layout, ConfigProvider } from "antd";

const { Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "rgb(231, 251, 255)",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(71, 63, 63, 0.185)",
            }}
          />
          <SideMenu />
        </Sider>
      </Layout>
    </ConfigProvider>
  );
};

export default App;

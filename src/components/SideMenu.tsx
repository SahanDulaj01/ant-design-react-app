import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  PoweroffOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  danger?: "true",
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    danger,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Dashboard", "dashboard", <PieChartOutlined />),
  getItem("Device", "sub2", <DesktopOutlined />, "true", [
    getItem("Device 1", "d1"),
    getItem("Device 2", "d2"),
  ]),
  getItem("Log Out", "logout", <PoweroffOutlined />, "true"),
];

const SideMenu = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  );
};

export default SideMenu;

import {
  ProfileOutlined, 
  CustomerServiceOutlined ,
} from "@ant-design/icons";
import { Menu , Divider} from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        theme='dark'
        mode="vertical"
        Divider
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            icon: <ProfileOutlined />,
            key: "/",
          },
          {
            label: "In-Progress",
            key: "/inventory",
            icon: <ProfileOutlined />,
          },
          {
            label: "Completed",
            key: "/orders",
            icon: <ProfileOutlined />,
          },
          {
            label: "History",
            key: "/customers",
            icon: <ProfileOutlined />,
          },
          { 
            label: "Help Desk",
            key: "/HelpDesk",
            icon: <CustomerServiceOutlined />,
          },
          {
            label: "FAQ",
            key: "/FAQ",
            icon: <CustomerServiceOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;

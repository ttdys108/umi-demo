import Link from 'umi/link'
import { Menu, Icon } from "antd";
const { SubMenu } = Menu;

export default function (props) {

  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1">
        <Icon type="user" />
        <span className="nav-text">我的</span>
      </Menu.Item>
      <SubMenu
        key="2"
        title={
          <span>
                <Icon type="map" />
                <span>地图</span>
              </span>
        }
      >
        <Menu.Item key="2-1">
          <Link to="/map/china">
            <Icon type="upload" />
            <span className="nav-text">概况</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2-2">
          <Link to="/map/statistic">
            <Icon type="user" />
            <span className="nav-text">统计</span>
          </Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span className="nav-text">nav 3</span>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
                <Icon type="mail" />
                <span>系统设置</span>
              </span>
        }
      >
        <Menu.Item key="5">
          <Link to="/system/dict">
            <Icon type="upload" />
            <span className="nav-text">字典管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/system/user">
            <Icon type="user" />
            <span className="nav-text">用户管理</span>
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}

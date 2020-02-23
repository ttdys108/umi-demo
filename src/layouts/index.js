import styles from './index.css';

import { Layout } from 'antd';
import SiderBar from '../components/siderbar'
import { getConfig } from "@/config";

const { Header, Footer, Sider, Content } = Layout;
const tokenKey = getConfig('loginTokenKey');

function MainLayout(props) {
  if(props.location.pathname === '/login') {
    return (
      <div className={'h-100'}>
        { props.children }
      </div>
    )
  }

  return (
    <div className={'h-100'}>
      <Layout>
        <Sider theme={"dark"} width={170} style={{'minHeight': '-webkit-fill-available'}}>
          <SiderBar/>
        </Sider>
        <Layout>
          <Header className="bg-white">Header</Header>
          <Content>
            { props.children }
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;

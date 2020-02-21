import styles from './index.css';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function MainLayout(props) {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Slider</Sider>
          <Content>
            { props.children }
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;

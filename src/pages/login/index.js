import style from './index.css'
import { Row, Col, Form, Input, Icon, Checkbox, Button} from "antd";
import { login } from '@/service/login'
import {useState} from 'react'
import router from "umi/router";
import {CLOG, CERROR} from "@/utils";
import {message} from "antd";
import {getConfig} from "@/config";

export default function(props) {
  const {from} = props.location.state || {from: '/'}

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const params = {
      username: username,
      password: password,
      rememberMe: rememberMe,
      type: 'USERNAME'
    };
    login(params).then(resp => {
      CLOG('login resp', resp);
      if(resp.code === '000000') {
        localStorage.setItem(getConfig('loginTokenKey'), resp.data);
        router.replace(from);
      } else {
        message.error(resp.msg);
      }
    }).catch(err => {
      CERROR('login error', err);
    })

  }

  return (
    <div className={style.outer}>
      <Row type={'flex'} justify={'center'}>
        <Col span={6} className={style.loginForm}>
          <h3>欢迎登录</h3>
          <Form onSubmit={handleLogin}>
            <Form.Item>
              <Input value={username} onChange={({target: {value}}) => setUsername(value)}
                prefix={<Icon type={'user'} style={{ color: 'rgba(0,0,0,.25)' }}/>}
                placeholder={'username'}
              />
            </Form.Item>
            <Form.Item>
              <Input value={password} onChange={({target: {value}}) => setPassword(value)}
                prefix={<Icon type={'lock'} style={{ color: 'rgba(0,0,0,.25)' }}/>}
                type={'password'}
                placeholder={'password'}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox checked={rememberMe} onClick={() => setRememberMe(!rememberMe)}>Remember me</Checkbox>
              <a className="f-right">Forgot password?</a>
              <Button type="primary" htmlType="submit" className="w-100">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

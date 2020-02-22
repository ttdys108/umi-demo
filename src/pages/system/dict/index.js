/**
 * #权限
 * Routes:
 *  - ./src/routes/auth-route
 *
 */
import { connect } from 'dva'
import {CLOG, CERROR} from "@/utils";
import {Button} from "antd";
import {queryAll} from "@/service/dict";

const Dictionary = function({dispatch, dict, ...props}) {

  dispatch({
    type: 'dict/setLocale',
    payload: 'en',
  })

  const getDict = () => {
    queryAll().then(resp => {
      console.log(resp);
    }).catch(err => {
      CERROR('get dict err:', err);
    })
  }

  return (
    <div>
      <h3>字典管理</h3>
      <div>

        <Button onClick={getDict}>Fetch</Button>
      </div>

    </div>
  )
}

export default connect(({dict}) => ({dict}))(Dictionary);

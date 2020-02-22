/**
 * #权限
 * Routes:
 *  - ./src/routes/auth-route
 *
 */
import { connect } from 'dva'
import {CLOG, CERROR} from "@/utils";

const Dictionary = function({dispatch, dict, ...props}) {

  dispatch({
    type: 'dict/setLocale',
    payload: 'en',
  })

  return (
    <div>dict</div>
  )
}

export default connect(({dict}) => ({dict}))(Dictionary);

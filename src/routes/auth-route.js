import { Route, Redirect } from "umi";
import {getConfig} from "@/config";

export default function({children, ...rest}) {
  const isAuth = localStorage.getItem(getConfig('loginTokenKey'));
  return (
    <Route {...rest}
      render={({location}) => isAuth ? children : (
        <Redirect to={{pathname: '/login', state: {from: location}}}/>
      )}
    />
  )


}

import {Route, Switch} from 'react-router-dom'
import React from 'react'
import Landing from './components/Landing/Landing'
import Vows from './components/Vows/Vows'


export default <Switch>
    {/* <Route exact path='/' component={Landing}/> */}
    <Route path ='/vows' component={Vows}/>
</Switch>
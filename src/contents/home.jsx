import React from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { Layout, Form, Icon, message, Carousel, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
const { Header, Content, Footer } = Layout;
import Helmet from "react-helmet";
import Cookie from 'react-cookies';
//顶部导航 - mobile
import Top_nav_mobile from "../components/Top_nav_mobile.jsx";

// import Hisday from '../components/hisday.jsx';
import echartsList from '../components/echartsList.jsx'
import Map_even, { Map_default, Map_plugins } from '../components/map.jsx';
import Map_markers from "../components/map_markers.jsx";
import Hisday from "../components/hisday";

class Home extends React.Component {

    componentWillMount() {
        // 代替 原 Route3 组件的 onEnter()
        // let { match, history } = this.props;
        // if (!Cookie.load("access_token")) {
        //     history.push("/")
        // }
    }

    checkout = () => {

    }
    render() {
        let this_url = this.props.match.url;
        return (
            <div>
                <Layout>
                    <Top_nav_mobile />
                    <Content>
                            <Route exact path='/home' component={echartsList} />
                            <Route exact path={`${this_url}/map`} component={Map_default} />
                            <Route exact path={`${this_url}/mapplugins`} component={Map_plugins} />
                            <Route exact path={`${this_url}/mapeven`} component={Map_even} />
                            <Route exact path={`${this_url}/mapmarkers`} component={Map_markers} />
                            <Route exact path={`${this_url}/hisday`} component={Hisday} />
                    </Content>
                </Layout>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Home)
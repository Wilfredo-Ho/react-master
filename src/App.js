import React, { Component } from 'react';
import { Layout } from 'antd';
import SRoute from './router';
import SideMenu from './components/SideMenu';
import HeaderCustom from './components/HeaderCustom';
import routesAll from './router/config';
import axios from 'axios';
import { connect } from 'react-redux';
import { setFullHeight } from './actions';
import { withRouter } from 'react-router-dom';
import './App.css';

const { Sider, Content, Footer } = Layout;

class App extends Component {
  state = {
    collapsed: false,
    menuData: []
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  componentWillMount () {
    axios.get("/data.json")
    .then(response => response.data)
    .then(res => this.setState({
      menuData: res.headerMenu
    }))
  }

  render() {
    return (
      <Layout>
        <Sider collapsed={this.state.collapsed}>
          <div className="logo"></div>
          <SideMenu theme="dark" mode="inline" menus={routesAll} />
        </Sider>
        <Layout>
          <HeaderCustom 
            title="XXX数据管理平台" 
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            data={this.state.menuData}
          />
          <Content style={{minHeight: this.props.height}}>
            <SRoute />
          </Content>
          <Footer style={{ textAlign: 'center', fontSize: 12}}>React-App &copy; { new Date().getFullYear()} Created By virgil_ho@outlook.com</Footer>
        </Layout>
      </Layout>
    );
  }
}

// const mapStateToProps = state => {
//   const { height } = state.setHeight;
//   return { height };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setHeight: height => {
//       dispatch(setFullHeight(height))
//     }
//   }
// }

export default withRouter(connect()(App));
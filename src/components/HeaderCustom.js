import React, {Component} from 'react';
import {Icon, Menu, Layout} from 'antd';

const Header = Layout.Header;

const renderMenuItem = item => (
    <Menu.Item key={item.key} disabled={item.disabled}>
        { item.icon && <Icon type={item.icon} />}
        {item.title}
    </Menu.Item>
);

const RenderMenuItemGroup = item => (
    <Menu.ItemGroup title={item.title} key={item.key}>
        { item.children.map(item => renderMenuItem(item)) }
    </Menu.ItemGroup>
);

const RenderSubMenu = item => (
    <Menu.SubMenu key={item.key}
        title={
            <span>
                { item.icon && <Icon type={item.icon} />}
                {item.title}
            </span>
        }
    >
    {
        item.children
        ? item.children.map(item => renderMenuItem(item))
        : item.group.map(item => RenderMenuItemGroup(item))
    }
    </Menu.SubMenu>
);


class HeaderCustom extends Component {
    render () {
        const { title, data } = this.props;
        return (
            <Header className="header clearfix">
                <h1 className="title float-l">
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.toggle}
                    />
                    {title}
                </h1>
                <div className="float-r">
                    <Menu mode="horizontal" style={{ lineHeight: '64px'}}>
                        {
                            data.map(item => (item.children || item.group) ? RenderSubMenu(item) : renderMenuItem(item))
                        }
                    </Menu>
                </div>
            </Header>
        )
    }
}

export default HeaderCustom;
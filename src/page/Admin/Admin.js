import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProjectOutlined,
    VideoCameraOutlined,
    MessageOutlined,
    ExportOutlined,
    UnlockOutlined,
    QuestionOutlined,
    SettingOutlined,
    SearchOutlined
} from '@ant-design/icons';

import { AiFillApple } from 'react-icons/ai';
import { Layout, Menu, Dropdown, } from 'antd';
import React, { useState } from 'react';
import { history } from '../../App';
import { Route } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Admin = (props) => {
    const { Component, ...propsRest } = props

    const [collapsed, setCollapsed] = useState(false);
    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <div onClick={() => {
                            localStorage.removeItem('USER_LOGIN')
                            localStorage.removeItem('ACCESS_TOKEN')
                            history.push('/login')
                            window.location.reload()
                        }}>
                            Log out
                        </div>
                    ),
                },
            ]}
        />
    );

    return (<Route {...propsRest} render={(propsRoute) => {
        return <Layout className='admin'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >
                    <AiFillApple className='icon' />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <ProjectOutlined />,
                            label: <span onClick={() => history.push('/admin/users')} >All users</span>,
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: <span onClick={() => history.push('/admin/form')} >Change password</span>,
                        },
                        {
                            key: '3',
                            icon: <MessageOutlined />,
                            label: <span onClick={() => history.push('/admin/userform')} >User Infomation</span>,
                        },
                        {
                            key: '4',
                            icon: <QuestionOutlined />,
                            label: 'Help',
                        },
                        {
                            key: '5',
                            icon: <SettingOutlined />,
                            label: 'Setting',
                        },
                        {
                            key: '6',
                            icon: <UnlockOutlined />,
                            label: 'Password',
                        },
                        {
                            key: '7',
                            icon: <ExportOutlined />,
                            label: 'Sign out',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className='admin_search'>
                        <SearchOutlined className='icon' />
                        <input placeholder='Search here' />
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <div className='admin_avatar'>{userLogin && userLogin.userName.toUpperCase().slice(0, 1)}</div>
                    </Dropdown>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Component {...propsRoute} />
                </Content>
            </Layout>
        </Layout>
    }} />)
};

export default Admin;

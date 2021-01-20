import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
// import 'primereact/resources/themes/luna-pink/theme.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// import 'primereact/resources/themes/saga-blue/theme.css';

class Header extends React.Component {

    loggedOutMenu = [
        {
            label: 'Our Thoughts',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.href = "/home" }
        }
    ]

    loggedInMenu = [
        {
            label: 'Our Thoughts',
            icon: 'pi pi-fw pi-home',
            command: () => { window.location.href = "/home" }
        },
        {
            label: 'My Profile',
            icon: 'pi pi-fw pi-user',
            command: () => { window.location.href = "/profile" }
        },
        {
            label: 'My Inbox',
            icon: 'pi pi-fw pi-inbox',
            command: () => { window.location.href = "/inbox" }
        },
        {
            label: 'Post A Thought',
            icon: 'pi pi-fw pi-send',
            command: () => { window.location.href = "/my-thought" }
        },
        {
            label: 'Explore Thoughts',
            icon: 'pi pi-fw pi-cloud',
            command: () => { window.location.href = "/explore-thoughts" }
        },
        {
            label: 'Resources',
            icon: 'pi pi-fw pi-heart',
            command: () => { window.location.href = "/resources" }
        },

    ]

    logoutHandler = () => {
        localStorage.clear()
        window.location.href = '/home'
    }

    render() {
        return (
            <div>
                {/* <NavLink to="/home">
                    <h1>OUR THOUGHTS</h1>
        </NavLink> */}

                {this.props.currentUser ?
                    <>
                        {/* <NavLink to={{ pathname: "/profile", aboutProps: { user: this.props.currentUser } }}>
                            <h4> {this.props.currentUser.username} </h4>
                        </NavLink>
                        <NavLink to="/inbox">
                            <h4> Inbox </h4>
                        </NavLink>
                        <NavLink to="/my-thought">
                            <h4> Post A Thought </h4>
                        </NavLink>
                        <NavLink to="/explore-thoughts">
                            <h4> Explore Thoughts </h4>
                        </NavLink>
                        <NavLink to="/resources">
                            <h4> Mental Resources </h4>
                        </NavLink> */}

                        <Menubar model={this.loggedInMenu} end={<Button label="Log Out" onClick={this.logoutHandler} />} />
                    </>
                    : <Menubar model={this.loggedOutMenu} /> }

            </div>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}
export default connect(msp)(Header)
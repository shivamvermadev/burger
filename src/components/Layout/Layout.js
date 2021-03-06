import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        }); 
    }

    render() {
        return (
            <Auxillary>
                <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler} />
                <SideDrawer 
                    open = {this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler}>
                </SideDrawer>

                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Auxillary>
        );
    }
}

export default Layout;
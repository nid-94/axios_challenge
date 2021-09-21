import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu inverted>
                <Link to="/">
                    <Menu.Item
                        name="HOME"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                    />
                </Link>
                <Link to="/user">
                    <Menu.Item
                        name="USERS"
                        active={activeItem === "messages"}
                        onClick={this.handleItemClick}
                    />
                </Link>
                <Link to="/contact">
                <Menu.Item
                    name="CONTACT"
                    active={activeItem === "friends"}
                    onClick={this.handleItemClick}
                />
                </Link>
            </Menu>
        );
    }
}

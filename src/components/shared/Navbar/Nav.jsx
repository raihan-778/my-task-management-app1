import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand to="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl text-slate-700 font-semibold dark:text-white">
          TM<sub>System</sub>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/" active={true}>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/mytask">My Tasks</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/addtask">Add Task</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/completedtask">Completed tasks</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/navbars">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

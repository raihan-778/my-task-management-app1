import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Nav = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  console.log(user.email);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Navbar className="bg-indigo-400" fluid={true} rounded={true}>
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
          <Link className="text-slate-700" to="/" active={true}>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-slate-700" to="/media" active={true}>
            Media
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-slate-700" to="/mytask">
            My Tasks
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-slate-700" to="/addtask">
            Add Task
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link className="text-slate-700" to="/completedtask">
            Completed tasks
          </Link>
        </Navbar.Link>
        {user?.email ? (
          <>
            <small>{user.email}</small>
            <Navbar.Link>
              <Button onClick={handleLogOut} className="text-slate-700">
                Log Out
              </Button>
            </Navbar.Link>
          </>
        ) : (
          <Navbar.Link>
            <Link className="text-slate-700" to="/login">
              Login
            </Link>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

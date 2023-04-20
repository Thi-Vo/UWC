import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Container,
  HeaderLeft,
  HeaderMiddle,
  LogoutBtn,
  MainHeader,
} from "./Header.styled";
import { NavLink, useParams } from "react-router-dom";

const Header = () => {
  const params = useParams();
  const ulEl = useRef(null);

  useEffect(() => {
    let el = null;
    switch (params["*"]) {
      case "backofficer":
      case "list-staffs/collectors":
      case "list-staffs/janitors":
        el = ulEl.current.querySelector("#backofficer span");
        break;
      case "work-calendar":
        el = ulEl.current.querySelector("#work-calendar span");
        break;
      case "assign-tasks":
        el = ulEl.current.querySelector("#assign-tasks span");
        break;
      case "overview-mcp":
        el = ulEl.current.querySelector("#overview-mcp span");
        break;
      default:
        break;
    }

    if (el !== null) {
      el.classList.add("active");
    }

    return () => {
      if (el && el.classList) el.classList.remove("active");
    };
  }, [params]);

  return (
    <MainHeader>
      <Container>
        <HeaderLeft>
          <NavLink to="/home/backofficer">
            <img
              src={`${process.env.REACT_APP_ENDPOINT_CLIENT}/images/logo.png`}
              alt="logo"
            />
          </NavLink>
        </HeaderLeft>
        <HeaderMiddle>
          <ul ref={ulEl}>
            <li>
              <div className="dropdown" id="backofficer">
                <span className="text">Trang chủ</span>
              </div>
              <ul className="list">
                <li>
                  <NavLink to="/home/backofficer">Home Page</NavLink>
                </li>
                <li>
                  <a href="#">View Information</a>
                  <div>
                    <FaAngleRight />
                  </div>
                  <ul className="list small-drop">
                    <li>
                      <NavLink to="/home/list-staffs/collectors">
                        Collectors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/home/list-staffs/janitors">
                        Janitors
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="dropdown" id="work-calendar">
                <NavLink
                  // to="/home/work-calendar"
                  to = "#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="text">Lịch làm việc</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="dropdown" id="assign-route">
                <NavLink
                  // to="/home/route"
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="text">Tuyến đường</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="dropdown">
                {/* <NavLink to="/chat-room" */}
                <NavLink to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="text">Tin nhắn</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="dropdown" id="overview-mcp">
                <NavLink
                  // to="/home/overview-mcp"
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="text">Tổng quan MCP</span>
                </NavLink>
              </div>
            </li>
          </ul>
        </HeaderMiddle>
        <LogoutBtn href="/" className="logout">
          LOGOUT
        </LogoutBtn>
      </Container>
    </MainHeader>
  );
};

export default Header;

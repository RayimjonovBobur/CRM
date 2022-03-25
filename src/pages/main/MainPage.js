import { accessValues } from "./../../constant/constants";
import {
  Link,
  Route,
  Routes,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Popover, Button } from "antd";
import "./mainPage.scss";
import { Footer } from "antd/es/layout/layout";
import { CompanyLogo } from "../../assets/icons/icons";
import { AllPages } from "../../Templates/pageTemplates/index";
import { PageController } from "../PageController";
import AccountPNG from "../../assets/images/Ellipse 3.png";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  startLoading,
  stopLoading,
  setPanes,
} from "../../redux/stored_reducer";

import { setData } from "../../redux/unsaved_reducer";
import BottomTabs from "../../components/Tabs/BottomTabs";
import ClientTemplate from "../../Templates/pageTemplates/ClientTemplate";
import ProgrammsTemplate from "../../Templates/pageTemplates/ProgrammesTemplate";
import ServiceTemplate from "../../Templates/pageTemplates/ServiceTemplate";
import { useSelector } from "react-redux";
import axios from "../../functions/axios";
import GlobalModal from "../../components/Modal/GlobalModal";
import InnerModal from "../../components/Modal/innerModal/InnerModal";
import { removeApiStatusLines } from "../../constant/apiLine/apiLine";
import SearchInput from "../../components/SearchInput/SearchInput";
import LocModal from "../../components/Location/LocModal";
import { GET, POST, DELETE } from "../../functions/Methods";
import { setUser } from "../../redux/auth_reducer";
import { toast, ToastContainer } from "react-toastify";
import SearchIcon from "../../components/Tabs/SearchIcon";
// Bismillahir rohmanyir rohiym!
const MainPage = () => {
  const { currentPage, Panes } = useSelector((state) => state.tabs_reducer);
  const { user } = useSelector((state) => state.auth_reducer);

  const { Header, Content } = Layout;
  // const {Option} = Select;
  const { SubMenu, Item } = Menu;
  const dispatch = useDispatch();

  const handleSetCurrentPage = (currentPage) => {
    dispatch(setCurrentPage(currentPage));
  };

  const { pathname } = useLocation();
  const navigateTo = useNavigate();
  useEffect(() => {
    dispatch(startLoading());
    let currentPage = [
      ...AllPages,
      ...ServiceTemplate?.sections,
      ...ProgrammsTemplate?.tabs,
      ...ClientTemplate?.tabs,
    ].find((page) => page.path === document.location.pathname);
    if (currentPage) {
      dispatch(setCurrentPage(currentPage));
    } else {
      navigateTo("/servis");
    }
    GET(currentPage?.mainUrl).then((res) => {
      dispatch(setData(res.data.data));
      dispatch(stopLoading());
    });
  }, []);

  useEffect(() => {
    const url = currentPage?.mainUrl;
    dispatch(setData([]));
    if (url) {
      dispatch(startLoading());
      const data = axios(
        removeApiStatusLines.includes(url)
          ? `${url}/status/${currentPage?.key}`
          : url
      );
      data
        .then((res) => {
          dispatch(setData(res.data?.data));
        })
        .then((r) => {
          dispatch(stopLoading());
        });
    }
  }, [pathname]);

  useEffect(() => {
    if (Panes.length > 7) {
      dispatch(setPanes([...Panes].splice(1, Panes.length)));
    }
  }, [Panes]);

  const handleLog_out = () => {
    DELETE(`/logout-user/${user?.id}`).then((res) => {
      if (res) {
        toast.success(res.data.message);
      }
    });
    localStorage.clear();
    dispatch(setUser(null));
  };

  const vse = [
    ...AllPages,
    ...ServiceTemplate?.sections,
    ...ProgrammsTemplate?.tabs,
    ...ClientTemplate?.tabs,
  ];

  const filterAccessKey = (array) =>
    array.filter(
      (item) =>
        user?.access.includes(100) || user?.access.includes(item.accessKey)
    );

  return (
    <Layout className="site-container">
      <ToastContainer />

      <Header className="site-header">
        <div className="header__logo">
          <CompanyLogo />
        </div>
        <Menu
          className="header__navigation"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
        >
          {/* {filterAccessKey(AllPages).map((menu, i) => */}
          {AllPages.map((menu, i) =>
            menu.submenus ? (
              <SubMenu key={i} title={menu.text}>
                {menu.submenus.map((sub, k) => (
                  <Item key={k}>
                    <Link to={sub.path}>
                      {sub.text}
                      <SearchIcon icon={menu?.icon} />
                    </Link>
                  </Item>
                ))}
              </SubMenu>
            ) : (
              <Item key={i} onClick={() => handleSetCurrentPage(menu)}>
                <NavLink
                  to={menu.path}
                  key={i}
                  className={({ isActive }) => (isActive ? "activeStyle" : "")}
                >
                  <span style={{ marginRight: "10px", marginTop: "10px" }}>
                    <SearchIcon icon={menu?.icon} />
                  </span>
                  <span>{menu.text}</span>
                </NavLink>
              </Item>
            )
          )}
        </Menu>
        <div className="header__user-profile">
          <SearchInput />
          <Popover
            placement="bottomRight"
            title={
              <div style={{ textAlign: "center" }}>
                <img
                  className="user-profile-image"
                  src={AccountPNG}
                  alt="Foydalanuvchi rasmi"
                />
                <h3>{user?.name}</h3>
              </div>
            }
            content={
              <div>
                <Button
                  type={"primary"}
                  danger
                  onClick={handleLog_out}
                  style={{ width: "100%" }}
                >
                  Tizimdan chiqish
                </Button>
              </div>
            }
            trigger="click"
          >
            <img
              className="user-profile-image"
              src={AccountPNG}
              alt="Foydalanuvchi rasmi"
            />
          </Popover>
        </div>
      </Header>
      <Content
        className="site-layout"
        id="site__loyout"
        style={{ marginTop: 64 }}
      >
        <Routes>
          {/* {filterAccessKey(vse).map((page, i) => */}
          {vse.map((page, i) =>
            page.submenus ? (
              page.submenus.map((sub, k) => (
                <Route
                  key={k}
                  path={sub.path}
                  element={<PageController page={sub} key={sub?.path} />}
                />
              ))
            ) : (
              <Route
                key={i}
                path={page.path}
                element={<PageController page={page} key={page?.path} />}
              />
            )
          )}
        </Routes>
        <GlobalModal />
        <InnerModal />
        <LocModal />
      </Content>
      <Footer className="site-footer">
        <BottomTabs />
        {/*<div className="site-footer__content">*/}
        {/*  <div className="site-footer__icons">*/}
        {/*    <GlobusIcon2 />*/}
        {/*    <TelegramIcon />*/}
        {/*  </div>*/}
        {/*  <div className="site-footer__text">*/}
        {/*    © 2021 - Барча ҳуқуқлар ҳимояланган*/}
        {/*  </div>*/}
        {/*  <div className="site-footer-clock">{currentTime}</div>*/}
        {/*</div>*/}
      </Footer>
    </Layout>
  );
};

export default MainPage;

import React from "react";
import { Layout } from "antd";
import NavBar from "../components/AntNav/NavBar";
import { Outlet } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: "100%",
  width: "100%",
  backgroundColor: "#ccc",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  height: "100%",
  width: "100%",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
  flex: 1,
};

const footerStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle: React.CSSProperties = {
  minHeight: "200vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
};

const AntPage: React.FC = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <NavBar />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};

export default AntPage;

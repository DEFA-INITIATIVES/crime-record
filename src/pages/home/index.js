import React from "react";
import Getdata from "../../components/DataTable/Getdata";
import Layout from "../../api/layout/layout";

function HomePage({ children }) {
  return (
    <Layout>
      <Getdata />
    </Layout>
  );
}

export default HomePage;

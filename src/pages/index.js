import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Rive from "@rive-app/react-canvas";
import styled from "styled-components";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background-color: rgb(244, 236, 235);

  -webkit-box-shadow: inset 0px 0px 0px 10px rgb(72, 60, 67);
  -moz-box-shadow: inset 0px 0px 0px 10px rgb(72, 60, 67);
  box-shadow: inset 0px 0px 0px 10px rgb(72, 60, 67);
`;

const ContentWrapper = styled.div`
  width: 700px;
  height: 700px;
`;

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <ContentWrapper>
        <Rive src="new_file-3.riv" />
      </ContentWrapper>
    </Wrapper>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;

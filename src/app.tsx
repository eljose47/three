import * as React from "react";
import { styled } from "styled-components";

const canvas = styled.canvas`
  height: 100%;
  width: 100%;
`;

const Main: React.FunctionComponent<MainProps> = (props) => {
  return <canvas></canvas>;
};

Main.displayName = "Main";

export default Main;

export interface MainProps {}

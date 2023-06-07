import * as React from "react";
import { styled } from "styled-components";
import { cleanup, init } from "./scene";

const Main: React.FunctionComponent<MainProps> = (props) => {
  // const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    init(document.body);

    return () => cleanup(document.body);
  });

  return <></>;
};

Main.displayName = "Main";

export default Main;

export interface MainProps {}

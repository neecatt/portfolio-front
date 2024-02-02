import { Box } from "@chakra-ui/react";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

const Frame = (props: TProps) => {
  return (
    <Box
      height={"96.5vh"}
      className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden border m-4 md:m-3 animate__animated animate__fadeIn"
    >
      {props.children}
    </Box>
  );
};

export default Frame;

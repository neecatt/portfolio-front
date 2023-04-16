import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type TProps = {
  children: React.ReactNode;
};

const Frame = (props: TProps) => {
  const [showFrame, setShowFrame] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowFrame(true);
    }, 2600);
  }, []);
  return showFrame ? (
    <Box className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden border m-4 md:m-3 animate__animated animate__fadeIn">
      {props.children}
    </Box>
  ) : null;
};

export default Frame;

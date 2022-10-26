import { Box, Flex } from "@chakra-ui/react";
import React, { Children } from "react";

export const FlexboxEdits = ({ title, data, children, ...props }) => {
  return (
    <Box
      background="#F5F5F5"
      borderRadius="10px"
      w="225px"
      padding="32px 64px"
      boxShadow="5px 4px 12px 12px rgba(0,0,0,0.05)"
      textAlign="center"
      {...props}
    >
      <p>{title}</p>
      <p>{data}</p>
      {children}
    </Box>
  );
};

import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const FlexboxEditsTwo = ({ title, data, ...props }) => {
  return (
    <Box
      background="#F5F5F5"
      w="225px"
      textAlign="center"
      padding="32px 64px"
      {...props}
    >
      <p>{title}</p>
      <p>{data}</p>
    </Box>
  );
};

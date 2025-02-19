import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Container>
      <Stack py={2} direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          P
          <Box component="span" color={"primary.main"}>
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack direction={"row"} justifyContent={"space-between"} gap={4}>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">About</Typography>
          <Typography variant="body1">Services</Typography>
          <Typography variant="body1">Contact</Typography>
          <Typography variant="body1">Login</Typography>
        </Stack>
        <Button variant="contained" component={Link} href="/login">
          Register
        </Button>
      </Stack>
    </Container>
  );
};

export default Header;

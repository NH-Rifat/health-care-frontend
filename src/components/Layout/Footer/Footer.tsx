import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17,26,34)"} py={5}>
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={4}>
          <Typography color="white">Home</Typography>
          <Typography color="white">About</Typography>
          <Typography color="white">Services</Typography>
          <Typography color="white">Contact</Typography>
          <Typography color="white">Login</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} gap={2} py={3}>
          <Image src={facebookIcon} alt={"facebook"} width={30} height={30} />
          <Image src={twitterIcon} alt={"facebook"} width={30} height={30} />
          <Image src={instagramIcon} alt={"facebook"} width={30} height={30} />
          <Image src={linkedinIcon} alt={"facebook"} width={30} height={30} />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box sx={{ border: "1px dashed lightgray" }}></Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignContent={"center"}
          gap={2}
          py={3}
        >
          <Typography component="p" color="white">
            © 2024 All Rights Reserved
          </Typography>
          <Typography
            variant="h5"
            component={Link}
            href="/"
            color="white"
            fontWeight={600}
          >
            P
            <Box component="span" color={"primary.main"}>
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

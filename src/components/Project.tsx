import { Box, Flex, Heading, Text, Link, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Project.css";
import "swiper/swiper-bundle.min.css";

import { Pagination } from "swiper";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis et auctor imperdiet, nunc nisi consectetur tellus, vitae molestie dolor tellus id diam.",
    image: "https://picsum.photos/id/1/500/300",
    link: "https://example.com/project-1",
  },
  {
    title: "Project 2",
    description:
      "Sed euismod, felis et auctor imperdiet, nunc nisi consectetur tellus, vitae molestie dolor tellus id diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/id/2/500/300",
    link: "https://example.com/project-2",
  },
  {
    title: "Project 3",
    description:
      "Vitae molestie dolor tellus id diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis et auctor imperdiet, nunc nisi consectetur tellus.",
    image: "https://picsum.photos/id/3/500/300",
    link: "https://example.com/project-3",
  },
];

function Project() {
  return <></>;
}

export default Project;

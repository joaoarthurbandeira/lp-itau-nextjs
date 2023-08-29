import React from "react";
import { Container } from "./Container";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" flex justify-between w-full min-h-[3rem] bg-primary-orange mt-8 xs:mt-0 ">
      <Container justify="justify-between">
        <div className="text-white">&copy; 2023 - All Rights Reserved.</div>
        <div className="flex flex-row justify-around  items-center gap-6 ">
          <AiOutlineInstagram
            size={30}
            className="cursor-pointer"
            color="white"
            aria-label="Instagram"
          />
          <AiOutlineFacebook
            size={30}
            className="cursor-pointer"
            color="white"
            aria-label="Facebook"
          />
          <AiOutlineTwitter
            size={30}
            className="cursor-pointer"
            color="white"
            aria-label="Twitter"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

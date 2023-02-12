import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';

import { LinksCardWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const LinksCard = (): ReactElement => (
  <LinksCardWrapper>
    <a
      href="mailto:huambenvenutti@protonmail.com"
      target="_blank"
      rel="noopener noreferrer"
      title="E-mail"
    >
      <HiOutlineMail />
      huambenvenutti@protonmail.com
    </a>

    <a
      href="https://github.com/hbenvenutti"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <BsGithub />
      @hbenvenutti
    </a>

    <a
      href="https://linkedin.com/in/huam-benvenutti"
      target="_blank"
      rel="noopener noreferrer"
      title="Linkedin"
    >
      <FaLinkedinIn /> @huam-benvenutti
    </a>

    <a
      href="https://instagram.com/hbenvenutti.dev/"
      target="_blank"
      rel="noopener noreferrer"
      title="Instagram"
    >
      <FaInstagram /> @hbenvenutti.dev
    </a>

    <a
      href="https://www.hackerrank.com/hbenvenutti"
      target="_blank"
      rel="noopener noreferrer"
      title="Hackerrank"
    >
      <SiHackerrank /> @hbenvenutti
    </a>

    <a
      href="https://www.youtube.com/@hbenvenutti"
      target="_blank"
      rel="noopener noreferrer"
      title="Youtube"
    >
      <FaYoutube /> @hbenvenutti
    </a>
    <a
      href="https://wa.me/5551995151506"
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
    >
      <FaWhatsapp /> +55 (51) 99515-1506
    </a>
  </LinksCardWrapper>
);

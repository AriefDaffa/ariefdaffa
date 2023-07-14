import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';
import type { FC } from 'react';

interface HyperlinkProps {
  size?: number;
}

const Hyperlink: FC<HyperlinkProps> = (props) => {
  const { size = 25 } = props;

  return (
    <div className="flex gap-2 mt-2 justify-center lg:justify-start">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/arief-daffa/"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <AiFillLinkedin size={size} />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <AiFillTwitterSquare size={size} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/dariiff"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <AiOutlineInstagram size={size} />
      </a>
      <a
        target="_blank"
        href="mailto: arief120801@gmail.com"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <AiOutlineMail size={size} />
      </a>
    </div>
  );
};

export default Hyperlink;

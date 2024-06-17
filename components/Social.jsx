import Link from "next/link";

import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaKaggle />, path: "" },
];
const Social = ({ containerStyles, iconStyles}) => {
  return( 
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
                </Link>
            );
        })}
    </div>
  );
};

export default Social;
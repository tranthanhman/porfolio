import React from 'react'
import { FaGithub, FaLinkedin,FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill,BsInstagram } from "react-icons/bs";
import resume from '../assets/resume.pdf'

const SocialLink = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/thanhmantran/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/tranthanhman",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:tranthanhman.dev@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: resume,
            download: true,
        },
        {
            id: 5,
            child: (
                <>
                    Facebook <FaFacebookSquare size={30} />
                </>
            ),
            href: 'https://www.facebook.com/kenlly.nguyn/',
        },
        {
            id: 6,
            child: (
                <>
                    Instagram <BsInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/_arcip__/',
            style: "rounded-br-md",
        },
    ];
    return (
        <>
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul>
                    {links.map(({ id, child, href, style, download }) => (
                        <li
                            key={id}
                            className={
                                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                                " " +
                                style
                            }
                        >
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SocialLink
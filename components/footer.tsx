import XIcon from "@mui/icons-material/X"
import YoutubeIcon from "@mui/icons-material/YouTube"
import EmailIcon from "@mui/icons-material/Email"
import Instagram  from "@mui/icons-material/Instagram"
import Link from "next/link"
import { X } from "lucide-react"



export const Footer = () => {
    const links = [
        {
            href: 'https://twitter.com',
            icon: <XIcon className="h-8 w-8"/>
        },
        {
            href: 'https://instagram.com',
            icon: <Instagram className="h-10 w-10"/>
        },
        {
            href: 'https://youtube.com',
            icon: <YoutubeIcon className="h-10 w-10"/>
        },
        {
            href: 'mailto:junkey42@gmail.com',
            icon: <EmailIcon className="h-8 w-8"/>
        },
        

    ]
    return(
        <div className="text-center pb-8">
            <div className="flex items-center justify-center space-x-4">
                {links.map((link,index) => (
                    <Link href={link.href} key={index} className="hover:opacity-45 transition duration-300">
                        {link.icon}
                    </Link>
                ))}
            </div>
            <p>Beeb. All rights reserved.</p>
        </div>
    )
}
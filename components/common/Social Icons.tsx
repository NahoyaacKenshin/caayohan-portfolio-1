import Link from "next/link";
import { SiGithub, SiFacebook } from "@icons-pack/react-simple-icons";

export default function SocialIcons() {
    return (
        <div className="flex flex-row items-center gap-3">
            <Link href="https://github.com/caayohan" target="_blank" rel="noopener noreferrer">
                <SiGithub size={20} />
            </Link>

            <Link href="https://facebook.com/caayohan" target="_blank" rel="noopener noreferrer">
                <SiFacebook size={20} />
            </Link>
        </div>  
    );
}

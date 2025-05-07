// © 2025 JoeWork.co
import { siteConfig } from "@/config/site";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  // Assuming socialLinks are defined in siteConfig similar to:
  // { github: 'https://github.com/joeworkco', twitter: '...', linkedin: '...', youtube: '...' }
  const socials = [
    { name: "GitHub", href: siteConfig.socialLinks.github, icon: Github },
    { name: "Twitter", href: siteConfig.socialLinks.twitter, icon: Twitter },
    // Add more socials like LinkedIn, YouTube if they exist in siteConfig
    // { name: 'LinkedIn', href: siteConfig.socialLinks.linkedin, icon: Linkedin },
    // { name: 'YouTube', href: siteConfig.socialLinks.youtube, icon: Youtube },
  ].filter((social) => social.href); // Filter out socials without a URL

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {/* <Image src="/joework-logo.svg" alt="JoeWork.co Logo" width={24} height={24} /> */}
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
        {socials.length > 0 && (
          <div className="flex items-center space-x-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

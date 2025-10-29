
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Logo className="h-10 w-auto" />
              <span className="font-headline font-bold text-2xl">Nexora Technologies</span>
            </Link>
            <p className="max-w-md text-secondary-foreground/80">
             Your Next Step In Digital Evolution.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#services" className="text-secondary-foreground/80 hover:text-primary">Services</Link></li>
              <li><Link href="#showcase" className="text-secondary-foreground/80 hover:text-primary">About Us</Link></li>
              <li><Link href="#testimonials" className="text-secondary-foreground/80 hover:text-primary">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg">Connect</h3>
            <div className="flex items-center gap-4 mt-4">
              <Link href="#" className="text-secondary-foreground/80 hover:text-primary">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-secondary-foreground/80 hover:text-primary">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-secondary-foreground/80 hover:text-primary">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
            <p className="mt-4 text-secondary-foreground/80">contact@nexora.tech</p>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Nexora Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

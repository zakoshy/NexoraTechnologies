
import Link from 'next/link';
import { Logo } from '@/components/logo';
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

function ContactFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-20 w-full" />
      </div>
      <Skeleton className="h-11 w-full" />
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80">
            Have a project in mind or just want to say hello? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Card className="border-secondary-foreground/10 bg-background/5 text-secondary-foreground">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-white">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-secondary-foreground/80">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-white">Location </h4>
                  <p>Mombasa, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p>nexoratechnologies.ke@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <p>+254 741 157 757 <br /> +254 792 294 870</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://x.com/EdwinOshome1274"
                    className="text-secondary-foreground/80 hover:text-primary"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/edwin-oshome-b627b52b5/"
                    className="text-secondary-foreground/80 hover:text-primary"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/zakoshy"
                    className="text-secondary-foreground/80 hover:text-primary"
                  >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.facebook.com/edwin.oshy/"
                    className="text-secondary-foreground/80 hover:text-primary"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="mb-6 font-headline text-2xl font-bold text-white">
              Send Us a Message
            </h3>
            <Suspense fallback={<ContactFormSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        <div className="mt-16 border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <Link
            href="/"
            className="mx-auto mb-4 flex w-fit items-center gap-2"
          >
            <Logo className="h-8 w-auto" />
            <span className="font-headline text-xl font-bold">
              Nexora Technologies
            </span>
          </Link>
          <p>
            &copy; {new Date().getFullYear()} Nexora Technologies. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

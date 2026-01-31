import Image from 'next/image';
import {
  Blocks,
  CodeXml,
  LayoutTemplate,
  BarChart,
  ShoppingCart,
  Lock,
  ArrowRight,
  PenTool,
  Github,
  ExternalLink,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: <CodeXml className="w-8 h-8 text-primary" />,
    title: 'Website & Web App Development',
    description:
      'We create responsive, scalable, and high-performance websites and web applications tailored to your business needs.',
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: 'Portfolio Creation',
    description:
      'Enable professionals to create and manage stunning digital portfolios that effectively showcase their work and skills.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: 'Logo Creation',
    description:
      'We design unique and memorable logos that represent your brand identity and message.',
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: 'POS Systems',
    description:
      'Develop robust Point of Sale (POS) systems with advanced features like inventory management and sales tracking.',
  },
  {
    icon: <Blocks className="w-8 h-8 text-primary" />,
    title: 'Custom Business Tools',
    description:
      'Design and build custom tools to streamline your operations, enhance productivity, and drive business growth.',
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: 'Client Portal',
    description:
      'A secure portal for clients to track project progress, communicate with the team, and access important deliverables.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: 'Analytics Dashboard',
    description:
      'Monitor website and application performance with an integrated analytics dashboard, providing actionable insights.',
  },
];

const recentWorks = [
  {
    title: 'Project Management Dashboard',
    description: 'A comprehensive dashboard for teams to track tasks, progress, and milestones in real-time.',
    image: PlaceHolderImages.find((p) => p.id === 'work1'),
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Chic Boutique E-commerce',
    description: 'A stylish and user-friendly online store for a fashion brand, complete with a secure payment gateway.',
    image: PlaceHolderImages.find((p) => p.id === 'work2'),
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'FoodieFast Delivery App',
    description: 'A mobile application that connects users with local restaurants for quick and easy food delivery.',
    image: PlaceHolderImages.find((p) => p.id === 'work3'),
    liveDemoUrl: '#',
    githubUrl: '#',
  },
];

const pricingPackages = [
  {
    title: 'Starter Site',
    price: 'From KES 45,000',
    description: 'Perfect for individuals and small businesses.',
    features: [
      'Custom Responsive Design',
      'Up to 5 Pages',
      'Contact Form',
      'Basic SEO Setup',
      'Social Media Integration',
    ],
    popular: false,
  },
  {
    title: 'Business Pro',
    price: 'From KES 90,000',
    description: 'Advanced features for growing businesses.',
    features: [
      'All features in Starter Site',
      'Up to 15 Pages',
      'Logo Design',
      'Blog & CMS Integration',
      'E-commerce Functionality (up to 20 products)',
      'Payment Gateway Integration',
    ],
    popular: true,
  },
  {
    title: 'Custom Enterprise',
    price: 'Contact Us',
    description: 'Tailored solutions for unique business needs.',
    features: [
      'All features in Business Pro',
      'Unlimited Pages & Products',
      'Custom Business Tools',
      'Advanced POS Systems',
      'Dedicated Client Portal',
      'Priority Support',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: 'Jomo K.',
    title: 'Founder, Safari Ventures',
    quote:
      "Nexora Technologies brought our app idea to life with incredible speed and precision. Their understanding of the local market is unmatched. We saw a 40% increase in user engagement.",
    avatar: 'https://picsum.photos/seed/jomo/40/40',
  },
  {
    name: 'Wanjiru M.',
    title: 'Director, Maasai Market Online',
    quote:
      "The e-commerce platform Nexora built for us is robust, secure, and easy to manage. Our sales have doubled since launch. Their team is professional and always available to help.",
    avatar: 'https://picsum.photos/seed/wanjiru/40/40',
  },
  {
    name: 'Kamau N.',
    title: 'Photographer',
    quote:
      "My new portfolio website is simply stunning. It's fast, visually appealing, and has helped me attract international clients. I couldn't be happier with the result.",
    avatar: 'https://picsum.photos/seed/kamau/40/40',
  },
  {
    name: 'Akinyi O.',
    title: 'CEO, AgriTech Solutions',
    quote:
      "The custom analytics dashboard developed by Nexora gives us real-time insights into our operations across the country. It's an invaluable tool for our growth.",
    avatar: 'https://picsum.photos/seed/akinyi/40/40',
  },
  {
    name: 'Mutua K.',
    title: 'Owner, Nairobi Coffee House',
    quote:
      "Our new POS system is a game-changer. It has streamlined our inventory and sales process, reducing errors and saving us time. Highly recommend Nexora's services.",
    avatar: 'https://picsum.photos/seed/mutua/40/40',
  },
  {
    name: 'Nyambura G.',
    title: 'Manager, Kanga Textiles',
    quote:
      "The client portal is fantastic. It has improved communication with our B2B partners and made order tracking seamless. A very professional and well-executed project.",
    avatar: 'https://picsum.photos/seed/nyambura/40/40',
  },
];

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero');
const showcaseImage = PlaceHolderImages.find((p) => p.id === 'showcase');

export default function Home() {
  return (
    <>
      <section id="home" className="relative h-[calc(100vh-4rem)] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Building the Next Generation of Digital Solutions.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Empowering Businesses for What’s Next with smart systems, modern design, and real impact.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Smart Systems. Modern Design. Real Impact.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide a complete suite of digital services to elevate your business. From web development to custom enterprise tools, we build solutions that deliver.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col text-center items-center transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl pt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Innovative Solutions, Tailored for You</h2>
            <p className="text-lg text-secondary-foreground/80">
              At Nexora, we don't just build software; we architect digital experiences. Our process is collaborative, transparent, and focused on delivering results that align with your strategic goals. We combine cutting-edge technology with user-centric design to create solutions that are not only powerful but also a pleasure to use.
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              <Link href="#contact">Learn More About Us <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            {showcaseImage && (
              <Image
                src={showcaseImage.imageUrl}
                alt={showcaseImage.description}
                data-ai-hint={showcaseImage.imageHint}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      </section>

      <section id="works" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Recent Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Check out some of the projects we're proud to have delivered.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentWorks.map((work) => (
              <Card key={work.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                {work.image && (
                  <div className="aspect-video relative">
                    <Image
                      src={work.image.imageUrl}
                      alt={work.image.description}
                      data-ai-hint={work.image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{work.title}</CardTitle>
                  <CardDescription className="text-base">{work.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0 gap-4">
                  <Button asChild className="flex-1">
                    <Link href={work.liveDemoUrl}>Live Demo <ExternalLink className="ml-2" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={work.githubUrl}>GitHub <Github className="ml-2" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Trusted by Innovators and Industry Leaders</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our clients have to say about their experience with Nexora Technologies.
            </p>
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                        <blockquote className="text-lg italic border-l-2 border-primary pl-4">"{testimonial.quote}"</blockquote>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Transparent Pricing for Every Need</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose a plan that works for you. All our packages are customizable to fit your exact requirements.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3 items-start max-w-5xl mx-auto">
            {pricingPackages.map((pkg) => (
              <Card key={pkg.title} className={cn("flex flex-col h-full", pkg.popular ? "border-primary shadow-lg" : "")}>
                {pkg.popular && <Badge className="absolute -top-3 right-4">Most Popular</Badge>}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild size="lg" className="w-full font-semibold" variant={pkg.popular ? "default" : "secondary"}>
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Elevate Your Digital Presence?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
              Let's build something amazing together. Contact us today to discuss your project and see how Nexora Technologies can help you achieve your goals.
            </p>
        </div>
      </section>
    </>
  );
}

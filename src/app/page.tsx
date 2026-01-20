
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
  {
    name: 'Kiprono C.',
    title: 'Co-founder, EdTech Innovators',
    quote:
      "Nexora's team provided a comprehensive digital strategy that aligned perfectly with our goals. Their AI consultation was spot on, guiding us to the right solutions.",
    avatar: 'https://picsum.photos/seed/kiprono/40/40',
  },
  {
    name: 'Fatuma A.',
    title: 'Logistics Head, Coastline Freight',
    quote:
      "The custom logistics tool has optimized our routing and scheduling, leading to significant cost savings. Nexora's expertise in building business tools is top-notch.",
    avatar: 'https://picsum.photos/seed/fatuma/40/40',
  },
  {
    name: 'Baraka S.',
    title: 'Artist & Designer',
    quote:
      "From the first consultation to the final launch, the experience was smooth and collaborative. They understood my artistic vision for my digital presence perfectly.",
    avatar: 'https://picsum.photos/seed/baraka/40/40',
  },
  {
    name: 'Imani W.',
    title: 'Director, Tausi Beauty',
    quote:
      "Our web app has received amazing feedback for its design and usability. Nexora Technologies delivered a world-class product that represents our brand beautifully.",
    avatar: 'https://picsum.photos/seed/imani/40/40',
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
            <Button asChild size="lg" className="font-semibold">
              <Link href="#contact">Get a Quote</Link>
            </Button>
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
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      <section id="cta" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Elevate Your Digital Presence?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
              Let's build something amazing together. Contact us today to discuss your project and see how Nexora Technologies can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="mt-8 font-semibold">
              <Link href="#contact">Get a Quote</Link>
            </Button>
        </div>
      </section>
    </>
  );
}

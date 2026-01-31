'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendReview } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { useTransition } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      sendReview(values).then((result) => {
        if (result.success) {
          toast({
            title: 'Message Sent!',
            description:
              'Thank you for your feedback. We will get back to you shortly.',
          });
          form.reset();
        } else {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description:
              result.message ||
              'There was a problem with your request. Please try again.',
          });
        }
      }).catch(() => {
        toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description:
              'There was a problem with your request. Please try again.',
          });
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary-foreground/80">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Name"
                  {...field}
                  className="border-secondary-foreground/20 bg-background/10 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary-foreground/80">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Email"
                  {...field}
                  className="border-secondary-foreground/20 bg-background/10 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary-foreground/80">
                Your Review or Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what you think..."
                  {...field}
                  className="border-secondary-foreground/20 bg-background/10 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="w-full font-semibold"
          variant="outline"
        >
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}

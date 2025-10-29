
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

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
import { handleConsultation } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

const formSchema = z.object({
  businessNeeds: z.string().min(20, {
    message: 'Please describe your business needs in at least 20 characters.',
  }),
  sector: z.string().optional(),
});

type ConsultationResult = {
  recommendations: string;
};

export function AiConsultationForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResult | null>(null);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessNeeds: '',
      sector: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await handleConsultation(values);
      if (res.error) {
        throw new Error(res.error);
      }
      setResult(res.data);
      setIsResultOpen(true);
      form.reset();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: error.message || 'Failed to get consultation. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="businessNeeds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Needs</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your goals, challenges, and what you want to achieve..."
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry / Sector (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., E-commerce, Healthcare, Finance" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? 'Analyzing...' : 'Get Recommendations'}
          </Button>
        </form>
      </Form>
      
      {result && (
        <AlertDialog open={isResultOpen} onOpenChange={setIsResultOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Nexora Recommendation</AlertDialogTitle>
              <AlertDialogDescription className="text-foreground whitespace-pre-wrap py-4">
                {result.recommendations}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setIsResultOpen(false)}>
                Close
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/Nexora Logo.jpg"
      alt="Nexora Technologies Logo"
      width={32}
      height={32}
      className={cn('h-8 w-auto rounded-full', className)}
    />
  );
}

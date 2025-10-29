
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-8 w-auto', className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      <path
        d="M23.9989 32H32L8.00106 0H0L23.9989 32Z"
        fill="url(#logoGradient)"
      />
      <path
        d="M32 0H23.9989L0 32H8.00106L32 0Z"
        fill="url(#logoGradient)"
        opacity="0.6"
      />
    </svg>
  );
}

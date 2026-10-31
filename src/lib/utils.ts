import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utilitas standar shadcn/ui: gabungkan class kondisional lalu selesaikan
// konflik utilitas Tailwind (mis. "px-2 px-4" -> "px-4").
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format rupiah gaya Indonesia: 1830000 -> "Rp 1.830.000".
export function formatIDR(value: number): string {
  return 'Rp ' + value.toLocaleString('id-ID');
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes Tailwind com suporte a merges inteligentes.
 * Aceita strings, arrays, objetos condicionais, etc.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

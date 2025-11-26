import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { clsx as clsx2 } from "clsx";
import { twMerge as twMerge2 } from "tailwind-merge";
import { twMerge as twMerge3 } from "tailwind-merge";
import { clsx as clsx3 } from "clsx";
import { ClassValue as ClassValue4, clsx as clsx4 } from "clsx";
import { twMerge as twMerge4 } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cn2(...inputs: ClassValue[]) {
  return twMerge2(clsx2(inputs));
}

export function cn3(...inputs: ClassValue[]) {
  return twMerge3(clsx3(inputs));
}

export function cn4(...inputs: ClassValue4[]) {
  return twMerge4(clsx4(inputs));
}

// src/types.d.ts
export {};

declare global {
  interface Window {
    MathJax: any; // You can be more specific with the type if you know the structure of the MathJax object
  }
}
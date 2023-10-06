import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
//import { Category } from "./category";

export type Product = {
  title?: string;
  description?: string;
  eyecatch?: MicroCMSImage;
  size?: string;
  category?: string;
  content?: string;
  gallery?: MicroCMSImage;
  price?: string;
  color?: string;
};
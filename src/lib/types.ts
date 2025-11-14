export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  images: string[];
  description: string;
  technicalSpecs: {
    micronage?: string;
    flow?: string;
    autonomy?: string;
    application?: string;
    capacity?: string;
    dimensions?: string;
    weight?: string;
    [key: string]: string | undefined;
  };
  videoUrl?: string;
  isFavorite?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  city?: string;
}

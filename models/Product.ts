export type ProductStatus = 'pending' | 'approved' | 'rejected' | 'sold';

export interface Product {
  id: string;
  user_id: string | null;
  title: string;
  price: number;
  location: string | null;
  phone_number: string | null;
  telegram_username: string | null;
  image_url: string | null;
  status: ProductStatus | null;
  views_count: number | null;
  contact_count: number | null;
  created_at: Date | null;
}

export interface CreateProductInput {
  user_id?: string | null;
  title: string;
  price: number;
  location?: string | null;
  phone_number?: string | null;
  telegram_username?: string | null;
  image_url?: string | null;
  status?: ProductStatus | null;
}

export interface UpdateProductInput {
  title?: string;
  price?: number;
  location?: string | null;
  phone_number?: string | null;
  telegram_username?: string | null;
  image_url?: string | null;
  status?: ProductStatus | null;
  views_count?: number | null;
  contact_count?: number | null;
}

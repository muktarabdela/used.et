export interface ProductView {
  id: string;
  product_id: string | null;
  viewed_at: Date | null;
}

export interface CreateProductViewInput {
  product_id?: string | null;
}

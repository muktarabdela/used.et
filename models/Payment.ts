export type PaymentStatus = 'pending' | 'verified' | 'rejected';

export interface Payment {
  id: string;
  product_id: string | null;
  amount: number;
  screenshot_url: string | null;
  status: PaymentStatus | null;
  created_at: Date | null;
}

export interface CreatePaymentInput {
  product_id?: string | null;
  amount: number;
  screenshot_url?: string | null;
  status?: PaymentStatus | null;
}

export interface UpdatePaymentInput {
  screenshot_url?: string | null;
  status?: PaymentStatus | null;
}

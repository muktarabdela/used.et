import { supabase } from '../supabase';
import { Payment, CreatePaymentInput, UpdatePaymentInput, PaymentStatus } from '../../models/Payment';

export const paymentService = {
  async getAll(): Promise<Payment[]> {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<Payment | null> {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByProductId(productId: string): Promise<Payment[]> {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('product_id', productId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getByStatus(status: PaymentStatus): Promise<Payment[]> {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async create(input: CreatePaymentInput): Promise<Payment> {
    const { data, error } = await supabase
      .from('payments')
      .insert(input)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, input: UpdatePaymentInput): Promise<Payment> {
    const { data, error } = await supabase
      .from('payments')
      .update(input)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('payments')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

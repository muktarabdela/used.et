import { supabase } from '../supabase';
import { ProductView, CreateProductViewInput } from '../../models/ProductView';

export const productViewService = {
  async getAll(): Promise<ProductView[]> {
    const { data, error } = await supabase
      .from('product_views')
      .select('*')
      .order('viewed_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<ProductView | null> {
    const { data, error } = await supabase
      .from('product_views')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByProductId(productId: string): Promise<ProductView[]> {
    const { data, error } = await supabase
      .from('product_views')
      .select('*')
      .eq('product_id', productId)
      .order('viewed_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async create(input: CreateProductViewInput): Promise<ProductView> {
    const { data, error } = await supabase
      .from('product_views')
      .insert(input)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('product_views')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

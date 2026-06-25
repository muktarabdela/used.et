import { supabase } from '../supabase';
import { Product, CreateProductInput, UpdateProductInput, ProductStatus } from '../../models/Product';

export const productService = {
  async getAll(): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByUserId(userId: string): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getByStatus(status: ProductStatus): Promise<Product[]> {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async create(input: CreateProductInput): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .insert(input)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, input: UpdateProductInput): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update(input)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async incrementViews(id: string): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update({ views_count: supabase.raw('views_count + 1') })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async incrementContactCount(id: string): Promise<Product> {
    const { data, error } = await supabase
      .from('products')
      .update({ contact_count: supabase.raw('contact_count + 1') })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

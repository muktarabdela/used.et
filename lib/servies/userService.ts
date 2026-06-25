import { supabase } from '../supabase';
import { User, CreateUserInput, UpdateUserInput } from '../../models/User';

export const userService = {
  async getAll(): Promise<User[]> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getById(id: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async getByPhoneNumber(phoneNumber: string): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('phone_number', phoneNumber)
      .single();
    
    if (error) throw error;
    return data;
  },

  async create(input: CreateUserInput): Promise<User> {
    const { data, error } = await supabase
      .from('users')
      .insert(input)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async update(id: string, input: UpdateUserInput): Promise<User> {
    const { data, error } = await supabase
      .from('users')
      .update(input)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

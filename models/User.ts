export type UserStatus = 'pending' | 'approved' | 'rejected' | 'sold';

export interface User {
  id: string;
  phone_number: string;
  created_at: Date | null;
  full_name: string | null;
}

export interface CreateUserInput {
  phone_number: string;
  full_name?: string | null;
}

export interface UpdateUserInput {
  full_name?: string | null;
}

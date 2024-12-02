import axios from 'axios';

const api = axios.create({
  baseURL: 'https://davidwaga.pythonanywhere.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('blog_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
}

export interface CreatePostData {
  title: string;
  content: string;
}

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post('/login', credentials);
    return response.data;
  },
  register: async (credentials: RegisterCredentials) => {
    const response = await api.post('/register', credentials);
    return response.data;
  },
  logout: async () => {
    try {
      const token = localStorage.getItem('blog_token');
      if (!token) {
        throw new Error('No authentication token found');
      }
      const response = await api.post('/logout');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        // If unauthorized, still clear local storage
        localStorage.removeItem('blog_token');
        return { success: true };
      }
      throw error;
    }
  },
};

export const postsApi = {
  getPosts: async () => {
    const response = await api.get('/post');
    return response.data;
  },
  createPost: async (data: CreatePostData) => {
    const response = await api.post('/post', data);
    return response.data;
  },
  getPost: async (id: string) => {
    const response = await api.get(`/post/${id}`);
    return response.data;
  },
};
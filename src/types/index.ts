// Define the structure for a product item
export interface Product {
  id: number; // Assuming numeric IDs for simplicity
  name: string;
  description: string;
  price: number;
  imageUrl?: string; // Optional image URL
  category?: 'pizza' | 'side' | 'drink'; // Optional category
}

// Define the structure for an item in the shopping cart
export interface CartItem {
  id: number;
  quantity: number;
}

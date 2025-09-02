// Product
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean
}

// CartItem
export interface CartItem {
  productId: string;
  quantity: number;
}

// OrderItem
export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
}

// Order
export interface Order {
  id: string;
  customerName: string;
  email: string;
  shippingAddress: string;
  items: OrderItem[];
  total: number;
}

export type Sort = "Price-Asc" | "Price-Desc" | "None";

export type Category =
  | "Panels"
  | "Charge Controllers"
  | "Batteries"
  | "Inverters"
  | "Mounting"
  | "Monitoring"
  | "Appliances";
export type CategoryOptions = "All"|Category;


export type CartLine = {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  quantity: number;
};

export type CartState = {
  items: Record<string, CartLine>;                 
  addItem: (p: Product, qty?: number) => void;
  removeItem: (id: Product["id"]) => void;          
  clearCart: () => void;                           
  getTotal: () => number;                        
};
export enum Category {
  VENUE = "婚宴酒店",
  DECOR = "婚礼布置",
  DRESS = "婚纱礼服",
  PHOTO = "婚纱摄影",
  STAFF = "四大金刚 (司仪/化妆)",
  RINGS = "珠宝首饰",
  TRANSPORT = "婚车租赁",
  MENUS = "婚宴菜单"
}

export interface VendorStyle {
  name: string;
  image: string;
  description?: string;
}

export interface VendorPackage {
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface Vendor {
  id: string;
  name: string;
  category: Category;
  location: string; // Format: "Province-City-District" or just "City"
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  contact: {
    phone: string;
    email: string;
  };
  externalLinks?: {
    meituan?: string;
    xiaohongshu?: string;
    douyin?: string;
  };
  styles?: VendorStyle[];
  packages?: VendorPackage[];
}

export interface CartItem extends Vendor {
  addedAt: number;
}

export interface AIPackageSuggestion {
  title: string;
  totalEstimatedPrice: number;
  description: string;
  items: {
    category: string;
    suggestion: string;
    estimatedPrice: number;
    reason: string;
  }[];
}

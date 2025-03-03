export type TypeHeaderProps = {
  isMenuClose: boolean;
  setIsMenuClose: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TypeMenuProps = {
  isMenuClose: boolean;
};

export type TypeMenuConfigResponse = {
  title: string;
  subMenuItems: {
    title: string;
    dropdown?: { title: string }[];
  }[];
}[];

export type TypeBaseResponse<T> = {
  success: boolean;
  result: {
    response: T;
    message: string;
  };
};

export type TypeProduct = {
  id: string;
  storeId: string;
  name: string;
  slu: string;
  sku: string;
  description: string;
  quantity: string; // Assuming quantity is stored as a string, change to number if it's actually numeric
  price: number;
  unit: string;
  imageUrls: string[]; // Array of image URLs
  categoryId: string;
  brandId: string;
  manufacturedDate: string;
  expiryDate: string;
};

export type TypeProductListResponse = {
  id: string;
  storeId: string;
  name: string;
  slu: string;
  sku: string;
  description: string;
  quantity: string; // Assuming quantity is stored as a string, change to number if it's actually numeric
  price: number;
  unit: string;
  imageUrls: string[]; // Array of image URLs
  categoryId: string;
  brandId: string;
  manufacturedDate: string;
  expiryDate: string;
};

export type TypeProductTableProps = {
  isLoading: boolean;
  productList: TypeProduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns?: any;
};

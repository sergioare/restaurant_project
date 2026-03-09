type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  description: string;
  badge?: string;
  rating: number;
  className?: string;
  handleClick?: () => void;
};

export type { ProductCardProps };

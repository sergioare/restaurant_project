import { Input } from "@/components/atoms/CustomInput";
import { CustomInputProps } from "@/components/atoms/CustomInput/customInput.model";
import Select from "@/components/atoms/Select";
import { SelectProps } from "@/components/atoms/Select/select.model";
import { Typography } from "@/components/atoms/Typography";
import DetailProduct from "@/components/molecules/DetailProduct";
import { ProductCard } from "@/components/molecules/ProductCard";
import Tabs from "@/components/molecules/Tabs";
import { Product } from "@/services/models/product";
import useProductStore from "@/store/products/products.store";

import LandingStyles from "./landing.styles";
import { foodTabs } from "./landing.utils";

type LandingProps = {
  searchInput: CustomInputProps;
  selectProps: SelectProps;
};

const LandingComponent = ({ searchInput, selectProps }: LandingProps) => {
  const {
    toggleProductDetail,
    setSelectedProduct,
    activeCategory,
    setActiveCategory,
    paginatedProducts,
    selectedProduct,
  } = useProductStore();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    toggleProductDetail();
  };

  return (
    <>
      <div className="landing__filters">
        <Tabs
          tabs={foodTabs}
          activeTab={activeCategory}
          onChange={setActiveCategory}
        />
        <div className="landing__filters--sort">
          <div className="landing__filters--sort-left">
            <Typography variant="p2" weight="semibold">
              Sort by :
            </Typography>
            <div>
              <Select {...selectProps} />
            </div>
          </div>
          <div>
            <Input {...searchInput} />
          </div>
        </div>
      </div>

      <div className="landing__products">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            badge={product.badge}
            rating={product.stats.rating}
            handleClick={() => handleProductClick(product)}
          />
        ))}
      </div>
      <DetailProduct key={selectedProduct?.id} />
      <style jsx>{LandingStyles}</style>
    </>
  );
};

export default LandingComponent;

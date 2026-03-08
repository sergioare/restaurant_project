import { Input } from "@/components/atoms/CustomInput";
import { CustomInputProps } from "@/components/atoms/CustomInput/customInput.model";
import Select from "@/components/atoms/Select";
import { SelectProps } from "@/components/atoms/Select/select.model";
import { Typography } from "@/components/atoms/Typography";
import { ProductCard } from "@/components/molecules/ProductCard";
import Tabs from "@/components/molecules/Tabs";
import useProductStore from "@/store/products/products.store";
import { theme } from "@/utils/ThemeProvider";

import LandingStyles from "./landing.styles";
import { foodTabs } from "./landing.utils";

type LandingProps = {
  searchInput: CustomInputProps;
  selectProps: SelectProps;
};

const { colors } = theme;

const LandingComponent = ({ searchInput, selectProps }: LandingProps) => {
  const activeCategory = useProductStore((s) => s.activeCategory);
  const setActiveCategory = useProductStore((s) => s.setActiveCategory);
  const paginatedProducts = useProductStore((s) => s.paginatedProducts);

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
            title={product.title}
            price={product.price}
            description={product.description}
            badge={product.badge}
          />
        ))}
      </div>

      <style jsx>{LandingStyles}</style>
    </>
  );
};

export default LandingComponent;

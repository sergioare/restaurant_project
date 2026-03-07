import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { theme } from "@/utils/ThemeProvider";

import TabsStyles from "./tabs.styles";

type TabOption<T> = {
  value: T;
  label: string;
};

type TabsProps<T> = {
  tabs: readonly TabOption<T>[];
  activeTab: T;
  onChange: (tab: T) => void;
};

const { colors } = theme;

function TabsComponent<T extends string>({
  tabs,
  activeTab,
  onChange,
}: TabsProps<T>) {
  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            variant="outlined"
            className={`${activeTab === tab.value ? "active__tabs" : ""}`}
            onClick={() => onChange(tab.value)}
          >
            <Typography
              variant="p2"
              weight="semibold"
              color={
                activeTab === tab.value
                  ? colors.primary[100]
                  : colors.primary[900]
              }
            >
              {tab.label}
            </Typography>
          </Button>
        ))}
      </div>
      <style jsx>{TabsStyles}</style>
    </>
  );
}

export default TabsComponent;

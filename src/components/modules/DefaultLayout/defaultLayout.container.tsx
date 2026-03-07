import DefaultLayoutComponent from "./defaultLayout.component";
import { DefaultLayoutProps } from "./defaultLayout.model";

const DefaultLayoutContainer = ({ children }: DefaultLayoutProps) => (
  <DefaultLayoutComponent>{children}</DefaultLayoutComponent>
);

export default DefaultLayoutContainer;

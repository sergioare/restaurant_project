"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { useAppContext } from "@/context/appContext";
import useCartStore from "@/store/cart/cart.store";
import { theme } from "@/utils/ThemeProvider";

import HeaderStyles from "./header.styles";

const { colors } = theme;

const HeaderComponent = () => {
  const { user } = useAppContext();
  const toggleCart = useCartStore((s) => s.toggleCart);
  const isCartOpen = useCartStore((s) => s.isOpen);

  return (
    <>
      <header className="navbar">
        <nav className="navbar__content">
          <Link href="/" passHref>
            <div className="navbar__branding">
              <div className="navbar__icon">
                <Image
                  src="/sun_ku_wok_logo.svg"
                  alt="logo"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <Typography
                  variant="h5"
                  weight="bold"
                  color={colors.primary[900]}
                >
                  Sun Fu Wok
                </Typography>
                <Typography variant="p2" color={colors.primary[400]}>
                  Fresh • Bold • Made to Order
                </Typography>
              </div>
            </div>
          </Link>

          <div className="navbar__right">
            <Button
              variant="outlined"
              size="medium"
              className={`${isCartOpen ? "active__cart" : ""}`}
              icon={
                <ShoppingCartOutlinedIcon
                  style={{
                    color: isCartOpen ? colors.primary[100] : colors.gray[400],
                    width: 20,
                    height: 20,
                  }}
                />
              }
              onClick={toggleCart}
            ></Button>

            <Divider orientation="vertical" flexItem />
            <Avatar
              src={user?.profilePicture}
              sx={{ width: 40, height: 40, bgcolor: "transparent" }}
            >
              <AccountCircleIcon
                sx={{
                  color: colors.gray[400],
                  width: "fit-content",
                  height: "fit-content",
                }}
              />
            </Avatar>
            <div className="navbar__right__menu">
              <div className="navbar__right__menu--user">
                <Typography
                  variant="p2"
                  color={colors.gray[500]}
                  weight="semibold"
                >
                  {user?.name}
                </Typography>
              </div>
              <ArrowDown
                style={{
                  color: colors.gray[500],
                  width: 20,
                  height: 20,
                }}
              />
            </div>
          </div>
        </nav>
      </header>

      <style jsx>{HeaderStyles}</style>
    </>
  );
};

export default HeaderComponent;

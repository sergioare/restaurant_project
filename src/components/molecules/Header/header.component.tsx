"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import ArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar, Divider } from "@mui/material";
import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { useAppContext } from "@/context/appContext";
import { theme } from "@/utils/ThemeProvider";

import HeaderStyles from "./header.styles";

const { colors } = theme;

const HeaderComponent = () => {
  const { user } = useAppContext();

  return (
    <>
      <header className="navbar">
        <nav className="navbar__content">
          <Link href="/" passHref>
            <div className="navbar__branding">
              <div className="navbar__icon">
                <FoodBankOutlinedIcon
                  style={{
                    color: colors.buttons.orange,
                    width: 40,
                    height: 40,
                  }}
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
              icon={
                <ShoppingCartOutlinedIcon
                  style={{
                    color: colors.gray[400],
                    width: 20,
                    height: 20,
                  }}
                />
              }
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

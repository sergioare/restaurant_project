"use client";
import { useEffect, useState } from "react";

import { Card } from "@/components/atoms/Card";
import { Input } from "@/components/atoms/CustomInput";
import { Typography } from "@/components/atoms/Typography";
import { getSoonestAvailableDate } from "@/utils/constants/time";
import { theme } from "@/utils/ThemeProvider";

import CheckoutStyles from "../checkout.styles";

type UserData = {
  name: string | undefined;
  phone: string | undefined;
  email: string | undefined;
};

const { colors } = theme;

const PickUpLocation = () => {
  const [pickupType, setPickupType] = useState<"soonest" | "future">("soonest");
  const [soonestDate, setSoonestDate] = useState(getSoonestAvailableDate());
  const [userData, setUserData] = useState<UserData>({
    name: undefined,
    phone: undefined,
    email: undefined,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSoonestDate(getSoonestAvailableDate());
    }, 3000000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="checkout__main">
        <Card>
          <div className="section__header">
            <Typography variant="p2" weight="bold">
              PICKUP LOCATION
            </Typography>
          </div>

          <div className="section__content">
            <div className="location__group">
              <Typography variant="p3" weight="bold" color={colors.gray[500]}>
                LOCATION
              </Typography>
              <div className="location__address-box">
                <Typography variant="p2" weight="bold">
                  PAYSON
                </Typography>
                <Typography variant="p3" color={colors.gray[500]}>
                  791 S 930 W
                </Typography>
                <Typography variant="p3" color={colors.gray[500]}>
                  Payson, UT 84651
                </Typography>
              </div>
            </div>

            <div className="form__group">
              <Typography variant="p3" weight="bold" color={colors.gray[500]}>
                SELECT DATE & TIME
              </Typography>
              <div
                className={`radio__row ${pickupType === "soonest" ? "--selected" : ""}`}
                onClick={() => setPickupType("soonest")}
              >
                <div className="selection-indicator --single">
                  {pickupType === "soonest" && (
                    <div className="indicator-dot" />
                  )}
                </div>
                <Typography variant="p3" weight="bold">
                  SOONEST AVAILABLE:
                </Typography>
              </div>

              <div className="datetime__details">
                <Typography variant="p2">📅 {soonestDate.dateLabel}</Typography>
                <Typography variant="p2">🕒 {soonestDate.timeLabel}</Typography>
              </div>
            </div>

            <div className="form__group">
              <Typography variant="p3" weight="bold" color={colors.gray[500]}>
                PICKUP INFO
              </Typography>
              <div className="pickup__fields-grid">
                <Input
                  placeholder="Name"
                  value={userData.name}
                  onChange={(value: string) =>
                    setUserData({ ...userData, name: value })
                  }
                />
                <Input
                  placeholder="Phone"
                  value={userData.phone}
                  onChange={(value) =>
                    setUserData({ ...userData, phone: value })
                  }
                />
                <Input
                  placeholder="Email"
                  value={userData.email}
                  onChange={(value) =>
                    setUserData({ ...userData, email: value })
                  }
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
      <style jsx>{CheckoutStyles}</style>
    </>
  );
};

export default PickUpLocation;

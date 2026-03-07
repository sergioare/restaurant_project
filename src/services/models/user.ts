type BaseUser = {
  _id: string;
  profilePicture?: string;
  name: string;
  email: string;
  diallingCode?: number;
  phoneNumber?: number;
  createdAt: string;
  updatedAt: string;
};

export type { BaseUser };

export const userService = {
  getUser: async () => {
    await new Promise((res) => setTimeout(res, 300));
    const data = {
      data: {
        _id: "2816ca21-a551-4cd6-8f8d-2af3b1ed859c",
        profilePicture: "https://i.pravatar.cc/150?u=ent3",
        name: "Mateo Villalobos",
        email: "m.villalobos@example.com",
        diallingCode: 52,
        phoneNumber: 5512345678,
        createdAt: "2026-03-01T14:20:00.000Z",
        updatedAt: "2026-03-05T09:15:30.000Z",
      },
    };
    return data;
  },
};

export default userService;

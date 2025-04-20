export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record

type descriptionType = Record<UserRole, string>;

const RoleDescription: descriptionType = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

export {};

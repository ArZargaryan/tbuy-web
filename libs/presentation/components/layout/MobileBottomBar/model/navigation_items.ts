import { ImgExporter } from "@core/helpers/ImgExporter";

const { Icons } = ImgExporter;

export const navigation_items = [
  {
    icon: Icons.SearchWithList
  },
  {
    route: "/account/support",
    icon: Icons.Support
  },
  {
    route: "/account/notifications",
    icon: Icons.Notifications,
    badgeContent: 2
  },
  {
    route: "/my_profile",
    icon: Icons.Profile
  },
  {
    route: "/shop",
    icon: Icons.Cart,
    badgeContent: 2
  }
];

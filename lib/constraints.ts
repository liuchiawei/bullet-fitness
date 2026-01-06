import {
  Calendar,
  Tag,
  User,
  Users,
  Home,
  Layout,
  Settings,
  Instagram,
  Facebook,
  Info,
} from "lucide-react";

// 商店基本設定
export const STORE_CONFIG = {
  name: "Bullet Fitness",
  subtitle: "子彈骵能空間",
  catchphrase: "沒有青春紅利， 沒有濾鏡， 只有把訓練一項一項做到位。",
  description: [
    "沒有青春紅利， 沒有濾鏡， 只有把訓練一項一項做到位。",
    "私人健身教練 | 私人拳擊教練 | 私人泰拳教練 | 小班制團課 | 場地租借",
  ],
  since: 2022,
  phone: "0976 516 925",
  email: "hello@bulletfitness.com",
  address: "220新北市板橋區中山路二段531巷17弄1號",

  // 營業時間
  businessHours: {
    open: 10, // 10:00
    close: 21, // 21:00
  },

  // 公休日（空陣列表示無公休）
  // 0 = 星期日, 1 = 星期一, ..., 6 = 星期六
  closedDays: [] as number[],
} as const;

// クイックリンク設定
export const PAGE_LINKS = [
  { label: "首頁", href: "/", icon: Home },
  { label: "課程表", href: "/schedule", icon: Calendar },
  { label: "關於子彈", href: "/about", icon: Info },
  { label: "教練介紹", href: "/coach", icon: User },
];

// ソーシャルリンク設定
// icon: lucide-react のアイコン名を指定
export const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/bulletfitness_rectify/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/people/%E5%AD%90%E5%BD%88%E9%AA%B5%E8%83%BD%E7%A9%BA%E9%96%93-Bullet-fitness/100064206935212/#",
  },
];

export type DashboardTab = "events" | "categories" | "users";

export const dashboardNavigationItems: Array<{
  id: DashboardTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    id: "events",
    label: "活動管理",
    icon: Calendar,
  },
  {
    id: "categories",
    label: "類型管理",
    icon: Tag,
  },
  {
    id: "users",
    label: "會員管理",
    icon: Users,
  },
];

// 型別定義
export type StoreConfig = typeof STORE_CONFIG;
export type BusinessHours = typeof STORE_CONFIG.businessHours;
export type PageLink = (typeof PAGE_LINKS)[number];
export type SocialLink = (typeof SOCIAL_LINKS)[number];

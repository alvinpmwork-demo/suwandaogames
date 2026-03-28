import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "速玩岛 - 免费在线小游戏，无需下载即点即玩",
  description: "速玩岛提供海量免费在线小游戏，无需下载，即点即玩。动作、益智、竞速、射击等多种类型，支持手机电脑双端。",
  keywords: "小游戏,在线游戏,免费游戏,HTML5游戏,手机游戏,休闲游戏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}

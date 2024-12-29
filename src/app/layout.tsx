import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '派對懲罰抽籤遊戲',
  description: '一個有趣的派對遊戲工具，可以隨機抽取各種有趣的懲罰任務。適合在派對、聚會場合使用，讓你的派對更加歡樂有趣！',
  keywords: '派對遊戲,懲罰遊戲,聚會遊戲,派對活動,抽籤遊戲',
  openGraph: {
    title: '派對懲罰抽籤遊戲',
    description: '讓你的派對更加歡樂的懲罰抽籤遊戲！',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
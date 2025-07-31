import './globals.css'
import Navbar from '../components/Navbar'

import LeftSidebar from '../components/LeftSidebar'

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal Website Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        <div className="max-w-[1400px] mx-auto px-8 relative">
          {/* 始终显示 Navbar */}
          <Navbar />

          {/* 页面主体结构：大屏侧边栏，小屏上方块 */}
          <div className="pt-24 h-[720px] flex flex-col xl:flex-row gap-6">
            {/* LeftSidebar：在大屏显示在左边，小屏显示在上方（组件内部处理） */}
            <LeftSidebar />

            {/* 主内容区域 */}
            <div className="flex-1 px-4 pb-14">{children}</div>
          </div>

        
        </div>
      </body>
    </html>
  )
}

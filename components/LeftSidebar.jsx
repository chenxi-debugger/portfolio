// components/LeftSidebar.jsx
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../public/avatar.jpg'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { FaPaperPlane } from 'react-icons/fa6'

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-6">
      <div className="text-cyan-400">{icon}</div>
      <div className="text-sm">
        <div className="text-gray-400">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  )
}

export default function LeftSidebar() {
  return (
    <aside className="bg-[#1e293b] p-6 rounded-lg shadow-lg w-full xl:max-w-[360px] relative ">
      {/* 小屏显示 Show Contacts 按钮 */}
      <div className="absolute top-4 right-4 block xl:hidden">
        <Link
          href="/contact"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg shadow hover:bg-cyan-600 hover:text-white text-lg"
        >
          <FaPaperPlane />
          Show Contacts
        </Link>
      </div>

      <div className="flex justify-center pt-4 mb-10">
        <Image
          src={avatar}
          alt="Avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      <h2 className="text-center text-xl font-bold mt-10">Chenxi Zhuang</h2>
      <p className="text-center text-base text-gray-400 mt-6">Web developer</p>

      {/* InfoItem：仅在 lg 以上显示 */}
      <div className="mt-12 space-y-12 hidden xl:block ">
        <InfoItem icon={<FaEnvelope />} label="EMAIL" value="chenxi.debugger@gmail.com" />
        <InfoItem icon={<FaPhone />} label="PHONE" value="+1 (408) 807-4536" />
        <InfoItem icon={<FaMapMarkerAlt />} label="LOCATION" value="Santa Clara, California, USA" />
      </div>
    </aside>
  )
}

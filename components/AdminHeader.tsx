import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
  return (
    <header className="admin-header mb-2">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo.full.white.large.png"
            height={1000}
            width={1000}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
  )
}

export default AdminHeader
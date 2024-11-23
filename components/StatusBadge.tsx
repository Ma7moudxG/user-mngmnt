import { StatusIcon } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

export type StatusType = 'pending' | 'invited' | 'active' | 'expiring' | 'deactivated';

const StatusBadge = ({ status }: { status: StatusType }) => {
  return (
    <div className={clsx('status-badge', {
      'bg-blue-600': status === 'pending',
      'bg-green-600': status === 'invited',
        'bg-[#3D3713]': status === 'active',
        'bg-[#553119]': status === 'expiring',
        'bg-red-600': status === 'deactivated',
    })}>
        <Image 
            src={StatusIcon[status]}
            width={24}
            height={24}
            alt={status}
            className='h-fit w-3 text-white'
        />
        <p className={clsx('text-12-semibold capitalize text-gray-300')}>{status}</p>
    </div>
  )
}

export default StatusBadge
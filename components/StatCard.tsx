import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface StatCardProps {
  type: 'pending' | 'invited' | 'active' | 'expiring' | 'deactivated';
  count: number;
  label: string;
  icon: string;
  onClick?: () => void; // Add the onClick prop
}

const StatCard = ({ count = 0, label, icon, type, onClick }: StatCardProps) => {
  return (
    <div
      onClick={onClick} // Add the onClick handler
      className={clsx('stat-card cursor-pointer', {
        'bg-pending': type === 'pending',
        'bg-invited': type === 'invited',
        'bg-active': type === 'active',
        'bg-deactivated': type === 'deactivated',
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt={label}
          className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>
      <p className="text-14-regular">{label}</p>
    </div>
  );
};

export default StatCard;

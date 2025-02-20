'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui';
import { Menu } from 'lucide-react';
import { routes } from '../constants';
import { useRouter } from 'next/navigation';

export const MenuLinks = () => {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full border border-black p-2 dark:border-white">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] rounded-lg">
        {routes.map((item) => (
          <DropdownMenuItem
            onClick={handleClick.bind(null, item.href)}
            className="p-2"
            key={item.name}
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

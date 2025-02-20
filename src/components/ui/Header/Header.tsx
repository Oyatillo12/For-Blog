import { Container } from '@/components/reusables';
import React from 'react';
import { ToggleTheme } from './ToggleTheme';
import { MenuLinks } from './MenuLinks';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="pb-20">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="text-xl font-bold">
          Icon for Logo
        </Link>
        <MenuLinks />
        <ToggleTheme />
      </Container>
    </header>
  );
};

'use client';

import { Button } from '@/shared/ui';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import { THEMES } from '../constants';

export const ToggleTheme = () => {
  const { setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    );
  };
  return (
    <Button onClick={handleChangeTheme} size={'lg'}>
      <Moon className="hidden dark:inline-block" />
      <Sun className="inline-block dark:hidden" />
    </Button>
  );
};

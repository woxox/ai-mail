'use client';

import clsx from 'clsx';
import { useState } from 'react';

import { Box } from '@/components/atoms/Box';
import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';
import { baseToken, baseTokenClass, darkThemeClass, lightThemeClass } from '@/theme/theme.css';

import './global-style.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <body className={clsx(baseTokenClass, darkMode ? darkThemeClass : lightThemeClass)}>
      <Box>
        <Text fontSize="24">darkMode: {String(darkMode)}</Text>
      </Box>
      <Box padding="2" display="flex" gap="4">
        <Button variant="outlined" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
        <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
          Button
        </Button>
        <Button variant="outlined" disabled>
          Button
        </Button>
        <Button variant="contained" disabled>
          Button
        </Button>
      </Box>
    </body>
  );
}

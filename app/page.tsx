'use client';
import { ContextScreen } from '@/components/ContextScreen/ContextScreen';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Group, useMantineTheme } from '@mantine/core';

export default function HomePage() {
  const theme = useMantineTheme();
  return (
    <Group grow preventGrowOverflow={false} wrap="nowrap" bg={theme.colors.dark[0]}>
      <Sidebar />
      <ContextScreen />
    </Group>
  );
}

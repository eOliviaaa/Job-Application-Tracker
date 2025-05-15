'use client';
import { Paper, Title, useMantineTheme } from "@mantine/core";

export function Sidebar() {
    const theme = useMantineTheme();
    return(
        <Paper shadow="md" w={"25%"} h={"97vh"} m={"1rem"} mr={"0"} bg={theme.colors.gray[0]}>
            <Title m={"sm"} ta={"center"}>Job application tracker</Title>
        </Paper>
    );
}
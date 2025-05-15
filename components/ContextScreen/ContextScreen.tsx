'use client';
import { Paper, Title, useMantineTheme } from "@mantine/core";

export function ContextScreen() {
    const theme = useMantineTheme();
    return(
        <Paper shadow="md" w={"75%"} h={"97vh"} m={"1rem"} ml={"0"} bg={theme.colors.gray[0]}>
            
        </Paper>
    );
}
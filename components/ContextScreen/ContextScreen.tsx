'use client';
import { Paper, useMantineTheme, Table, TableData } from "@mantine/core";

export function ContextScreen() {
    const theme = useMantineTheme();

    const tableData: TableData = {
        head: ['Company', 'Response', 'Comment'],
        body: [
            ['test', 'test', 'test'],
            ['test', 'test', 'test'],
        ]  
    }

    return(
        <Paper shadow="md" w={"75%"} h={"97vh"} m={"1rem"} ml={"0"} bg={theme.colors.gray[0]}>
            <Table data={tableData} />
        </Paper>
    );
}
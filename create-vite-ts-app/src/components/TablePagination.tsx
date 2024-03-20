import React from 'react';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
    PaginationState,
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    flexRender,
    SortingState,
} from '@tanstack/react-table';
import fetchData from '../data/fetchData';
import { Person } from '../models/Person';
import {
    Box,
    Button,
    Flex,
    Input,
    Select,
    Spacer,
    Stack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Wrap,
} from '@chakra-ui/react';
export default function TablePaginationComponent() {
    const rerender = React.useReducer(() => ({}), {})[1];

    const columns = React.useMemo<ColumnDef<Person>[]>(
        () => [
            {
                header: 'Name',
                footer: (props) => props.column.id,
                columns: [
                    {
                        accessorKey: 'firstName',
                        cell: (info) => info.getValue(),
                        footer: (props) => props.column.id,
                    },
                    {
                        accessorFn: (row) => row.lastName,
                        id: 'lastName',
                        cell: (info) => info.getValue(),
                        header: () => <span>Last Name</span>,
                        footer: (props) => props.column.id,
                    },
                ],
            },
            {
                header: 'Info',
                footer: (props) => props.column.id,
                columns: [
                    {
                        accessorKey: 'age',
                        header: () => 'Age',
                        footer: (props) => props.column.id,
                    },
                    {
                        header: 'More Info',
                        columns: [
                            {
                                accessorKey: 'visits',
                                header: () => <span>Visits</span>,
                                footer: (props) => props.column.id,
                            },
                            {
                                accessorKey: 'status',
                                header: 'Status',
                                footer: (props) => props.column.id,
                            },
                            {
                                accessorKey: 'progress',
                                header: 'Profile Progress',
                                footer: (props) => props.column.id,
                            },
                        ],
                    },
                ],
            },
        ],
        []
    );

    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const dataQuery = useQuery({
        queryKey: ['data', pagination],
        queryFn: () => fetchData(pagination),
        placeholderData: keepPreviousData, // don't have 0 rows flash while changing pages/loading next page
    });

    const defaultData = React.useMemo(() => [], []);

    const table = useReactTable({
        data: dataQuery.data?.rows ?? defaultData,
        columns,
        // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
        rowCount: dataQuery.data?.rowCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
        state: {
            pagination,
            sorting,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true, //we're doing manual "server-side" pagination
        // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
        debugTable: true,
        onSortingChange: setSorting,
    });

    return (
        <Stack direction={'column'}>
            <Table>
                <Thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className={
                                                    header.column.getCanSort()
                                                        ? 'cursor-pointer select-none'
                                                        : ''
                                                }
                                                onClick={header.column.getToggleSortingHandler()}
                                                title={
                                                    header.column.getCanSort()
                                                        ? header.column.getNextSortingOrder() ===
                                                          'asc'
                                                            ? 'Sort ascending'
                                                            : header.column.getNextSortingOrder() ===
                                                              'desc'
                                                            ? 'Sort descending'
                                                            : 'Clear sort'
                                                        : undefined
                                                }
                                            >
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {{
                                                    asc: ' 🔼',
                                                    desc: ' 🔽',
                                                }[
                                                    header.column.getIsSorted() as string
                                                ] ?? null}
                                            </div>
                                        )}
                                    </Th>
                                );
                            })}
                        </Tr>
                    ))}
                </Thead>
                <Tbody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
            <Flex>
                <Box height={'inherit'}>
                    <Button
                        variant="outline"
                        onClick={() => table.firstPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => table.lastPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </Button>
                </Box>
                <Spacer />
                <Stack direction={'row'}>
                    <Wrap>
                        Page
                        <strong>
                            {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount().toLocaleString()}
                        </strong>
                    </Wrap>
                    <Wrap>
                        | Go to page:
                        <Input
                            height={'inherit'}
                            w="16"
                            type="number"
                            defaultValue={
                                table.getState().pagination.pageIndex + 1
                            }
                            onChange={(e) => {
                                const page = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0;
                                table.setPageIndex(page);
                            }}
                        />
                    </Wrap>
                    <Wrap>
                        <Select
                            height={'inherit'}
                            w="50"
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value));
                            }}
                        >
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </Select>
                    </Wrap>
                    {dataQuery.isFetching ? 'Loading...' : null}
                </Stack>
                <Spacer />
                <Box flexDirection={'row-reverse'}>
                    <div>
                        Showing{' '}
                        {table.getRowModel().rows.length.toLocaleString()} of{' '}
                        {dataQuery.data?.rowCount.toLocaleString()} Rows
                    </div>
                </Box>
            </Flex>
        </Stack>
    );
}

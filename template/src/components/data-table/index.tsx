/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import React, { useMemo, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CustomPaginator from "./custom-paginator";
import { Skeleton } from "primereact/skeleton";

interface Props {
  column: any;
  data: any;
  totalRecords: number;
  rowClassName?: string;
  currentPage: number;
  setCurrentPage: any;
  rows?: number;
  setRows?: any;
  onRowDoubleClick?: Function;
  onRowClickSetState?: boolean;
  type?: string;
  onClickNavigate?: Function;
  sortable?: boolean;
  footer?: any;
  setSearchQuery?: any;
  searchQuery?: string | undefined;
  isPaginationEnabled?: boolean;
  loading?: boolean;
  selectionMode?: 'single' | 'multiple' | 'checkbox' | 'radiobutton' | null;
  selection?: any;
  onSelectionChange?: (e: any) => void;
  dataKey?: string;
}

const PrimeDataTable: React.FC<Props> = ({
  column,
  data = [],
  currentPage = 1,
  setCurrentPage,
  rows = 10,
  setRows,
  sortable = true,
  footer = null,
  loading = false,
  isPaginationEnabled = true,
  selectionMode,
  selection,
  onSelectionChange,
  searchQuery,
  totalRecords,
  dataKey = "id"
}) => {

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (typeof totalRecords === 'number') {
      return data || [];
    }

    if (!searchQuery || searchQuery.trim() === "") {
      return data;
    }
    const query = searchQuery.toLowerCase().trim();
    return data.filter((item: any) => {
      // Search across all column fields
      return column.some((col: any) => {
        if (col.field && item[col.field] !== undefined) {
          const fieldValue = String(item[col.field]).toLowerCase();
          return fieldValue.includes(query);
        }
        return false;
      });
    });
  }, [searchQuery, data, column, totalRecords]);

  // Reset to first page when search query changes
  useEffect(() => {
    if (searchQuery !== undefined) {
      setCurrentPage(1);
    }
  }, [searchQuery, setCurrentPage]);

  // Use totalRecords prop if provided (server-side pagination), otherwise use filtered data length
  const isServerSide = typeof totalRecords === 'number';
  const effectiveTotalRecords = isServerSide ? totalRecords : filteredData.length;
  const totalPages = Math.ceil(effectiveTotalRecords / rows);

  // Calculate paginated data
  const startIndex = (currentPage - 1) * rows;
  
  // Decide what to show: Skeletons if loading, else the data
  const paginatedData = useMemo(() => {
    if (loading) {
      return Array(rows).fill(0).map((_, i) => ({ _id: `skeleton-${i}` }));
    }
    
    if (isServerSide) {
      return data || [];
    }
    
    return (data || []).slice(startIndex, startIndex + rows);
  }, [loading, data, rows, isServerSide, startIndex]);

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const customEmptyMessage = () => (
    <div className="no-record-found">
      {/* <img src={noRecord} alt="no-record"></img> */}
      <h4>No records found.</h4>
      <p>No records to show here...</p>
    </div>
  );

  // Prepare DataTable props based on selection mode
  const getDataTableProps = () => {
    const baseProps = {
      value: paginatedData,
      className: "table custom-table datatable",
      totalRecords: effectiveTotalRecords,
      paginator: false,
      emptyMessage: customEmptyMessage,
      footer: footer,
      dataKey: dataKey,
      responsiveLayout: "scroll" as any
    };

    if (selectionMode && ['multiple', 'checkbox'].includes(selectionMode)) {
      return {
        ...baseProps,
        selectionMode: selectionMode as 'multiple' | 'checkbox',
        selection: selection,
        onSelectionChange: onSelectionChange
      };
    } else if (selectionMode && ['single', 'radiobutton'].includes(selectionMode)) {
      return {
        ...baseProps,
        selectionMode: selectionMode as 'single' | 'radiobutton',
        selection: selection,
        onSelectionChange: onSelectionChange
      };
    } else {
      return baseProps;
    }
  };

  return (
    <>
      <DataTable {...getDataTableProps()}>
        {selectionMode && ['multiple', 'checkbox'].includes(selectionMode) && (
          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        )}
        {column?.map((col: any, index: number) => (
          <Column
            key={col.key || col.field || `col-${index}`}
            header={col.header}
            field={col.field}
            body={(rowData: any, options: any) => {
              if (loading) {
                return (
                  <Skeleton
                    width="100%"
                    height="2rem"
                    className="skeleton-glow"
                  />
                );
              }
              
              if (col.body) {
                return col.body(rowData, options);
              }
              
              // Handle case where field value might be an object
              const fieldValue = rowData[col.field];
              if (fieldValue !== null && typeof fieldValue === 'object' && !React.isValidElement(fieldValue)) {
                return JSON.stringify(fieldValue);
              }
              
              return fieldValue;
            }}
            sortable={sortable === false ? false : col.sortable !== false}
            sortField={col.sortField ? col.sortField : col.field}
            className={col.className ? col.className : ""}
          />
        ))}
      </DataTable>
      {isPaginationEnabled && (
        <CustomPaginator
          currentPage={currentPage}
          totalPages={totalPages}
          totalRecords={effectiveTotalRecords}
          onPageChange={onPageChange}
          rows={rows}
          setRows={setRows}
        />
      )}
    </>
  );
};

export default PrimeDataTable;

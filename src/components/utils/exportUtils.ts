/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description exportUtils
 */

import * as XLSX from "xlsx";
import Papa from "papaparse";
import _ from "lodash";
import autoTable, { RowInput } from "jspdf-autotable";
import { jsPDF } from "jspdf";

import { Streams } from "../../types/types";

export const exportToPDF = (
  data?: Streams[],
  columns?: Record<string, any>,
  filename = "data"
) => {
  if (_.isEmpty(data) || _.isEmpty(columns)) return;

  const doc = new jsPDF();
  const tableColumn = _.map(columns, "title");
  const tableRows: RowInput[] = _.map(data, (item) =>
    _.map(columns, (col) => {
      return _.get(item, col.dataIndex);
    })
  );

  doc.text(filename, 14, 10);
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 20,
    theme: "grid",
    styles: { fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185] },
    margin: { top: 20 },
  });

  doc.save(`${filename}.pdf`);
};

export const exportToCSV = (
  data?: Streams[],
  columns?: Record<string, any>,
  filename = "data"
) => {
  if (_.isEmpty(data) || _.isEmpty(columns)) return;

  const csvData = _.map(data, (item) =>
    _.mapValues(_.keyBy(columns, "title"), (col) => _.get(item, col.dataIndex))
  );

  const csv = Papa.unparse(csvData);
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToExcel = (
  data?: Streams[],
  columns?: Record<string, any>,
  filename = "data"
) => {
  if (_.isEmpty(data) || _.isEmpty(columns)) return;

  const worksheetData = _.map(data, (item) =>
    _.mapValues(_.keyBy(columns, "title"), (col) => _.get(item, col.dataIndex))
  );

  const worksheet = XLSX.utils.json_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

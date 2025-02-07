/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description exportUtils.test
 */

import "@testing-library/jest-dom";
import autoTable from "jspdf-autotable";
import { describe, it, expect, beforeEach } from "@jest/globals";
import { jsPDF } from "jspdf";

import { Streams } from "../../types/types";
import { exportToPDF } from "../utils/exportUtils";

jest.mock("jspdf", () => {
  return {
    jsPDF: jest.fn().mockImplementation(() => {
      return {
        text: jest.fn(),
        save: jest.fn(),
        addPage: jest.fn(),
      };
    }),
  };
});
jest.mock("jspdf-autotable");

describe("exportToPDF", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a PDF with the correct filename and content", () => {
    const data: Streams[] = [
      {
        songName: "Nange Allava",
        artist: "Sanjith Hegde",
        dateStreamed: "12/02/2025",
        streamCount: 1242,
        userId: "user_001",
      },
    ];
    const columns = [
      { title: "Song Name", dataIndex: "songName" },
      { title: "Artist", dataIndex: "artist" },
      { title: "Date Streamed", dataIndex: "dateStreamed" },
      { title: "Stream Count", dataIndex: "streamCount" },
      { title: "User ID", dataIndex: "userId" },
    ];
    const filename = "test";

    const mockDoc = {
      text: jest.fn(),
      save: jest.fn(),
      addPage: jest.fn(),
    };
    (jsPDF as unknown as jest.Mock).mockImplementation(() => mockDoc);

    exportToPDF(data, columns, filename);

    expect(jsPDF).toHaveBeenCalled();
    expect(autoTable).toHaveBeenCalledWith(mockDoc, {
      head: [
        ["Song Name", "Artist", "Date Streamed", "Stream Count", "User ID"],
      ],
      body: [["Nange Allava", "Sanjith Hegde", "12/02/2025", 1242, "user_001"]],
      startY: 20,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
      margin: { top: 20 },
    });
    expect(mockDoc.save).toHaveBeenCalledWith(`${filename}.pdf`);
  });

  it("should not create a PDF if data is empty", () => {
    const data: Streams[] = [];
    const columns = [{ title: "Name", dataIndex: "name" }];
    const filename = "test";

    exportToPDF(data, columns, filename);

    expect(jsPDF).not.toHaveBeenCalled();
    expect(autoTable).not.toHaveBeenCalled();
  });

  it("should not create a PDF if columns are empty", () => {
    const data: Streams[] = [
      {
        songName: "Nange Allava",
        artist: "Sanjith Hegde",
        dateStreamed: "12/02/2025",
        streamCount: 1242,
        userId: "user_001",
      },
    ];
    const columns: Record<string, any>[] = [];
    const filename = "test";

    exportToPDF(data, columns, filename);

    expect(jsPDF).not.toHaveBeenCalled();
    expect(autoTable).not.toHaveBeenCalled();
  });

  it("should not create a PDF if both data and columns are empty", () => {
    const data: Streams[] = [];
    const columns: Record<string, any>[] = [];
    const filename = "test";

    exportToPDF(data, columns, filename);

    expect(jsPDF).not.toHaveBeenCalled();
    expect(autoTable).not.toHaveBeenCalled();
  });

  it("should handle data with missing fields gracefully", () => {
    const data = [
      {
        songName: "Nange Allava",
        artist: undefined,
        dateStreamed: undefined,
        streamCount: undefined,
        userId: undefined,
      },
    ] as unknown as Streams[];

    const columns = [
      { title: "Song Name", dataIndex: "songName" },
      { title: "Artist", dataIndex: "artist" },
      { title: "Date Streamed", dataIndex: "dateStreamed" },
      { title: "Stream Count", dataIndex: "streamCount" },
      { title: "User ID", dataIndex: "userId" },
    ];
    const filename = "test";

    const mockDoc = {
      text: jest.fn(),
      save: jest.fn(),
      addPage: jest.fn(),
    };
    (jsPDF as unknown as jest.Mock).mockImplementation(() => mockDoc);

    exportToPDF(data, columns, filename);

    expect(jsPDF).toHaveBeenCalled();
    expect(autoTable).toHaveBeenCalledWith(mockDoc, {
      head: [
        ["Song Name", "Artist", "Date Streamed", "Stream Count", "User ID"],
      ],
      body: [["Nange Allava", undefined, undefined, undefined, undefined]],
      startY: 20,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] },
      margin: { top: 20 },
    });
    expect(mockDoc.save).toHaveBeenCalledWith(`${filename}.pdf`);
  });
});

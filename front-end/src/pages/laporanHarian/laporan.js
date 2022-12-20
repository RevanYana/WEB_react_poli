import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Table, { Thead } from "../../components/Table";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const Laporan = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);

  useEffect(() => setTitle("Laporan Harian"), [setTitle]);

  return (
    <>
      <Table>
        <Thead>
          <th>REM</th>
          <th>Nama</th>
          <th>Tanggal</th>
          <th>Dokter</th>
          <th>Detail</th>
        </Thead>
        <tbody></tbody>
      </Table>

      <Table>
        <Thead>
          <th>REM</th>
          <th>Nama</th>
          <th>Tanggal</th>
          <th>Dokter</th>
          <th>Detail</th>
        </Thead>
        <tbody></tbody>
      </Table>
    </>
  );
};

export default Laporan;

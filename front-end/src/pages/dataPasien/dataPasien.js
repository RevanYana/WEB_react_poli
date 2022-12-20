import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Table, { Thead } from "../../components/Table";
import { titleState } from "../../storages";

const DataPasien = () => {
  const setTitle = useSetRecoilState(titleState);
  useEffect(() => setTitle("Data Pasien"), [setTitle]);

  return (
    <>
      <Table>
        <Thead>
          <th>ID</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Telepon</th>
          <th>Email</th>
        </Thead>
        <tbody></tbody>
      </Table>

      <Table>
        <Thead>
          <th></th>
        </Thead>
        <tbody></tbody>
      </Table>
    </>
  );
};

export default DataPasien;

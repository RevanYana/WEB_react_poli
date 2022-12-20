import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Table, { Thead } from "../../components/Table";
import { titleState } from "../../storages";
import supabase from "../../config/supabaseClient";
import { saAlert } from "../../helpers";

const DataDokter = () => {
  const setTitle = useSetRecoilState(titleState);
  useEffect(() => setTitle("Data Dokter"), [setTitle]);

  // const [fetchError, setFetchError] = useState(null);
  // const [dokter, setDokter] = useState(null);

  // useEffect(() => {
  //   const fetchDokter = async () => {
  //     const { data, error } = await supabase.from("dokter").select();

  //     if (error) {
  //       saAlert("Tidak Dapat Menampilkan Data");
  //       setDokter(null);
  //       console.log(error);
  //     }
  //     if (data) {
  //       setDokter(data);
  //       setFetchError(null);
  //     }
  //   };
  //   fetchDokter();
  // }, []);

  const [dokter, setDokter] = useState([]);

  useEffect(() => {
    getDokter();
  }, []);

  async function getDokter() {
    try {
      const { data, error } = await supabase.from("dokter").select("*");
      if (error) throw error;
      if (data != null) {
        setDokter(data);
      }
    } catch (error) {
      saAlert("Tidak Dapat Menampilkan Data");
    }
  }

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
        <tbody>
          {dokter.map((dokter) => (
            <tr>
              <td className="text-center">{dokter.id}</td>
              <td className="text-center">{dokter.nama}</td>
              <td className="text-center">{dokter.alamat}</td>
              <td className="text-center">{dokter.telp}</td>
              <td className="text-center">{dokter.email}</td>
            </tr>
          ))}
        </tbody>
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

export default DataDokter;

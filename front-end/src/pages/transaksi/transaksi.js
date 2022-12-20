import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { titleState } from "../../storages";

const Transaksi = () => {
  const setTitle = useSetRecoilState(titleState);
  useEffect(() => setTitle("Transaksi"), [setTitle]);

  const [form, setForm] = useState({
    no_hp: "",
    bagian: "",
    judul: "",
    isi: "",
    foto: "",
  });

  const [errors, setErrors] = useState({});
  const tagForm = useRef();

  return (
    <div>
      <form onSubmit="#" ref={tagForm}>
        <div className="row">
          <div className="col-md-4">
            <Input
              label="REM"
              name="no_rem"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
              error={errors.judul}
            />
          </div>
          <div className="col-md-4">
            <Input
              label="Nama Pasien"
              name="nama"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
              error={errors.no_hp}
            />
          </div>
          <div className="col-md-4">
            <Input
              label="Dokter"
              name="dokter"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
              error={errors.bagian}
            />
          </div>
          <div className="col-md-2">
            <Input
              label="Tanggal"
              name="tanggal"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
              error={errors.bagian}
            />
          </div>
        </div>
        <Textarea
          label="Hasil Pemeriksaan"
          name="isi"
          onChange={(e) =>
            setForm((prevState) => {
              return { ...prevState, [e.target.name]: e.target.value };
            })
          }
          error={errors.isi}
        />
        <Textarea
          label="Terapi / Obat"
          name="isi"
          onChange={(e) =>
            setForm((prevState) => {
              return { ...prevState, [e.target.name]: e.target.value };
            })
          }
          error={errors.isi}
        />
        <button type="submit" className="btn btn-sm btn-success px-3">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Transaksi;

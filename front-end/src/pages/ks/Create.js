import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const KsCreate = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);

  useEffect(() => setTitle("Buat Kritik & Saran"), [setTitle]);

  const [form, setForm] = useState({
    no_hp: "",
    bagian: "",
    judul: "",
    isi: "",
    foto: "",
  });

  const [errors, setErrors] = useState({});
  const tagForm = useRef();
  const [img, setImg] = useState("");

  return (
    <div>
      <h5 className="font-weight-bold">Note</h5>
      <ol>
        <li>Silahkan isikan kritik dan saran dengan bahasa yang baik.</li>
        <li>Kritik dan saran anda sangat kami harapkan demi kemajuan Manajemen.</li>
        <li>Identidas pengirim data akan sangat dirahasiakan dan tidak akan diketahui oleh siapapun</li>
      </ol>
      <form onSubmit="#" ref={tagForm}>
        <div className="row">
          <div className="col-md-4">
            <Input
              label="Judul Kritik & Saran *"
              name="judul"
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
              label="No HP (Optional)"
              name="no_hp"
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
              label="Bagian Yang Dituju (Optional)"
              name="bagian"
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
          label="Isi *"
          name="isi"
          onChange={(e) =>
            setForm((prevState) => {
              return { ...prevState, [e.target.name]: e.target.value };
            })
          }
          error={errors.isi}
        />
        <div className="row">
          <div className="col-md-4">
            <img src={img} className="img-fluid" alt="" />
            <Input
              label="Foto (Optional)"
              name="foto"
              type="file"
              onChange={(e) => {
                setImg(URL.createObjectURL(e.target.files[0]));
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.files[0] };
                });
              }}
              error={errors.foto}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-sm btn-success px-3">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default KsCreate;

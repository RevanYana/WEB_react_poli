import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { titleState } from "../../storages";
import { useSetRecoilState } from "recoil";
import supabase from "../../config/supabaseClient";
// import { tokenState, userState } from "../../storages/auth";
import { saAlert } from "../../helpers";

const Profile = () => {
  const setTitle = useSetRecoilState(titleState);
  useEffect(() => {
    setTitle("Profile Dokter");
  }, [setTitle]);

  // const [fetchError, setFetchError] = useState(null);
  // const token = useRecoilValue(tokenState);
  // const user = useRecoilValue(userState);

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

  // useEffect(() => {
  //   const showDataDokter = async () => {
  //     try {
  //       const res = await showProfile(user.id, token);
  //       if (res.data) {
  //         setDokter(res.data.dokter);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   if (token && user.id) {
  //     showDataDokter();
  //   }
  // }, [token, user.id]);

  return (
    <>
      <div className="container shadow-sm py-4 my-4">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <h5></h5>
        <table className="table table-sm table-striped ">
          {/* {dokter.map((dokter) => ( */}
          <tbody>
            <tr>
              <td className="text-nowrap">Nama</td>
              <td> : </td>
              <td>No Data</td>
            </tr>
            <tr>
              <td className="text-nowrap">Tempat Lahir</td>
              <td>{" : "}</td>
              <td>
                {/* user.tempat*/}
                {" No Data "}
              </td>
            </tr>
            <tr>
              <td className="text-nowrap">Tanggal Lahir</td>
              <td>{" : "}</td>
              <td>
                {/*formatDate(user.tanggal)*/}
                {" No Data "}
              </td>
            </tr>
            <tr>
              <td className="text-nowrap">No HP</td>
              <td>{" : "}</td>
              <td>{" No Data "}</td>
            </tr>
            <tr>
              <td className="text-nowrap">Alamat</td>
              <td>{" : "}</td>
              <td>{" No Data "}</td>
            </tr>
            <tr>
              <td className="text-nowrap">Email</td>
              <td>{" : "}</td>
              <td>
                {" No Data "}
                {/* {mhs.disc && mhs.disc.disc_1 ? (
                <div className="ratio ratio-1x1">
                  <iframe
                    title="disc_1"
                    src={`https://manajemen-alfaprima.com/storage/disc_mhs/disc_1_${user.nim}.pdf`}
                    allowFullScreen
                  />
                </div>
              ) : (
                "No Data"
              )} */}
              </td>
            </tr>
          </tbody>
          {/* ))} */}
        </table>
        {/* <div className="btn-group">
        <Link to="/profile-edit" className="btn btn-sm btn-success">
          Ubah Profile
        </Link>
        <Link to="/update-password" className="btn btn-sm btn-danger">
          Ubah Password
        </Link>
      </div> */}
      </div>
    </>
  );
};

export default Profile;

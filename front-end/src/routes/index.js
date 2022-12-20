import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutsMain from "../components/layouts/Main/Main";
import DataDokter from "../pages/dataDokter/dataDokter";
import DataPasien from "../pages/dataPasien/dataPasien";
import KsCreate from "../pages/ks/Create";
import Laporan from "../pages/laporanHarian/laporan";
import Transaksi from "../pages/transaksi/transaksi";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/profile">
          <LayoutsMain>
            <Profile />
          </LayoutsMain>
        </Route>

        <Route exact path="/data-dokter">
          <LayoutsMain>
            <DataDokter />
          </LayoutsMain>
        </Route>

        <Route exact path="/data-pasien">
          <LayoutsMain>
            <DataPasien />
          </LayoutsMain>
        </Route>

        <Route exact path="/transaksi">
          <LayoutsMain>
            <Transaksi />
          </LayoutsMain>
        </Route>

        <Route exact path="/laporan">
          <LayoutsMain>
            <Laporan />
          </LayoutsMain>
        </Route>

        <Route exact path="/ks-create">
          <LayoutsMain>
            <KsCreate />
          </LayoutsMain>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

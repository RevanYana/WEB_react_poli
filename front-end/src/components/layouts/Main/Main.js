import { useRecoilValue } from "recoil";
import { titleState } from "../../../storages";
import { userState } from "../../../storages/auth";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import Scrolltop from "../Scrolltop/Scrolltop";
// import MiddlewareMhs from "../../../middleware/Mhs";

const LayoutsMain = (props) => {
  const { children } = props;

  const title = useRecoilValue(titleState);
  const user = useRecoilValue(userState);

  return (
    <div onLoadStart={() => window.location.reload(false)}>
      {/*begin::App*/}
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <Sidebar />
          {/*begin::Wrapper*/}
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <Topbar />
            {/* begin::Main */}
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
              {/*begin::Content*/}
              <div className="app-container py-4 shadow-sm my-4 " data-kt-element="mode" data-kt-value="system" id="kt_app_container">
                <span className="app text-gray-500">
                  <i className="fa fa-user" /> : {user.nama}
                </span>
                <h4 className="card-header border-primary text-primary border-bottom py-3 mb-3 text-center">{title}</h4>
                {children}
              </div>
              {/*end::Content*/}
              {/*end::Content wrapper*/}
              {/*begin::Footer*/}
              <Footer />
              {/*end::Footer*/}
            </div>
            {/* end::Main */}
          </div>
          {/*End::Wraper*/}
        </div>
        {/*End::Page*/}
      </div>
      {/*End::App*/}
      <Scrolltop />
    </div>
  );
};

export default LayoutsMain;

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      id="kt_app_sidebar"
      className="app-sidebar flex-column"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="225px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
      {/*begin::Logo*/}
      <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
        {/*begin::Logo image*/}
        <h1 className="mx-auto text-light app-sidebar-logo-default">POLI KEREN</h1>
        <h4 className=" text-light app-sidebar-logo-minimize">POLI</h4>
        <a href="/">
          {/* <img alt="Logo" src="assets/media/logos/alfa-prima-logo.png" className="h-70px app-sidebar-logo-default" />
          <img alt="Logo" src="https://manajemen-alfaprima.com/img/Alfa Prima Logo.png" className="h-30px app-sidebar-logo-minimize" /> */}
        </a>
        {/*end::Logo image*/}
        {/*begin::Sidebar toggle*/}
        <div
          id="kt_app_sidebar_toggle"
          className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
          data-kt-toggle="true"
          data-kt-toggle-state="active"
          data-kt-toggle-target="body"
          data-kt-toggle-name="app-sidebar-minimize"
        >
          {/*begin::Svg Icon | path: icons/duotune/arrows/arr079.svg*/}
          <span className="svg-icon svg-icon-2 rotate-180">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.5"
                d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                fill="currentColor"
              />
              <path
                d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                fill="currentColor"
              />
            </svg>
          </span>
          {/*end::Svg Icon*/}
        </div>
        {/*end::Sidebar toggle*/}
      </div>
      {/*end::Logo*/}
      {/*begin::sidebar menu*/}
      <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
        {/*begin::Menu wrapper*/}
        <div
          id="kt_app_sidebar_menu_wrapper"
          className="app-sidebar-wrapper hover-scroll-overlay-y my-0"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
          data-kt-scroll-wrappers="#kt_app_sidebar_menu"
          data-kt-scroll-offset="5px"
          data-kt-scroll-save-state="true"
        >
          {/*begin::Menu*/}
          <div className="menu menu-column menu-rounded menu-sub-indention px-3" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
            {/*begin:Menu text PAGES*/}
            <div className="menu-item pt-5">
              {/*begin:Menu content*/}
              <div className="menu-content">
                <span className="menu-heading fw-bold text-uppercase fs-7">Pages</span>
              </div>
              {/*end:Menu content*/}
            </div>
            {/*end:Menu text PAGES*/}
            {/*begin:Menu item*/}
            <div className="menu-item menu-accordion">
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-icon">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com005.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                        fill="currentColor"
                      />
                      <rect opacity="0.3" x={8} y={3} width={8} height={8} rx={4} fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <Link className="menu-title" to="/profile">
                  <span className="menu-title"> User Profile </span>
                </Link>
              </span>
              {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item */}
            <div className="menu-item menu-accordion">
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-icon">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com013.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                      <path
                        opacity="0.3"
                        d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <Link className="menu-title" to="/data-dokter">
                  <span className="menu-title">Data Dokter</span>
                </Link>
              </span>
              {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div className="menu-item menu-accordion">
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-icon">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com005.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="currentColor" />
                      <path
                        opacity="0.3"
                        d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <Link className="menu-title" to="/data-pasien">
                  <span className="menu-title"> Data Pasien </span>
                </Link>
              </span>
              {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div className="menu-item menu-accordion">
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-icon">
                  {/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor" />
                      <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <Link className="menu-title" to="/Transaksi">
                  <span className="menu-title">Transaksi</span>
                </Link>
              </span>
              {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
            {/*begin:Menu item*/}
            <div className="menu-item menu-accordion">
              {/*begin:Menu link*/}
              <span className="menu-link">
                <span className="menu-icon">
                  {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        opacity="0.3"
                        d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                        fill="currentColor"
                      />
                      <path
                        d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <Link className="menu-title" to="/laporan">
                  <span className="menu-title">Laporan Harian</span>
                </Link>
              </span>
              {/*end:Menu link*/}
            </div>
            {/*end:Menu item*/}
          </div>
          {/*end::Menu*/}
        </div>
        {/*end::Menu wrapper*/}
      </div>
      {/*end::sidebar menu*/}
      {/*begin::Footer*/}
      <div className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6" id="kt_app_sidebar_footer">
        <Link className="btn-label" to={"ks-create"}>
          <a href="/ks-create" className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100" data-bs-toggle="tooltip" data-bs-trigger="hover">
            <span className="btn-label">Kritik &amp; Saran</span>
            {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
            <span className="svg-icon btn-icon svg-icon-2 m-0">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.3"
                  d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                  fill="currentColor"
                />
                <rect x={7} y={17} width={6} height={2} rx={1} fill="currentColor" />
                <rect x={7} y={12} width={10} height={2} rx={1} fill="currentColor" />
                <rect x={7} y={7} width={6} height={2} rx={1} fill="currentColor" />
                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </a>
        </Link>
      </div>
      {/*end::Footer*/}
    </div>
  );
};

export default Sidebar;

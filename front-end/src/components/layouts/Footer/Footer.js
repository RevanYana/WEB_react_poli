import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="kt_app_footer" className="app-footer">
      {/*begin::Footer container*/}
      <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
        {/*begin::Copyright*/}
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">Copyright {new Date().getFullYear()}©</span>
          <a href="https://th.bing.com/th/id/OIP.ORICeUPUqwZp2ZBJ_d-nbAHaGW?pid=ImgDet&rs=1" rel="noreferrer" target="_blank" className="text-muted fw-semibold me-1 text-hover-primary">
            Poli Keren
          </a>
        </div>
        {/*end::Copyright*/}
        {/*begin::Menu*/}
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            <a href="https://th.bing.com/th/id/OIP.ORICeUPUqwZp2ZBJ_d-nbAHaGW?pid=ImgDet&rs=1" rel="noreferrer" target="_blank" className="menu-link px-2">
              About
            </a>
          </li>
          <li className="menu-item">
            <Link to="/ks-create" className="menu-link px-2">
              Kritik & Saran
            </Link>
          </li>
        </ul>
        {/*end::Menu*/}
      </div>
      {/*end::Footer container*/}
    </div>
  );
};

export default Footer;

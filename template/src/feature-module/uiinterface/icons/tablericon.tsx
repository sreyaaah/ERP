/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'
import "../../../assets/icons/tabler-icons/tabler-icons.css"
import { all_routes } from '../../../routes/all_routes'

const route = all_routes
const TablerIcon = () => {
  return (
    <div className="page-wrapper cardhead">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Tabler Icon</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={route.dashboard}>Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Tabler Icon</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Icon */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Tabler Icons</div>
          </div>
          <div className="card-body">
            <p className="mb-2">
              <code>&lt;i className="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code>. For more
              information{" "}
              <Link
                to="https://tabler-icons.io/"
                target="_blank"
                className="text-primary"
              >
                click here
              </Link>
              .
            </p>
            <div className="icons-items">
              <div className="icons-list">
                <div className="icons-list-item">
                  <i
                    className="ti ti-home"
                    data-bs-toggle="tooltip"
                    title="ti ti-home"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-layout-dashboard"
                    data-bs-toggle="tooltip"
                    title="ti ti-layout-dashboard"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-map-pin-check"
                    data-bs-toggle="tooltip"
                    title="ti ti-map-pin-check"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-message-2"
                    data-bs-toggle="tooltip"
                    title="ti ti-message-2"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-user-circle"
                    data-bs-toggle="tooltip"
                    title="ti ti-user-circle"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-photo"
                    data-bs-toggle="tooltip"
                    title="ti ti-photo"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-file-description"
                    data-bs-toggle="tooltip"
                    title="ti ti-file-description"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-chart-line"
                    data-bs-toggle="tooltip"
                    title="ti ti-chart-line"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-exchange"
                    data-bs-toggle="tooltip"
                    title="ti ti-exchange"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-menu-2"
                    data-bs-toggle="tooltip"
                    title="ti ti-menu-2"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-settings-cog"
                    data-bs-toggle="tooltip"
                    title="ti ti-settings-cog"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-activity"
                    data-bs-toggle="tooltip"
                    title="ti ti-activity"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-shopping-bag"
                    data-bs-toggle="tooltip"
                    title="ti ti-shopping-bag"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-brand-hipchat"
                    data-bs-toggle="tooltip"
                    title="ti ti-brand-hipchat"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-bell"
                    data-bs-toggle="tooltip"
                    title="ti ti-bell"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-mail-cog"
                    data-bs-toggle="tooltip"
                    title="ti ti-mail-cog"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-location"
                    data-bs-toggle="tooltip"
                    title="ti ti-location"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-chart-pie"
                    data-bs-toggle="tooltip"
                    title="ti ti-chart-pie"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-checkbox"
                    data-bs-toggle="tooltip"
                    title="ti ti-checkbox"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-checks"
                    data-bs-toggle="tooltip"
                    title="ti ti-checks"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-chevron-down"
                    data-bs-toggle="tooltip"
                    title="ti ti-chevron-down"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-chevrons-right"
                    data-bs-toggle="tooltip"
                    title="ti ti-chevrons-right"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-circle-arrow-right-filled"
                    data-bs-toggle="tooltip"
                    title="ti ti-circle-arrow-right-filled"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-cloud-download"
                    data-bs-toggle="tooltip"
                    title="ti ti-cloud-download"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-database"
                    data-bs-toggle="tooltip"
                    title="ti ti-database"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-device-analytics"
                    data-bs-toggle="tooltip"
                    title="ti ti-device-analytics"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-discount"
                    data-bs-toggle="tooltip"
                    title="ti ti-discount"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-dots-vertical"
                    data-bs-toggle="tooltip"
                    title="ti ti-dots-vertical"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-download"
                    data-bs-toggle="tooltip"
                    title="ti ti-download"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-trash"
                    data-bs-toggle="tooltip"
                    title="ti ti-trash"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-folder-open"
                    data-bs-toggle="tooltip"
                    title="ti ti-folder-open"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-calendar"
                    data-bs-toggle="tooltip"
                    title="ti ti-calendar"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-calculator"
                    data-bs-toggle="tooltip"
                    title="ti ti-calculator"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-clock"
                    data-bs-toggle="tooltip"
                    title="ti ti-clock"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-phone-call"
                    data-bs-toggle="tooltip"
                    title="ti ti-phone-call"
                  />
                </div>
                <div className="icons-list-item">
                  <i
                    className="ti ti-video"
                    data-bs-toggle="tooltip"
                    title="ti ti-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Icon */}
    </div>
  </div>
</div>

  )
}

export default TablerIcon
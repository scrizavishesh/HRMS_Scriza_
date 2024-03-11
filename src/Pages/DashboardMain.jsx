import React from 'react'

const DashboardMain = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="row row-cols-1  row-cols-xl-4 row-cols-md-2 ">
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fw-semi-bold ">Projects</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart text-info"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
                </div>
                <div class="mt-4 mb-3 d-flex justify-content-between align-items-center lh-1">
                  <h3 class="fw-bold  mb-0">5,312</h3>
                  <span class="mt-1 ms-2 text-danger "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down icon-xs"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>2.29%</span>
                </div>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-info text-dark" style={{ width: "50%" }}>50%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fw-semi-bold ">Total Employee</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign text-info"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></span>
                </div>
                <div class="mt-4 mb-3 d-flex justify-content-between align-items-center lh-1">
                  <h3 class="fw-bold  mb-0">8,312</h3>
                  <span class="mt-1 ms-2 text-success "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-xs"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>2.29%</span>
                </div>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-warning text-dark" style={{ width: "75%" }}>75%</div>
                </div>

              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fw-semi-bold ">Total Department</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user text-info"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                </div>
                <div class="mt-4 mb-3 d-flex justify-content-between align-items-center lh-1">
                  <h3 class="fw-bold  mb-0">15,312</h3>
                  <span class="mt-1 ms-2 text-success "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up icon-xs"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>5.16%</span>
                </div>
                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-danger" style={{ width: "56%" }}>56%</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-5">
            <div class="card h-100 card-lift">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fw-semi-bold ">Running Tasks</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card text-info"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></span>
                </div>
                <div class="mt-4 mb-3 d-flex justify-content-between align-items-center lh-1">
                  <h3 class="fw-bold  mb-0">35.64k</h3>
                </div>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-success" style={{ width: "60%" }}>60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="row ">
        <div class="col-xl-5 mb-5">
          <div class="card h-100">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h4 class="mb-0">Campaign Email Sent</h4>
              <div class="dropdown dropstart">
                <a href="#!" class="btn btn-ghost btn-icon btn-sm rounded-circle" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical icon-xs"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item d-flex align-items-center" href="#!">Action</a></li>
                  <li><a class="dropdown-item d-flex align-items-center" href="#!">Another action</a></li>
                  <li><a class="dropdown-item d-flex align-items-center" href="#!">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div id="chartCampaignEmail" class="d-flex justify-content-center mt-8" style={{ minHeight: "270.367px" }}>
                <div id="apexchartsdtzzs0m6" class="apexcharts-canvas apexchartsdtzzs0m6 apexcharts-theme-light" style={{ width: "350px", height: "270.367px" }}>
                  <svg id="SvgjsSvg1816" width="350" height="270.3666666666667" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{ background: "transparent" }}><g id="SvgjsG1818" class="apexcharts-inner apexcharts-graphical" transform="translate(42.16666666666666, 0)"><defs id="SvgjsDefs1817"><clipPath id="gridRectMaskdtzzs0m6"><rect id="SvgjsRect1820" width="273.6666666666667" height="291.6666666666667" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskdtzzs0m6"></clipPath><clipPath id="nonForecastMaskdtzzs0m6"></clipPath><clipPath id="gridRectMarkerMaskdtzzs0m6"><rect id="SvgjsRect1821" width="271.6666666666667" height="293.6666666666667" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1822" class="apexcharts-pie"><g id="SvgjsG1823" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle1824" r="92.18113821138213" cx="133.83333333333334" cy="133.83333333333334" fill="transparent"></circle><g id="SvgjsG1825" class="apexcharts-slices"><g id="SvgjsG1826" class="apexcharts-series apexcharts-pie-series" seriesName="TotalxSent" rel="1" data:realIndex="0"><path id="SvgjsPath1827" d="M 133.83333333333334 9.26422764227641 A 124.56910569105693 124.56910569105693 0 1 1 95.33936270070778 252.30559302987274 L 105.34779506519043 221.5028055087725 A 92.18113821138213 92.18113821138213 0 1 0 133.83333333333334 41.65219512195121 L 133.83333333333334 9.26422764227641 z" fill="rgba(245,158,11,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="198" data:startAngle="0" data:strokeWidth="2" data:value="55" data:pathOrig="M 133.83333333333334 9.26422764227641 A 124.56910569105693 124.56910569105693 0 1 1 95.33936270070778 252.30559302987274 L 105.34779506519043 221.5028055087725 A 92.18113821138213 92.18113821138213 0 1 0 133.83333333333334 41.65219512195121 L 133.83333333333334 9.26422764227641 z" stroke="transparent"></path></g><g id="SvgjsG1828" class="apexcharts-series apexcharts-pie-series" seriesName="Reached" rel="2" data:realIndex="1"><path id="SvgjsPath1829" d="M 95.33936270070778 252.30559302987274 A 124.56910569105693 124.56910569105693 0 0 1 48.559912544395345 43.02636333861085 L 70.73100194951923 66.6361755372387 A 92.18113821138213 92.18113821138213 0 0 0 105.34779506519043 221.5028055087725 L 95.33936270070778 252.30559302987274 z" fill="rgba(25,135,84,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="118.80000000000001" data:startAngle="198" data:strokeWidth="2" data:value="33" data:pathOrig="M 95.33936270070778 252.30559302987274 A 124.56910569105693 124.56910569105693 0 0 1 48.559912544395345 43.02636333861085 L 70.73100194951923 66.6361755372387 A 92.18113821138213 92.18113821138213 0 0 0 105.34779506519043 221.5028055087725 L 95.33936270070778 252.30559302987274 z" stroke="transparent"></path></g><g id="SvgjsG1830" class="apexcharts-series apexcharts-pie-series" seriesName="Opened" rel="3" data:realIndex="2"><path id="SvgjsPath1831" d="M 48.559912544395345 43.02636333861085 A 124.56910569105693 124.56910569105693 0 0 1 133.81159192303795 9.264229539572383 L 133.81724468971476 41.65219652595023 A 92.18113821138213 92.18113821138213 0 0 0 70.73100194951923 66.6361755372387 L 48.559912544395345 43.02636333861085 z" fill="rgba(98,75,255,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="43.19999999999999" data:startAngle="316.8" data:strokeWidth="2" data:value="12" data:pathOrig="M 48.559912544395345 43.02636333861085 A 124.56910569105693 124.56910569105693 0 0 1 133.81159192303795 9.264229539572383 L 133.81724468971476 41.65219652595023 A 92.18113821138213 92.18113821138213 0 0 0 70.73100194951923 66.6361755372387 L 48.559912544395345 43.02636333861085 z" stroke="transparent"></path></g></g></g></g><line id="SvgjsLine1832" x1="0" y1="0" x2="267.6666666666667" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1833" x1="0" y1="0" x2="267.6666666666667" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1819" class="apexcharts-annotations"></g></svg>
                  <div class="apexcharts-legend">
                  </div>
                  <div class="apexcharts-tooltip apexcharts-theme-dark">
                    <div class="apexcharts-tooltip-series-group" style={{ order: "1" }}>
                      <span class="apexcharts-tooltip-marker" style={{ backgroundolor: "rgb(245, 158, 11)" }}>
                      </span>
                      <div class="apexcharts-tooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                        <div class="apexcharts-tooltip-y-group">
                          <span class="apexcharts-tooltip-text-y-label">
                          </span>
                          <span class="apexcharts-tooltip-text-y-value">
                          </span>
                        </div>
                        <div class="apexcharts-tooltip-goals-group">
                          <span class="apexcharts-tooltip-text-goals-label">
                          </span>
                          <span class="apexcharts-tooltip-text-goals-value">
                          </span>
                        </div>
                        <div class="apexcharts-tooltip-z-group">
                          <span class="apexcharts-tooltip-text-z-label">
                          </span>
                          <span class="apexcharts-tooltip-text-z-value"></span>
                        </div>
                      </div>
                    </div>
                    <div class="apexcharts-tooltip-series-group" style={{ order: "2" }}>
                      <span class="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(25, 135, 84)" }}>
                      </span>
                      <div class="apexcharts-tooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                        <div class="apexcharts-tooltip-y-group">
                          <span class="apexcharts-tooltip-text-y-label"></span>
                          <span class="apexcharts-tooltip-text-y-value"></span>
                        </div>
                        <div class="apexcharts-tooltip-goals-group">
                          <span class="apexcharts-tooltip-text-goals-label">
                          </span>
                          <span class="apexcharts-tooltip-text-goals-value">
                          </span>
                        </div>
                        <div class="apexcharts-tooltip-z-group">
                          <span class="apexcharts-tooltip-text-z-label">
                          </span>
                          <span class="apexcharts-tooltip-text-z-value">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="apexcharts-tooltip-series-group" style={{ order: "3" }}>
                      <span class="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(98, 75, 255)" }}>
                      </span>
                      <div class="apexcharts-tooltip-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px' }}>
                        <div class="apexcharts-tooltip-y-group">
                          <span class="apexcharts-tooltip-text-y-label">
                          </span>
                          <span class="apexcharts-tooltip-text-y-value">
                          </span>
                        </div>
                        <div class="apexcharts-tooltip-goals-group">
                          <span class="apexcharts-tooltip-text-goals-label">
                          </span>
                          <span class="apexcharts-tooltip-text-goals-value">
                          </span>
                        </div>
                        <div class="apexcharts-tooltip-z-group">
                          <span class="apexcharts-tooltip-text-z-label">
                          </span>
                          <span class="apexcharts-tooltip-text-z-value">
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="col-xl-7 mb-5">
          <div class="card h-100">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h4 class="mb-0">Attendance</h4>
              <div class="dropdown dropstart">
                <a href="#!" class="btn btn-ghost btn-icon btn-sm rounded-circle" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical icon-xs"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item d-flex align-items-center" href="#!">Action</a></li>
                  <li><a class="dropdown-item d-flex align-items-center" href="#!">Another action</a></li>
                  <li><a class="dropdown-item d-flex align-items-center" href="#!">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div class="row row-cols-lg-2 d-flex justify-content-center ">
              <div class="col-lg-4 col-12 mb-lg-0">
                <div class="card h-100">
                  <div class="card-body ">
                    <div class="mb-9">
                      <div class="icon-shape icon-xxl rounded-circle bg-primary-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-wallet text-primary" viewBox="0 0 16 16">
                          <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"></path>
                        </svg>
                      </div>
                    </div>
                    <span>Total Balance</span>
                    <h3 class="mb-0 fw-bold"> 6,234.78</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="mb-9">
                      <div class="icon-shape icon-xxl rounded-circle bg-danger-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor " class="bi bi-piggy-bank text-danger" viewBox="0 0 16 16">
                          <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z"></path>
                          <path fill-rule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"></path>
                        </svg>
                      </div>
                    </div>
                    <span>Total Spending</span>
                    <h3> 8,123.82</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-12 mb-5 mb-lg-0">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="mb-9">
                      <div class="icon-shape icon-xxl rounded-circle bg-success-soft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cash text-success" viewBox="0 0 16 16">
                          <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                          <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"></path>
                        </svg>
                      </div>
                    </div>
                    <span>Total Saved</span>
                    <h3> 68,345.23</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardMain

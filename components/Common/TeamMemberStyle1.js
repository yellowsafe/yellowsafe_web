import React from 'react'

const TeamMemberStyle1 = () => {
    return (
        <>
            <div className="team-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Nuestro  Equipo</span>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    {/* Update the team image from public/css/pages-and-components-css/team.scss */}
                                    <div className="bg-1"></div>
                                </div>
                                <div className="content">
                                    <h3>Camila Sarquis</h3>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-2"></div>
                                </div>
                                <div className="content">
                                    <h3>Carolina Allende</h3>
                                    <span>Relaciones Públicas</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <div className="bg-3"></div>
                                </div>
                                <div className="content">
                                    <h3>Augusta Aste</h3>
                                    <span>Finanzas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMemberStyle1;

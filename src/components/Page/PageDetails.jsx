import React from 'react';

function PageDetails({metaInfo}) {
    return (
        <>
            <section className="post-details-area pt-60 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="post-details">
                                <h2 className="details-title mb-15">{metaInfo?.name}</h2>
                                <div className="post-content">
                                    <p dangerouslySetInnerHTML={{__html: metaInfo?.desc}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageDetails;
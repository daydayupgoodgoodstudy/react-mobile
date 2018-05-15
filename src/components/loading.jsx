import React from 'react';
import "../asset/css/loading"

export const Loading = () => {
    return (
        <div className="box-loading">
            <div className="loading">
                <img src={require("../asset/images/loading.gif")} alt="" />
            </div>
        </div>
    )

}
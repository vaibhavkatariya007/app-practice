import React from 'react';
import { Helmet } from "react-helmet";

import {
    useHistory
} from "react-router-dom";

function NoMatch() {
    const history = useHistory();
    const goBack = () => history.goBack();
    return (
        <>
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className='no-match-page'>
                <button onClick={goBack}>{`<<  Go Back`}</button>
            </div>
        </>
    )
}

export default NoMatch


import React from 'react';
import PropTypes from 'prop-types';


function SFC(props, context){
    const { somePropValue } = props;

    const { someContextValue } = context;
    return <h1>hello, {somePropValue}</h1>;
}

// SFC.propTypes = { somePropValue : PropTypes.any };
SFC.defaultProps = { somePropValue : 'default vlue'};

export default SFC;


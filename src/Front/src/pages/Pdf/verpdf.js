import React, { Component } from 'react';

class VerPdf extends Component {

    
    render() {
        return (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                <object
                data={require('../../pdfs/teste.pdf')}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                </object>
            </div>
        );
    }
}

export default VerPdf;
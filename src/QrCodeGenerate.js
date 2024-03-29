import React from 'react';
import QRCode from 'qrcode.react';

function QrCodeGenerate(props) {
    return (
        <div>

            <QRCode value={props.unumber} />
        </div>
    );

}


export default QrCodeGenerate;

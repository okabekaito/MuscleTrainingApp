import React from 'react';
import {Button} from '@material-ui/core';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React導入完了</div>
                        <div className="card-body">pages下に移動</div>
                        <Button color='primary' variant='contained'>Homeに変異ボタン</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

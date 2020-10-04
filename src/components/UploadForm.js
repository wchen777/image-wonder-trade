import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import Button from '@material-ui/core/Button';

const UploadForm = ({name, revert, allowTrade}) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [renderTrade, setRender] = useState(false);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let upload = e.target.files[0];

        if (upload && types.includes(upload.type)) {
            setFile(upload);
            setError('');
            setRender(true);
        } else {
            setFile(null);
            setError('Please select an image file');
        }
    }
    return (
        <div>
        <h2>Upload an image to trade:</h2>
        <form>
            <input type = "file" onChange = {changeHandler}/>
            <div className = "output">
                {error && <div className = "error"> { error }</div>}
                {file && <div > { file.name }</div>}
                {file && <ProgressBar file = {file} setFile = {setFile} name = {name}/>}
                </div>
        </form>
        <Button className = "name-button" variant="contained" size="large" onClick = {() => revert()}> Change Name</Button>
        {renderTrade && <Button className = "trade-button" variant="contained" size="large" onClick = {() => allowTrade(true)}> Trade!</Button>}
        </div>
    )
}

export default UploadForm;
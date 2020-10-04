import { useState, useEffect } from 'react';
import { imageFirestore, imageStorage, timestamp } from '../firebase/config';

const useStorage = (file, name) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const imageRef = imageStorage.ref(file.name);
        const collectionRef = imageFirestore.collection('images');

        imageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async() => {
            const url = await imageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt, name})
            setUrl(url);
        })
    }, [file, name]);

    return {progress, url, error}

}

export default useStorage;
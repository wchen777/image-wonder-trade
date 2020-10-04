import React from 'react';
import useFirestore from '../hooks/useFirestore';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';

const ImageDisplay = ({allowTrade, revert, setSelectedImg}) => {
    //const [hasTraded, setTrade] = useState(false);
    const { docs } = useFirestore("images");
    var image = docs[Math.floor(Math.random() * docs.length)];

    // const trade = () => {
    //     image = docs[Math.floor(Math.random() * docs.length)];
    //     setTrade(true)
    // }

    const tradeAgain = () => {
        revert();
        allowTrade(false);
    }
    return (
        <div>
        <div className = "h-div">
        <h2> Trade successful!</h2>
        </div>
        <Button className = "return-button" variant="contained" size="large" onClick = {() => tradeAgain()}> Trade Again </Button>
        {/* {hasUploaded && <Button variant="primary" size="lg" onClick = {() => trade()}> Trade!</Button>} */}  
            <div> 
            {image && 
            <div className = "p-div">
                <p className = "p">
                {image.name} traded you:
                </p> </div> }
           
                { image && 
                <div className = "img-wrap" key = {image.id}> 
                    <motion.img style={{ alignSelf: 'center' }} className = "image" src = {image.url} alt = "traded" initial={{ opacity: 0}}
                animate={{ opacity: 1 }} transition={{ delay: 1 }}/>
                </div> }
        
            </div>
            
        </div>
    )
    // if (collection) {
    //     const image = collection[Math.floor(Math.random() * collection.length)]
    //     return (
    //         <div> 
    //         <p>
    //             {image.name} traded you at {image.createdAt} :
    //         </p>
    //         <div className = "img-grid">
    //             { image && 
    //             <div className = "img-wrap" key = {image.id}> 
    //                 <img src = {image.url} alt = "traded" />
    //             </div> }
    //         </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div> 
    //             <p> Nothing to be traded!</p>
    //         </div>
    //     )
    // }

}

export default ImageDisplay;
import Image from "next/image";


const Album = () => {
    return (
        <div>
            <h1>Using image component</h1>
            <Image src='https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frqmyy8g9dtyjap74tc34.png'
            width={500}
            height={500}
            alt="logo"/>
            <h1>Using img tag</h1>
            <img src='https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frqmyy8g9dtyjap74tc34.png'
            width='500px'
            height="500px"            
            alt="logo"/>
        </div>
    );
};

export default Album;
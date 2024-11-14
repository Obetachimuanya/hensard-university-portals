import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const customStyle  = {
//    border: "1px black solid"
}
const Card = (props) => {
    const {image, title, text, path} = props;
    return (
        <>
         <div className=' xui-p-1' style={{backgroundColor: "#e5e5e5"}}> 
         <Image src={image} alt="" width={200}  height={200} className='xui-w-fluid-100 xui-h-250 xui-lg-h-250'/>
         <h3 style={customStyle}>{title}</h3>
         <p className='xui-opacity-8'>{text}</p>
         <Link href={`https://institution.hensarduniversity.edu.ng/p${path}`} target={"_blank"} className='xui-btn xui-btn-black xui-px-1 xui-py half xui-mt-1' >Visit portal</Link>
         
         </div>
        </>
    );
};

export default Card;
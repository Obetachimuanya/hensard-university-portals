import Image from 'next/image';
import React from 'react';
import Card from './components/Card';



const customStyle = {
  fontSize : "20px",
  color : "red",
}
const page = () => {
  return (
    <div className='xui-container xui-py-2'>
      <div className='xui-mb-2'>
        <Image src={"https://res.cloudinary.com/dwii3hmxz/image/upload/v1707142344/branding/NAME_AND_LOGO_c2m7nz.webp"}  alt='School logo' width={300} height={100} className='xui-img-150 xui-h-auto'/>
      </div>
      <div className='xui-d-grid xui-grid-col-1 xui-md-grid-col-2 xui-lg-grid-col-3 xui-grid-gap-2'>
        <Card image="https://images.pexels.com/photos/5997313/pexels-photo-5997313.jpeg?auto=compress&cs=tinysrgb&w=600" title= "Admissions" text= "Facilitates the end-to-end process of student applications, including document management, clearance approvals, and ticket-based support for admissions inquiries."
 path= "/admissions"/>
        <Card image="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600" title= "Academics" text= "   Oversees academic operations, including course management, student attendance, grades, exams, and study materials, with analytics to streamline educational processes."
 path= "/academics"/>
        <Card image="https://images.pexels.com/photos/8923855/pexels-photo-8923855.jpeg?auto=compress&cs=tinysrgb&w=600" title= "Media Portal" text= " Manages university-wide announcements, events, blogs, banners, and galleries, providing a centralized platform for internal and external communications."
 path= "/media"/>

       <Card image="https://images.pexels.com/photos/7491011/pexels-photo-7491011.jpeg?auto=compress&cs=tinysrgb&w=1000" title= "Finance Portal" text= "Handles financial processes such as fees management, transactions, payrolls, and other financial analytics to ensure smooth financial operations within the institution."
 path= "/finance"/>

       <Card image="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1200" title= "Support Portal" text= "Centralizes and tracks all user support tickets and communications, ensuring prompt responses and resolutions to various queries or issues."

 path= "/support"/>

       <Card image="https://images.pexels.com/photos/7695402/pexels-photo-7695402.jpeg?auto=compress&cs=tinysrgb&w=600" title= "HR Portal" text= "Manages staff-related functions including attendance, payroll, allowances, deductions, departments, and designations, enhancing overall HR efficiency."
 path= "/hostel"/>
       <Card image="https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1000" title= "Hostel Portal" text= "Handles the management of hostel operations, including room assignments, member lists, hostel types, and support tickets specific to hostel-related needs."


 path= "/hostel"/>
       <Card image="https://images.pexels.com/photos/7092341/pexels-photo-7092341.jpeg?auto=compress&cs=tinysrgb&w=600" title= "Inventory Portal" text= "  Manages the university’s inventory with features like categorization, supplier management, stock tracking, and inventory movement, ensuring efficient resource management."
 path= "/inventory"/>
      </div>

    </div>
  );
};

export default page;
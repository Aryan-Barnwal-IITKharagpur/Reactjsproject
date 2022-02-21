import React from 'react'
import CardContainer from '../../Components/CardContainer.jsx'
import Header from '../../Components/Header.js'
import ListingSection from '../../Components/ListingSection.jsx'
import StatsCard from '../../Components/StatsCard.jsx'
import "./Admin_dashboard.css"

export default function Admin_dashboard() {
  return (
    <>
    <Header />
    <div className="row">
       <div className="col">
           {/* <!-- hero section  --> */}
           <div className="px-4 pt-5 my-5 text-center">
               <h1 className="display-4 fw-bold">Career Development Center</h1>
               <h3 className="display-10 text-muted mb-4">CDC, IIT ISM Dhanbad</h3>
               <div className="col-lg-6 mx-auto">
                   <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                       world’s
                       most
                       popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                       system,
                       extensive prebuilt components, and powerful JavaScript plugins.</p>
                   <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                       <button type="button"
                           className="btn btn-lg px-4 me-sm-3 bg-light border d-flex align-items-center">Fill INF
                           &nbsp;
                           <svg style={{height:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                               {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                               <path
                                   d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                           </svg>
                       </button>
                       <button type="button" className="btn btn-lg px-4 bg-light border d-flex align-items-center">Fill JNF
                           &nbsp;
                           <svg style={{height:"20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                               {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                               <path
                                   d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                           </svg></button>
                   </div>
               </div>
           </div>
       </div>
       <div className="col">
           {/* <!-- image section  --> */}
           <div className="overflow-hidden my-5 rounded">
               <div className="container my-5 px-5" style={{width: '700px', height:'500px'}}>
                   <img src="https://source.unsplash.com/random/700x900"
                       className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="700px"
                       loading="lazy" />
               </div>
           </div>
       </div>
   </div>
   <hr />
   <StatsCard />
   <hr />
   <ListingSection />
   <div className="container m-3 p-4">
     <h4>Cards will be shown here </h4>
   </div>
   
    
    
    </>
  )
}
// <!DOCTYPE html>
// <html lang="en">
 
// <head>
//    <meta charset="UTF-8">
//    <meta http-equiv="X-UA-Compatible" content="IE=edge">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
//        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//    <link rel="stylesheet" href="index.css">
//    <script src="https://kit.fontawesome.com/20970c5fb1.js" crossorigin="anonymous"></script>
//    <title>Document</title>
// </head>
 
// <body>
//    <!-- header  -->
//    <div class="bg-light">
//        <nav class="navbar navbar-light sticky fixed container">
//            <div class="container-fluid py-3">
//                <a class="navbar-brand" href="#">
//                    <img src="https://www.nicepng.com/png/full/258-2589833_about-srijan-srijan-iit-ism-dhanbad-logo.png"
//                        alt="" width="30" height="24" class="d-inline-block align-text-top">
//                    Career Development Center
//                </a>
//            </div>
//        </nav>
//    </div>
 
   
 
  
 
//    <!-- card section  -->
//    <div class="d-flex justify-content-center pt-4 my-5">
//        <div class="d-flex flex-wrap container justify-content-center">
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:brown;"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4 ">Edit</button>
//                </div>
//            </div>
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:rgb(108, 165, 42);"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4">Edit</button>
//                </div>
//            </div>
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:brown;"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4 ">Edit</button>
//                </div>
//            </div>
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:rgb(42, 85, 165);"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4">Edit</button>
//                </div>
//            </div>
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:rgb(165, 147, 42);"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4">Edit</button>
//                </div>
//            </div>
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:rgb(165, 147, 42);"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4">Edit</button>
//                </div>
//            </div>
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:rgb(151, 42, 165);"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4">Edit</button>
//                </div>
//            </div>
//            <!-- card  -->
//            <div class="card shadow-lg my-3 mx-2 rounded-3">
//                <div class="rounded-top" style="height: 10px; background-color:brown;"></div>
//                <div class="p-3">
//                    <h3>INF #1</h3>
//                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                    <button class="btn bg-light border px-4 ">Edit</button>
//                </div>
//            </div>
//        </div>
//    </div>
// </body>
 
// </html>
 

 


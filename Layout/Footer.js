import React from 'react'
import { useState } from 'react';

const  Footer =()=> {  
  return (
    <>
    <footer className=" flex flex-wrap text-center  justify-betweentext-center justify-between" >
    <ul class=" flex flex-wrap text-center justify-between">
                    <li class="list-none flex ">
                        <a href="#" class=" text-white text-xl p-4" >خانه رویایی خود را پیدا کنید</a >
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl  ">درخواست پروپوزال</a>
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl p-4">برنامه اجاره خانه ها</a>
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl ">با ما تماس بگیرید</a>
                    </li>
                    <li class="list-none text-sm">
                        <a href="#" class=" text-white text-xl ">ملک خود را ارسال کنید</a>
                    </li>

                </ul>

                <p class="text-white text-center pb-24">
                    &copy;  حقوق مادی معنوی این سایت برای <strong class="text-white"> فرجادباباپور </strong>
                    محفوظ میباشد
                </p> </footer>
     
  </>
  )
}




export default Footer

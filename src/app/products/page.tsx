import React from "react"

// import Productdetails from "@/components/product/Productdetails"
import Filter from "@/components/product/Filter"
import Breadcrum from '@/utils/Breadcrum';
import ProductCard from "@/components/product/productcard";

const Product = () => {
    return (
        <div className="mx-auto ">
            
            <div><Breadcrum/></div>
           
            {/* <div className="flex-[2]"> */}
                <Filter/>
           

           <ProductCard/>
            {/* </div> */}


            {/* <Productdetails/> */}
        </div>
    )
}

export default Product
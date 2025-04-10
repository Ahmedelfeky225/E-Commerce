import { Search, X } from "lucide-react";
import Input from "../components/ui/Input";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";


const SearchPage = ({setOpenSearchPage}) => { 
  const [query,setQuery] = useState("")
  const [results, setResults] = useState([])
  useEffect(()=>{
      if(query.length >= 3){
        fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res=>res.json())
      .then(data=> setResults(data.products))
      }else{
            setResults([])
      }
  },[query])


  return (
    <div className="p-4 fixed left-0 right-0 bottom-0 top-20 bg-[#fffffffa] z-40 overflow-y-auto">
        <div className="container mx-auto  max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-7xl my-2">
        <div className="relative flex items-center gap-3">
        <Input
            type="text"
            placeholder="Search "
            value={query}
            onChange={e=>setQuery(e.target.value)}
            className="focus:!border-[#c4c4c4] focus:!ring-0 focus:!ring-[#c4c4c4] pl-10"
        />
        <span className="absolute left-2 top-[50%] -translate-y-[50%]">
           <Search className="text-[#c4c4c4]" size={20}/>
        </span>
        <X strokeWidth={1.5} size={35} className="text-[#bdbbbb] font-normal cursor-pointer" onClick={()=>setOpenSearchPage(false)}/>
      </div>
      {query.length < 3 && <div className="mt-1 mb-3 text-[13px] tracking-wide">you must enter at least 3 characters</div>}

     {results.length ? <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 ">
        {results.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div> : <div className="w-full flex justify-center items-end pt-14"><img src="/images/empty-search.576b99d7.svg" className="md:w-[50%]" /></div>}
        </div>
      
    </div>
  );
};

export default SearchPage;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../app/features/category/categorySlice';
import { fetchProducts } from '../app/features/product/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SkeletonLoader from '../components/SkeletonLoader';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, loading: categoriesLoading, error: categoriesError } = useSelector(state => state.categories);
  const { productsByCategory, loading: productsLoading, error: productsError } = useSelector(state => state.products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (!productsByCategory[category]) {
      dispatch(fetchProducts(category));
    }
  };

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
      dispatch(fetchProducts(categories[0])); 
    }
  }, [categories, dispatch]);

  const productsToDisplay = selectedCategory && productsByCategory[selectedCategory] ? productsByCategory[selectedCategory] : [];

  return (
    <div className='container mx-auto max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl py-20 px-3 flex flex-col gap-5'>
      <button
        onClick={() => navigate(-1)}
        className="w-fit bg-[#eee] hover:bg-[#ddd] text-gray-900 rounded-full pl-2 pr-4 py-1 flex justify-center item-center"
      >
        <ChevronLeft/>
        Back
      </button>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="submenu flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide px-4 lg:px-0 py-2">
          {categoriesLoading &&
            Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="w-24 h-8 bg-gray-200 rounded-lg animate-pulse" />
            ))
          }

          {categoriesError && (
            <p className="text-red-500">Error loading categories</p>
          )}

          {!categoriesLoading && !categoriesError && categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 border border-gray-100 rounded-lg text-sm font-medium transition-transform duration-200 ${
                selectedCategory === category
                  ? 'bg-[#230b45] text-white scale-105 shadow-sm'
                  : 'bg-[#f7f7f7] text-black hover:bg-gray-100'
              }`}
            >
              {category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <div className="products">
        {productsLoading && <SkeletonLoader/>}
        {productsError && <p className="text-red-500 text-center">Error loading products</p>}
        {selectedCategory && productsToDisplay.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation

            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="mySwiper"
          >
            {productsToDisplay.map(product => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;


import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsDetail = () => {
  const location = useLocation();
  console.log(location)
  const { article} = location.state;

  return (
    <div className='p-4 flex flex-col border'>
      <h2 className="text-3xl font-bold mt-4">{article.title}</h2>
      <img
         className="object-cover w-full h-50"
        src={article.image_url}
        alt="image"
     />
      <p className="mt-2">{article.description}</p>
     <p className="mt-2">{article.content}</p>
    </div>
  );
};

export default NewsDetail;

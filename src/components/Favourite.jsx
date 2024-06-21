// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { favActions } from "../store/favSlice";

// const Favourite = () => {
//   const dispatch = useDispatch();
//   const favList = useSelector((state) => state.favlist.favList);
//   const handleRemove = (article) => {
//     dispatch(favActions.removeNews(article));
//   };
//   return (
//     <div className="overflow-hidden rounded-lg border border-gray-100 m-8">
//       <table className="w-full text-gray-500 text-center">
//         <thead className="border-b-2 bg-gray-100 font-bold">
//           <tr>
//             <th className="px-4 py-2">Favrioute Article</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {favList.map((article, index) => (
//             <tr key={index} className="border-b-2">
//               <td className="flex items-center px-6 py-4">
//               <h4 className="ml-4 text-gray-500">{article.title}</h4>
//                 <img
//                   className="object-cover w-full h-48"
//                   src={article.urlToImage}
//                   alt="image"
//                 />
//                  <p className="mb-2 leading-normal">{article.content}</p>

//               </td>
//               <td
//                 className="px-4 py-2 text-red-500 hover:cursor-pointer"
//                 onClick={() => handleRemove(index)}
//               >
//                 Delete
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Favourite;

import React from "react";
import defaultImage from "../assets/default-img.jpg";

const Favourite = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 m-8">
      <table className="w-full text-gray-500 text-center">
        <thead className="border-b-2 bg-gray-100 font-bold">
          <tr>
            <th className="px-4 py-2">Favrioute Article</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2">
            <td className="flex flex-col items-center px-6 py-4">
              <h4 className="ml-4 text-gray-500">NewsGTest</h4>
              <img
                className="object-cover w-full h-48"
                src={defaultImage}
                alt="image"
              />
              <p className="mb-2 leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex
                necessitatibus, aspernatur autem eos minima? Aliquid nihil sit
                assumenda quibusdam, esse praesentium officia eos, voluptas
                libero tempora beatae alias? Explicabo. Excepturi praesentium
                optio recusandae corrupti impedit repellat ad, libero, itaque,
                expedita veniam quas ab ipsa placeat nostrum quo quae ipsum
                pariatur accusantium suscipit dolores nulla labore? Quasi
                explicabo error aut!
              </p>
            </td>
            <td className="px-4 py-2 text-red-500 hover:cursor-pointer">
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Favourite;

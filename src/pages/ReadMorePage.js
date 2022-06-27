import React from "react";
// import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useDetailsContextConsumer } from "../Context/detailsContext";

const ReadMorePage = () => {
  const { details } = useDetailsContextConsumer();
  const params = useParams();
  const { id } = params;
  // useEffect(() => {
  //   return () => {
  //     second
  //   }
  // }, [third])

  const fullBlog = details.filter((post) => {
    return post.id === parseInt(id);
  });
  const { title, Image, description, category, date } = fullBlog[0];
  return (
    <>
      <div className="read_more_page">
        <h1>{title}</h1>
        <img src={Image} alt="" />
        <h4>
          {category}/{date}
        </h4>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{width:'85%', margin: '10px auto'}}>
       <h1 className="title head-title"> Read More From {category}</h1>  
       {details.filter((cat)=>{ 
       return cat.category===category;}).map((n)=>{ return(
         <Card
         key={n.id}
         articleid={n.id}
         imgUrl={n.Image}
         title={n.title}
         description={n.description.slice(0, 200)}
         author={n.author}
         category={n.category}
         date={n.date}
         />
         )})}
      </div>
    </>
  );
};
export default ReadMorePage;
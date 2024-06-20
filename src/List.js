import React from 'react';

const List = ({people,removePerson}) => {
  return(
    <>
    {people.map((person)=>{
      
      return<>
      <article className='person' key={person.id}>
        <img src={person.image}/>
        <div>
        <h4>{person.name}</h4>
        <p>{person.age}</p>
        
        </div>
        
      </article>
      </>

    })}
    </>
  )
}
  

export default List;

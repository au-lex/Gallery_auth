import React from 'react'
import Data from "../Data"
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useAuth0 } from '@auth0/auth0-react';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    console.log(removed);
    result.splice(endIndex, 0, removed);
  return result;
  };
const Home = () => {
    const { logout } = useAuth0();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const filterSearch = Data.filter(item => {
        return   item.name.toLowerCase().includes(search.toLowerCase())
    })

    const [items, setItems] = useState(filterSearch)

    const onDragEnd = (result) => {
        if (!result.destination) return;
        if (result.destination.index === result.source.index) return;
    const projects = reorder(
          items, // project is state 
          result.source.index,
          result.destination.index
        );
        //store reordered state.
        setItems(projects)
      }

    return (
        <>
         <main>
            <section className='bg-slate-700 py-[2rem] px-[2rem]  header  fixed w-[100%] top-0 ' >
                  <section className='flex justify-around'>
                    <div className="logo">
                        <h1 className='text-[25px] text-slate-100 capitalize '>Logo</h1>
                    </div>

                    <section className="inputContainer">
                    <input onChange={handleSearch}  value={search}   className="placeholder:italic placeholder:text-slate-400 block bg-white lg:w-[40rem]
                     w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                     sm:text-sm" placeholder="Search for anything..." type="search" name="search"/>

                    </section>
                    <section className='flex  space-x-8'>
                        <a href="#" className="links block text-[20px] text-slate-100 capitalize ">home</a>
                        <a href="#" className="links block text-[20px] text-slate-100 capitalize ">account</a>
                        <a href="#" className="links block text-[20px] text-slate-100 capitalize ">log out</a>
                    </section>
                  </section>
            </section>
            <DragDropContext onDragEnd={onDragEnd}>
                <section className="hero mt-[8rem]">
                    <Droppable droppableId="droppable" direction='horizontal'>
                        {(provided, snapshot) => (
                        <figure 
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'red' : 'green' }}
                        { ...provided.droppableProps }
                        className="imgContainer flex flex-wrap justify-center"
                        >
                        {items.map((image, index) => (
                            <Draggable draggableId={image.id} key={image.id} index={index}>
                                {(provided, snapshot) => (
                                <div 
                                ref={provided.innerRef}
                                { ...provided.draggableProps }
                                { ...provided.dragHandleProps }
                                className='w-[280px] h-[300px] shadow1 mx-[2rem] my-[1rem]'
                                >
                                <img src={image.cover} alt=""  className='h-[auto]'/>
                                <figcaption>
                                    <h3>{image.name}</h3>
                                </figcaption>
                                </div>)}
                            </Draggable>
                        ))}
                        { provided.placeholder }
                        </figure>)}
                    </Droppable>
                </section>
            </DragDropContext>
                <button className='bg-red-500 py-5 px-5' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
            </main> 
        </>
    )
}

export default Home

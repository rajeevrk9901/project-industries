import React from 'react'
import projectData from './projectData'


function Projects() {
    return (
        <div className='flex flex-col pl-12 pt-8'>
            <h1 className='text-3xl text-white border-double border-b-2  py-3'> Projects </h1>
            <div className='project-container '>

                <div className='absolute bg-white top-64 left-64 text-white'>

                    <div className=''>
                        <div className='flex flex-col absolute '>
                            <ul className='grid grid-cols-3 w-[900px] items-center content-center text-center py-5 list-none sticky font-bold border-2 rounded-2xl'>
                                <li>Name</li>
                                <li>About</li>
                                <li>Status</li>
                            </ul>
                            <div className='scrolly-container flex flex-col overflow-y-auto h-[325px] border-2 border-r-0 border-t-0'>
                                {projectData.map((pdata) => {
                                    return <div className={`grid grid-cols-3 w-[900px] items-center content-center text-center py-5 list-none my-6 ${pdata.status === 'Active' ? ' bg-gray-700' : ''}`} >
                                        <div>
                                            <li>{pdata.img}</li>
                                            <li>{pdata.name}</li>
                                        </div>
                                        <li>{pdata.about}</li>
                                        <div className='flex gap-4 justify-center '>
                                            <li> {pdata.status}</li>

                                            {pdata.status === 'Active' ? <button className='px-4 py-0.5 rounded-md bg-gray-400'>Bid</button> : ''}

                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </div >
    )
}

export default Projects
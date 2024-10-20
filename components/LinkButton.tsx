import React from 'react'

const LinkButton = ({title}:{title:string}) => {
  return (
                    <a href={''} 
                      className='relative box-decoration-slice inline-block transition-all duration-200 delay-75 
                                before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-black hover:before:right-auto hover:before:left-0 hover:before:w-full before:transition-all before:duration-200
                                '
                      >{title}
                    </a>
  )
}

export default LinkButton
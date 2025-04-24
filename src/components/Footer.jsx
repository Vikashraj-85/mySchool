import React from 'react'
import Link from 'next/link'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <footer className='md:px-20 px-5 bg-gray-800 py-5' >
            <div className='grid md:grid-cols-2'>
                <div>
                    <Link href={'/'}>
                        <div className="flex shrink-0 items-center text-white ">
                            <LocalLibraryIcon sx={{ fontSize: '2.5rem' }} />
                            <p className='text-xl ml-3 '>School World</p>
                        </div>
                    </Link>
                    <div className='social-media my-5 text-[#ccc]  '>
                        <a href='#' className='mr-5 hover:text-white text-2xl' ><LinkedInIcon/> </a>
                        <a href='#' className='mr-5 hover:text-white text-2xl' ><InstagramIcon/> </a>
                        <a href='#' className='mr-5 hover:text-white text-2xl' ><GitHubIcon/> </a>
                        <a href='#' className='mr-5 hover:text-white text-2xl' ><XIcon/> </a>
                
                    </div>
                </div>
                <div className='text-white '>
                  <p><a href='#' className='text-lg font-medium text-[#ccc] hover:text-white'>about</a>     </p>
                  <p><a href='#' className='text-lg font-medium text-[#ccc] hover:text-white'>FAQ</a></p>
                  <p><a href='#' className='text-lg font-medium text-[#ccc] hover:text-white'>contact</a></p>
                  <p><a href='#' className='text-lg font-medium text-[#ccc] hover:text-white'>developer</a></p>
                  <p><a href='#' className='text-lg font-medium text-[#ccc] hover:text-white'>copyRight</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

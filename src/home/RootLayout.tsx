import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className='container'>
			<Navbar />


const Layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="container font-poppins">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;

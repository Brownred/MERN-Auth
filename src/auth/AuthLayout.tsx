import AuthFooter from '../components/Authfooter';

const AuthLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    
    <main className="relative font-poppins flex bg-gray-200 justify-center overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <div className="lg:w-3/5 md:w-1/2 hidden md:flex h-screen md:min-h-[900px] md:bg-signup bg-cover bg-center"/>
      <div className="relative lg:w-2/5 md:w-1/2 rounded-t-3xl md:rounded-none top-32 md:top-0 bg-white p-10">
        {children}
      </div>
      <div className="hidden md:flex absolute bottom-0 right-0 overflow-hidden left-0">
    <AuthFooter />
      </div>
    </main>
    
  )
}

export default AuthLayout

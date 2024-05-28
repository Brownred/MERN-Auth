import AuthFooter from "../components/Authfooter";


const AuthLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <>
    <main className="relative flex overflow-y-scroll custom-scrollbar">
      <div className="w-3/5 h-screen bg-signup bg-cover bg-center"/>
      <div className="w-2/5 h-screen bg-white p-10">
        {children}
      </div>
      <div className="absolute bottom-0 right-0 overflow-hidden left-0">
    <AuthFooter />
      </div>
    </main>
    </>
  )
}

export default AuthLayout
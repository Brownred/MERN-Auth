import { Avatar, Chip, Divider } from "@nextui-org/react"
import ButtonNextUI from "../../components/button"


const LoginGoogle = () => {
  return (
    <div>
      <div className="bg-signup relative flex items-center justify-center bg-center h-screen">
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="bg-white relative rounded-3xl p-7 -mt-44">
            <Chip onClose={() => console.log("close")} className=" bg-transparent absolute right-2 top-2" />
          <div className="flex items-center gap-5 flex-col mt-2">
            <h1 className="font-bold text-xl">Welcome back, Lenox</h1>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-[73px] h-[73px] text-large" />
            <ButtonNextUI textVariant="" title="Continue with Google"  variant="bg-transparent min-w-[300px] border border-black" icon='/google-icon.svg'/>
            <Divider className="w-full my-1"/>
            <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-sm ">Not you? <u>Login</u> with a different account</p>
            <p className="font-semibold text-sm mb-1">Need an account? <u>Sign up</u></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginGoogle
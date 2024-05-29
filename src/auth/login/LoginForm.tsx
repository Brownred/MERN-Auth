import {  Input } from "@nextui-org/react"
import ButtonNextUI from "../../components/button"
import PasswordInput from "./inputs/passwordInput"
import CheckBox from "./inputs/CheckBox"
import { MailIcon } from "./inputs/MailIcon"

const LoginForm = () => {
  return (
    <div>
      <div className="bg-signup relative flex items-center justify-center bg-center h-screen">
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="bg-white relative rounded-3xl p-7 -mt-44">
            
          <div className="flex gap-5 flex-col mt-2">
            <h1 className="font-bold text-xl">Sign in</h1>
            
            <Input
              key='email'
              type="email"
              size='lg'
              label="Email"
              labelPlacement='outside'
              placeholder="you@example.com"
              startContent ={

                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              
            />
                <PasswordInput />
            
            <ButtonNextUI textVariant="" title="Log in"  variant="bg-transparent min-w-[300px] border border-black"/>
            
            <div className="flex justify-between">
                <CheckBox />
                <p className="text-sm font-medium">Need Help?</p>
            </div>

            <p className="font-semibold text-sm ">Don't have an account? <u className="font-semibold">Sign up</u></p>
            
            </div>
          </div>
        </div>
      </div>
  )
}

export default LoginForm
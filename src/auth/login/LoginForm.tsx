import { Button, Input } from "@nextui-org/react"
import {EyeFilledIcon} from './inputs/EyeFilledIcon';
import {EyeSlashFilledIcon} from "./inputs/EyeSlashFilledIcon";
import CheckBox from "./inputs/CheckBox"
import { MailIcon } from "./inputs/MailIcon"
import { useForm, SubmitHandler } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";
import { Link } from "react-router-dom";

const schema =z.object({
  email: z.string().email({message: 'email is not valid'}),
  password: z.string().min(8, {message: 'Password must be at least 8 characters.'})
})

type formFields = z.infer<typeof schema>

const LoginForm = () => {

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<formFields>({resolver: zodResolver(schema)});

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  

  return (
    <div>
      <div className="bg-signup relative flex items-center justify-center bg-center h-screen">
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="bg-white relative rounded-3xl p-7 -mt-8">
            
            <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6 flex-col mt-2">

            <h1 className="font-bold text-xl">Sign in</h1>
            
            <Input
              {...register("email")}
              key='email'
              type="email"
              size='lg'
              label="Email"
              isInvalid={errors.email && true}
              errorMessage={errors.email?.message}
              labelPlacement='outside'
              placeholder="you@example.com"
              startContent ={

                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              
            />
                <Input
                  {...register("password")}
                    label="Password"
                    labelPlacement='outside'
                    isInvalid={errors.password && true}
                    errorMessage={errors.password?.message}
                    size='lg'
                    placeholder="Enter your password"
                    description='trial2'
                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                  />
            
                  <Button type="submit" isDisabled={isSubmitting} isLoading={isSubmitting} size='lg' className='flex items-center justify-center rounded-full bg-transparent min-w-[300px] border border-black'>{isSubmitting ? 'Loading...' : 'Log in'}
                   </Button>
  
            
            <div className="flex justify-between">
                <CheckBox />
                <p className="text-sm font-medium">Need Help?</p>
            </div>

            <p className="font-semibold text-sm ">Don't have an account? <Link to='/sign-up'><u className="font-semibold">Sign up</u></Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default LoginForm
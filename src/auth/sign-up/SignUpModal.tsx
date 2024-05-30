import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';
import ButtonNextUI from "../../components/button.js";
import {SubmitHandler, useForm} from 'react-hook-form'
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: "Password must be at least 2 characters."}),
})

// Define the types for our form fields that we are gonna use for our form
type FormFields = z.infer<typeof schema>

export default function SignUpModal() {
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {register, setError, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormFields>( {resolver: zodResolver(schema)});

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); //async operation, like sending data to the server
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("email", {message: "This email is already taken"})
    }
  }

  return (
    <>
      <ButtonNextUI textVariant="text-white" title="Sign up with phone or email" action={onOpen} variant="bg-black min-w-[330px]"/>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="bottom"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody>
                
{/* non input specific async error using root */}

                <Input
                {...register("email",)}
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  isInvalid={errors.email && true}
                  errorMessage={errors.email?.message}
                />
                <Input
                  // endContent={
                  //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  {...register("password", {required: true, minLength: {value: 8, message: 'Password must have atlest 8 characters'}})}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="faded"
                  isInvalid={errors.password && true}
                  errorMessage={errors.password?.message}
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button isDisabled={isSubmitting} className="w-full bg-orange-400" type="submit">
                  {isSubmitting ? "Loading..." : "Submit"}
                </Button>
              </ModalFooter>
                </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

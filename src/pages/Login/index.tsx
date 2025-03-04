// import { useState } from "react";
// import { Link } from "react-router";
// import Button from "@/components/common/Button";
// import Cover from "@/components/common/Cover";
// import InputEmail from "@/components/common/InputEmail";
// import InputPassword from "@/components/common/InputPassword";
// import Label from "@/components/common/Label";
// import RegisterFooter from "@/components/RegisterFooter";
// import RegisterHeader from "@/components/RegisterHeader";
// import Checkbox from "@/components/common/Checkbox";


// const Login: React.FC = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState<string>("");
 
//   return (
//     <>
//       <div className="md:mx-0 md:ml-2 md:grid-cols-2 grid h-screen grid-cols-1 mx-4">
//         <div className="">
//           <RegisterHeader
//             btnText="Sign Up"
//             linkTo="/signup"
//             account="Don't have an account?"
//           />
//           <div className="flex justify-center">
//             <div className="mt-[5rem] w-full md:mt-[10rem] xl:mx-0 xl:w-[480px]">
//               <div className="text-center">
//                 <h2 className="text-[36px] font-[600] leading-[48px] tracking-tighter text-[#1C1D1E]">
//                   Sign in to Propa Homes
//                 </h2>
//                 <h6 className="text-[16px] font-[500] leading-[24px] text-[#414444]">
//                   Please enter your email address and password to <br /> access
//                   your account.
//                 </h6>
//               </div>
//               <form action="">
//                 <div className="">
//                   <Label text="Email Address" htmlFor="email" />
//                   <InputEmail
//                     type="email"
//                     placeholder="Enter your email Address"
//                     id="email"
//                   />
//                 </div>
//                 <div className="mt-[5px]">
//                   <Label text="Password" htmlFor="email" />
//                   <InputPassword
//                     id="password"
//                     value={password}
//                     onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                       setPassword(e.target.value);
//                     }}
//                     placeholder="Enter your Password"
//                     showVisibility={passwordVisible}
//                     togglePasswordVisibility={() =>
//                       setPasswordVisible(!passwordVisible)
//                     }
//                   />
//                 </div>
//                 <div className="mb-6 flex items-center justify-between pt-[10px]">
//                   <div className="flex items-center">
//                     <Checkbox/>
//                     <label
//                       className="ml-2 cursor-pointer text-[14px] font-[600] leading-[20px] text-[#434547]"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                   <Link to="/forgot-password">
//                     <h1 className="text-[14px] font-[600] leading-[20px] text-[#12725B]">
//                       Forgot Password
//                     </h1>
//                   </Link>
//                 </div>
//                 <Button
//                   text="Continue"
//                   type="submit"
//                   className="h-[48px] w-full rounded-xl bg-[#12725b] text-white"
//                 />
//                 <p className="flex items-center justify-center gap-[3px] pt-4 text-center text-[16px]">
//                   <h5 className="tracking-tighter text-[#414444]">
//                     Don't have an account?{" "}
//                   </h5>
//                   <Link to="/signup" className="font-[500] text-[#12725b]">
//                     {" "}
//                     Sign Up
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//           <div className="mx-4 mt-[20rem]">
//             <RegisterFooter />
//           </div>
//         </div>
//         <Cover />
//       </div>
//     </>
//   );
// };

// export default Login;
import { useState } from "react";
import { Link } from "react-router";
import Button from "@/components/common/Button";
import Cover from "@/components/common/Cover";
import InputEmail from "@/components/common/InputEmail";
import InputPassword from "@/components/common/InputPassword";
import Label from "@/components/common/Label";
import RegisterFooter from "@/components/RegisterFooter";
import RegisterHeader from "@/components/RegisterHeader";
import Checkbox from "@/components/common/Checkbox";
import Spinner from "@/components/Spinner"

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 

    setLoading(true); 

    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50">
          <Spinner />
        </div>
      )}

      <div className="md:mr-0 md:ml-4 md:grid-cols-2 grid h-screen grid-cols-1 mx-4">
        <div className="">
          <RegisterHeader
            btnText="Sign Up"
            linkTo="/signup"
            account="Don't have an account?"
          />
          <div className="flex justify-center">
            <div className="mt-[5rem] w-full md:mt-[10rem] xl:mx-0 xl:w-[480px]">
              <div className="text-center">
                <h2 className="md:text-[36px] text-[25px] font-[600] leading-[48px] tracking-tight text-[#1C1D1E]">
                  Sign in to Propa Homes
                </h2>
                <h6 className="text-[16px] font-[500] leading-[24px] text-[#414444]">
                  Please enter your email address and password to <br /> access
                  your account.
                </h6>
              </div>
              <form onSubmit={handleLogin}>
                <div className="">
                  <Label text="Email Address" htmlFor="email" />
                  <InputEmail
                    type="email"
                    placeholder="Enter your email Address"
                    id="email"
                  />
                </div>
                <div className="mt-[5px]">
                  <Label text="Password" htmlFor="password" />
                  <InputPassword
                    id="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your Password"
                    showVisibility={passwordVisible}
                    togglePasswordVisibility={() =>
                      setPasswordVisible(!passwordVisible)
                    }
                  />
                </div>
                <div className="mb-6 flex items-center justify-between pt-[10px]">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="ml-2 cursor-pointer text-[14px] font-[600] leading-[20px] text-[#434547]">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password">
                    <h1 className="text-[14px] font-[600] leading-[20px] text-[#12725B]">
                      Forgot Password
                    </h1>
                  </Link>
                </div>
                <Button
                  text="Continue"
                  type="submit"
                  className="h-[48px] w-full rounded-xl bg-[#12725b] text-white"
                />
              </form>
            </div>
          </div>
          <div className="mx-4 mt-[20rem]">
            <RegisterFooter />
          </div>
        </div>
        <Cover />
      </div>
    </>
  );
};

export default Login;

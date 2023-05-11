import Link from "next/link"
import Image from "next/image"
import Form from "@/components/form"

export default function Login() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <a href="/">
            <Image
              src="/purplepin.png"
              alt="regpin logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="text-xl font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <Form type="login" />
        <span className="flex items-center justify-center text-xs pb-4"><Link href="/" className="text-gray-400 hover:underline hover:text-rose-300"> Go to Home</Link></span>
      </div>
      
    </div>
    )
}
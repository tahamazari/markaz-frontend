import { Navbar } from "."

export const Layout = ({ children }) => {
  return(
    <div className="text-center text-3xl font-bold tracking-tight text-gray-900">
      <Navbar />
      <div className="pt-[200px]">
        {children}
      </div>
    </div>
  )
}
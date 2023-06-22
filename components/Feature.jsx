import Image from "next/image"
function Feature({ logo, title, description }) {
  return (
    <div className="text-center mx-auto mb-4" >
      <Image src={logo} alt="logo" className="w-16 mx-auto mb-2" />
      <h2 className="font-semibold text-lg" >{title}</h2>
      <p className="font-normal text-base">{description}</p>
    </div>
  )
}

export default Feature

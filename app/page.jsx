import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/email.png"
import news from "@/assets/news.jpg"

import FeatureSection from "@/components/FeatureSection"
import Testimonial from "@/components/Testimonial"
import BottomSection from "@/components/BottomSection"

import FAQ from "@/components/FAQ"

export default function Home() {
  return (
    <main className="container mx-auto px-0 mb-6">
      <Image src={logo} alt="logo" className="w-16 mx-auto mt-6" />
      <h1 className="font-bold text-4xl text-center mt-6">Get Breaking News Easily!</h1>
      <p className="text-center font-normal text-lg w-full mt-6 px-4">
        Your Personalized News Update Delivered to Your Inbox! Just Add Your Email and Start Getting Mails!
      </p>
      <section className="flex flex-col mt-6">
        <input
          type="text"
          name="email"
          id="email"
          className="mx-auto border-2 border-black px-4 py-3 rounded-full w-10/12"
          placeholder="Enter your Email adress"
        />
        <button className="rounded-full w-10/12 bg-black text-white text-xl font-bold mx-auto px-4 py-3 mt-4">
          Sign Up!
        </button>
      </section>
      <p className="mt-6 font-normal text-sm px-2 text-center">
        Try email news for free 30 days. No credit card required. You can cancel your subscription anytime.
      </p>
      <Image src={news} alt="news" className="w-full mx-auto" />
      <FeatureSection />
      <hr className="border-1 border-gray-400 rounded-full mx-4" />
      <Testimonial />
      <BottomSection />
      <FAQ />
      <Link href="/about" className="font-medium text-lg underline text-center block" >About this website</Link>
    </main>
  )
}

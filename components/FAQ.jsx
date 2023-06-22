import questionLogo from "@/assets/question.png"
import Image from "next/image"

function FAQ() {
  return (
    <section className="my-6 px-4 flex-col flex space-y-2 text-center">
      <h2 className="font-bold text-4xl underline mb-4">FAQs</h2>

      <Image src={questionLogo} alt="question mark logo" className="w-8 mx-auto" />
      <h3 className="font-semibold text-lg mt-4">Can I customize the news categories I receive?</h3>
      <p className="">
        Yes, you can choose your preferred news categories and receive updates specifically tailored to your interests.
      </p>

      <hr className="border-1 border-gray-400 rounded-full mx-4" />

      <Image src={questionLogo} alt="question mark logo" className="w-8 mx-auto" />
      <h3 className="font-semibold text-lg  mt-4">How often will I receive news updates?</h3>
      <p>You have the flexibility to select your preferred frequency: daily or weekly.</p>

      <hr className="border-1 border-gray-400 rounded-full mx-4" />

      <Image src={questionLogo} alt="question mark logo" className="w-8 mx-auto" />
      <h3 className="font-semibold text-lg  mt-4">Can I cancel my subscription?</h3>
      <p>
        Yes, you can cancel your subscription at any time. Simply follow the cancellation instructions provided in the
        app or on the website.
      </p>

      <hr className="border-1 border-gray-400 rounded-full mx-4" />

      <Image src={questionLogo} alt="question mark logo" className="w-8 mx-auto" />
      <h3 className="font-semibold text-lg  mt-4">Are the news sources reliable?</h3>
      <p>
        We prioritize accuracy and quality. Email News sources articles from reputable and trusted news sources,
        ensuring the reliability of the information you receive.
      </p>

      <hr className="border-1 border-gray-400 rounded-full mx-4" />

      <Image src={questionLogo} alt="question mark logo" className="w-8 mx-auto" />
      <h3 className="font-semibold text-lg  mt-4">Is my personal information secure?</h3>
      <p className="">
        We take your privacy seriously. Rest assured that your personal information is protected and handled in
        accordance with our strict privacy policy.
      </p>
    </section>
  )
}

export default FAQ

function BottomSection() {
  return (
    <section className="mt-6 p-2 mx-0 text-center bg-gradient-to-tr from-sky-600 to-blue-900">
      <h2 className="text-white font-bold text-3xl">Get Emails For Breaking News</h2>
      <p className="text-white mt-2">Start getting breaking news from trustful resources</p>
      <div className="flex flex-col mt-6">
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
      </div>
      <p className="mt-6 font-normal text-sm px-2 text-white">
        Try email news for free 30 days. No credit card required. You can cancel your subscription anytime.
      </p>
    </section>
  )
}

export default BottomSection

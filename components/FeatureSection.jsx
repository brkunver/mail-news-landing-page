import mailLogo from "@/assets/mail.png"
import trustedLogo from "@/assets/insignia.png"
import personLogo from "@/assets/woman.png"

import Feature from "@/components/Feature"
function FeatureSection() {
  return (
    <section className="flex flex-col">
      <Feature
        logo={personLogo}
        title="Personalized News"
        description="Receive the latest news articles tailored to your interests."
      />
      <Feature
        logo={trustedLogo}
        title="Reliable Sources"
        description="Access articles from reputable and trusted news sources."
      />
      <Feature
        logo={mailLogo}
        title="Email Delivery"
        description="Get news updates delivered straight to your email inbox."
      />
    </section>
  )
}

export default FeatureSection

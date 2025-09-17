import { Marquee } from "@/components/eldoraui/marquee"
import Image from "next/image"

const companies = [
  {
    name: "Algorand",
    url: "/images/algorand_full_logo_white.png",
  },
  {
    name: "RiseIn",
    url: "/images/Pi7_risein-logo3.png",
  }
]

export function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 py-12 md:px-8 mt-10 mb-10">
        <h2 className="text-center text-xl font-semibold text-white/80">Trusted by 150+ startups, degens, enterprises and everyone in between.</h2>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center mx-6 min-w-[112px] min-h-[40px] h-12 w-32"
                style={{ aspectRatio: 'auto 112 / 40' }}
              >
                <Image
                  width={112}
                  height={40}
                  src={company.url || "/placeholder.svg"}
                  className="object-contain max-h-10 max-w-[112px] opacity-80 grayscale dark:brightness-0 dark:invert"
                  alt={company.name}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

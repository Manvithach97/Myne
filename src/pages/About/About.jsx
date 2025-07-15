import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Artist, Creator, Dreamer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="hero illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi! I'm <strong>Ch. Manvitha</strong>, a 4rth-year Computer Science and Engineering student at BVRITH. I’m passionate about crafting engaging, efficient web experiences using JavaScript and modern web technologies.
              </p>
              <p className="text-white">
                Beyond the world of coding, I express myself through music and creativity. I'm a guitarist, singer, and content creator who loves blending art with technology. Whether it's strumming chords, producing reels, or building user interfaces, I believe creativity has no boundaries.
              </p>
              <p className="text-white">
                I'm currently expanding into full-stack development, learning backend technologies to build complete and meaningful web applications. I enjoy solving real-world problems, participating in hackathons, and collaborating with people who are just as passionate about innovation as I am.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I believe in learning by doing — whether it’s building code or creating content. Every line I write and every note I play is a step forward in my journey to become a well-rounded creator in both tech and life.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ch. Manvitha
                    </cite>
                    <div className="text-white">Developer • Musician • Creator</div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

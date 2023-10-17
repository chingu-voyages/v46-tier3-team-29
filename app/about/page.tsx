import Image from 'next/image'

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-full">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            About Racers Run Club
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Welcome to Racers Run Club, a community of passionate runners. Our
            mission is to promote an active and healthy lifestyle through
            running. Whether you are a seasoned marathoner or just starting your
            running journey, we are here to support you every step of the way.
          </p>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            At Racers Run Club, we organize various events and training programs
            to help you achieve your running goals. We believe that running is
            not just a sport but a way of life. It is an opportunity to
            challenge yourself, connect with like-minded individuals, and enjoy
            the outdoors.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Join
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            width={400}
            height={400}
            src="https://assets.stickpng.com/images/580b585b2edbce24c47b2b72.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  )
}

export default About

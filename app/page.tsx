import { Button } from '@/components/atom/button';
import Image from 'next/image';

export default function HomeApp() {
  return (
    <>
      <div className="size-full">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <Image src="/images/logo.png" alt="" width={60} height={60} />
        </div>
        <div className="w-full max-w-screen-xl min-h-screen mx-auto p-4 flex flex-col gap-4 ">
          {/* <div className="px-4">
            <Image src="/images/logo.png" alt="" width={50} height={50} />
          </div> */}
          <div className="flex justify-between">
            <div className="w-11/12  font-bold text-4xl sm:text-6xl  lg:text-8xl xl:text-9xl">
              A Web Developer who loves to read{' '}
              <span className="text-redPrimary">literature</span>
              <span className="text-white">(manga)</span>
            </div>
            <div
              className="w-1/12 min-h-max bg-no-repeat hidden md:block"
              style={{
                backgroundImage: 'url("images/pattern.png")',
                backgroundSize: '500px',
              }}
            ></div>
          </div>
          <div
            className="w-full h-10 bg-no-repeat bg-cover md:hidden"
            style={{
              backgroundImage: 'url("images/pattern.png")',
            }}
          ></div>
          <div className="flex gap-4">
            <div
              className="w-1/2 min-h-max bg-no-repeat bg-cover hidden md:block"
              style={{
                backgroundImage: 'url("images/pattern.png")',
              }}
            ></div>
            <div className="w-full text-base text-justify md:w-1/2 md:text-lg">
              I&apos;m <strong>Arief Daffa</strong>, a software engineer (web)
              who has read too many{' '}
              <span className="text-redPrimary font-bold">literature</span> that
              it&apos;s become an obsession—almost to the point of getting sick
              of them! 😂
            </div>
          </div>
          <div className="flex md:justify-end">
            <Button className="text-white">About me</Button>
          </div>
        </div>
        <div className="max-w-screen-xl h-screen mx-auto ">
          <div className="size-full grid grid-cols-5 gap-4 p-16">
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border border-gray-300 shadow-lg relative">
              <Image
                src="/images/tech-stack/nextjs.png"
                alt=""
                width={100}
                height={100}
                className="absolute top-0 left-0 bottom-0 right-0 m-auto"
              />
            </div>
            <div className=" rounded-md border border-gray-300 shadow-lg relative">
              <Image
                src="/images/tech-stack/react.png"
                alt=""
                width={100}
                height={100}
                className="absolute top-0 left-0 bottom-0 right-0 m-auto"
              />
            </div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
            <div className=" rounded-md border bg-gray-300 relative"></div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-full min-h-screen flex">
        <div className="w-full max-w-screen-xl mx-auto p-4 flex flex-col gap-4 ">
          <div className="flex justify-between items-end">
            <div className="font-bold text-4xl">tech stack</div>
          </div>
          <div className="h-full flex-1 flex gap-4 flex-col md:flex-row">
            <div className="w-full h-screen grid grid-cols-2 gap-4  md:h-full md:w-2/6">
              <div className="border border-gray-300 shadow-md rounded-lg flex justify-center items-center relative">
                <Image
                  src="/images/tech-stack/react.png"
                  alt=""
                  width={100}
                  height={100}
                  className="absolute"
                />
              </div>
              <div className="border border-gray-300 shadow-md rounded-lg flex justify-center items-center relative">
                <Image
                  src="/images/tech-stack/nextjs.png"
                  alt=""
                  width={100}
                  height={100}
                  className="absolute"
                />
              </div>
              <div className="border border-gray-300 shadow-md rounded-lg flex justify-center items-center relative">
                <Image
                  src="/images/tech-stack/ts.png"
                  alt=""
                  width={100}
                  height={100}
                  className="absolute"
                />
              </div>
              <div className="border border-gray-300 shadow-md rounded-lg flex justify-center items-center relative">
                <Image
                  src="/images/tech-stack/laravel.png"
                  alt=""
                  width={170}
                  height={170}
                  className="absolute"
                />
              </div>
              <div className="border border-gray-300 shadow-md rounded-lg flex justify-center items-center relative">
                <Image
                  src="/images/tech-stack/mysql.png"
                  alt=""
                  width={100}
                  height={100}
                  className="absolute"
                />
              </div>
              <div className="border border-gray-300 shadow-md rounded-lg flex justify-center items-center relative">
                <Image
                  src="/images/tech-stack/nodejs.png"
                  alt=""
                  width={100}
                  height={100}
                  className="absolute"
                />
              </div>
              <div className="border border-gray-300 shadow-md rounded-lg flex justify-center items-center relative">
                <Image
                  src="/images/tech-stack/docker.png"
                  alt=""
                  width={100}
                  height={100}
                  className="absolute"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 md:w-4/6">
              <div className="h-min text-xl text-justify md:px-4">
                This is currently my <strong>tech stack</strong>, which includes
                various technologies and tools that I use for development.{' '}
                <br /> <br /> Will it{' '}
                <strong>
                  extend in the future?{' '}
                  <span className="text-primary">Of course!</span>
                </strong>{' '}
                I am always eager to learn and incorporate new technologies to
                enhance my skills and stay up-to-date with industry trends.{' '}
                <br /> <br />
                Will I{' '}
                <strong>
                  forget what I have already learned?{' '}
                  <span className="text-primary">Of course NOT!</span>
                </strong>{' '}
                The knowledge and experience I have gained so far will always be
                a foundation for my ongoing learning and growth in the tech
                field.
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

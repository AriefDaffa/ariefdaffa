import { GoFileMedia } from 'react-icons/go';

const loading = () => {
  const skeletonCardCount = Array.from(Array(2).keys());

  return (
    <div className="px-4 mt-4">
      <div className="text-4xl font-bold text-center md:text-left md:text-6xl">
        Projects
      </div>
      <div className="text-center mt-2 md:text-left">
        See some of my past works here
      </div>
      {/* {skeletonCardCount.map((_, idx) => (
        <div
          className="animate-pulse mt-4 border rounded-lg border-gray-light dark:border-none"
          key={idx}
        >
          <div className="rounded-lg h-full w-full p-2 dark:bg-gray-dark md:flex md:flex-row-reverse md:gap-4">
            <div className="rounded-lg p-2 h-44 bg-gray-light dark:bg-gray-main mb-2 flex justify-center md:w-1/3 md:mb-0">
              <GoFileMedia size="40" className="self-center" />
            </div>
            <div className="md:w-2/3 ">
              <div className="h-4 w-2/6 bg-gray-light dark:bg-gray-main rounded-full md:h-5 md:mt-2"></div>
              <div className="my-2">
                <div className="h-2 my-1 bg-gray-light dark:bg-gray-main rounded-full md:h-3 md:mt-2"></div>
                <div className="h-2 my-1 bg-gray-light dark:bg-gray-main rounded-full md:h-3 md:mt-2"></div>
                <div className="h-2 my-1 bg-gray-light dark:bg-gray-main rounded-full md:h-3 md:mt-2"></div>
                <div className="h-2 my-1 bg-gray-light dark:bg-gray-main rounded-full md:h-3 md:mt-2"></div>
                <div className="h-2 my-1 bg-gray-light dark:bg-gray-main rounded-full md:h-3 md:mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default loading;

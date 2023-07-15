import type { FC, ChangeEvent } from 'react';

interface SearchBarParams {
  keyword: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarParams> = (props) => {
  const { keyword, onChange } = props;

  return (
    <form className="my-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-dark dark:text-gray-light rounded-lg dark:border-gray-main dark:bg-black-main dark:placeholder-gray-400 dark:text-white outline-none"
          placeholder="Search Posts"
          required
          value={keyword}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;

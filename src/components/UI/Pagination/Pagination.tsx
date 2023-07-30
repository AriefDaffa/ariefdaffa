import { Fragment } from 'react';
import type { FC } from 'react';

// @TODO
const Pagination: FC = (props) => {
  const {} = props;

  const currentPage = 1;
  const totalPage = 10;

  return (
    <div className="flex flex-row gap-1">
      {totalPage > 4 ? (
        <Fragment>
          {Array.from(Array(totalPage), (e, idx) => (
            <div className="py-1 px-2" key={idx}>
              {idx + 1}
            </div>
          ))}
        </Fragment>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Pagination;

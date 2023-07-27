import React from 'react';

const Button = (props) => {
  const { but_name, type } = props;

  return (
    <div>
      <button type={type} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        {but_name}
      </button>
    </div>
  );
};

export default Button;

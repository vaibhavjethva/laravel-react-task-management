import { forwardRef, useRef } from 'react';

const SelectInput = forwardRef(function SelectInput({ className = '', children, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <select
            {...props}
            className={
                'bg-gray-800 text-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
          {children}
          </select>
    );
});

export default SelectInput

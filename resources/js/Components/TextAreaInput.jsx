import { forwardRef, useEffect, useRef } from 'react';

const TextInput = forwardRef(function TextAreaInput({ className = '', isFocused = false, children, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            className={
                'bg-gray-800 text-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >{children}</textarea>
    );
});

export default TextInput

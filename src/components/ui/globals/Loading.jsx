import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-[20px] h-[20px] border-[3px] border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;

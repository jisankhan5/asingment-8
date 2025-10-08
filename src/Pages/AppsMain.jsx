import React, { Suspense } from 'react';
import SingleApp from './SingleApp';

const AppsMain = ({data}) => {
    const firstEight = data.slice(0,8)
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5'>
                     {firstEight.map((app) => (
                    <SingleApp key={app.id} app={app}></SingleApp>
                  ))}
                </div>
            </Suspense>
        </div>
    );
};

export default AppsMain;
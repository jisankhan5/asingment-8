import React, { Suspense } from 'react';
import SingleApp from './SingleApp';

const AppsMain = ({data}) => {
    return (
        <div>
            <Suspense fallback={""}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5'>
                     {data.map((app) => (
                    <SingleApp key={app.id} app={app}></SingleApp>
                  ))}
                </div>
            </Suspense>
        </div>
    );
};

export default AppsMain;
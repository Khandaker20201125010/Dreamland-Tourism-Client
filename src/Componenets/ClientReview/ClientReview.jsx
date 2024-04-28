import p1 from '../../assets/image/p1.jpg';
import p2 from '../../assets/image/p2.jpg';
import p3 from '../../assets/image/p3.jpg';
import { IoStarSharp } from 'react-icons/io5';

const ClientReview = () => {
    return (
        <div className='mt-20 px-6'>
        <div>
            <h1 className='font-bold text-2xl text-center'>Customer Review</h1>
            <p className='md:w-1/2 text-center mt-5 m-auto'>Here is Our customer reviews .you can check our customer Review to trust our website at best</p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-[300px] h-[200px] rounded-2xl' src={p1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Jhon Hardy
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>The most trusty site .Nothing to lose but more to get</p>
                    <div className="card-actions justify-end">
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ width: '20px', height: '20px' }} />
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-[300px] h-[200px] rounded-2xl' src={p2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Ben tenechen
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>I got best deal.If anyone looking best site they are on right place</p>
                    <div className="card-actions justify-end">
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-[300px] h-[200px] rounded-2xl' src={p3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Harry Petter
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>I got the deal i was looking for so far.This website got best deal</p>
                    <div className="card-actions justify-end">
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        <IoStarSharp style={{ width: '20px', height: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ClientReview;
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import { PresentationChartBarIcon } from "@heroicons/react/24/outline";

const Stats = () => {
  return (
    <div className='flex divide-x divide-gray-700'>
      <div className='flex-1 p-4 first:rounded-l-lg last:rounded-r-lg bg-primary text-black flex flex-col gap-4'>
        <div className='flex gap-3'>
          <div className='w-6 h-6 rounded-full bg-black flex justify-center items-center text-primary'>
            <PresentationChartBarIcon className='w-4 h-4' />
          </div>
          Total sales
        </div>
        <div className='text-2xl font-bold'>$825,491.73</div>
        <div className='text-sm flex items-center gap-4'>
          <div className='flex gap-2 items-center'>
            <ArrowTrendingUpIcon className='w-3 h-3' />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
      </div>
      <div className='flex-1 p-4 first:rounded-l-lg last:rounded-r-lg bg-gray-800 flex flex-col gap-4'>
        <div className='flex gap-3'>
          <div className='w-6 h-6 text-white rounded-full bg-black flex justify-center items-center'>
            <PresentationChartBarIcon className='w-4 h-4' />
          </div>
          Total sales
        </div>
        <div className='text-2xl font-bold'>$825,491.73</div>
        <div className='text-sm flex items-center gap-4'>
          <div className='flex gap-2 items-center'>
            <ArrowTrendingUpIcon className='w-3 h-3' />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
      </div>
      <div className='flex-1 p-4 first:rounded-l-lg last:rounded-r-lg bg-gray-800 flex flex-col gap-4'>
        <div className='flex gap-3'>
          <div className='w-6 h-6 text-white rounded-full bg-black flex justify-center items-center'>
            <PresentationChartBarIcon className='w-4 h-4' />
          </div>
          Total sales
        </div>
        <div className='text-2xl font-bold'>$825,491.73</div>
        <div className='text-sm flex items-center gap-4'>
          <div className='flex gap-2 items-center'>
            <ArrowTrendingUpIcon className='w-3 h-3' />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
      </div>
      <div className='flex-1 p-4 first:rounded-l-lg last:rounded-r-lg bg-gray-800 flex flex-col gap-4'>
        <div className='flex gap-3'>
          <div className='w-6 h-6 text-white rounded-full bg-black flex justify-center items-center'>
            <PresentationChartBarIcon className='w-4 h-4' />
          </div>
          Total sales
        </div>
        <div className='text-2xl font-bold'>$825,491.73</div>
        <div className='text-sm flex items-center gap-4'>
          <div className='flex gap-2 items-center'>
            <ArrowTrendingUpIcon className='w-3 h-3' />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

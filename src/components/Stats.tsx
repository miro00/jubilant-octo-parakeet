import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import { PresentationChartBarIcon } from "@heroicons/react/24/outline";

const Stats = () => {
  return (
    <div className="flex divide-x divide-gray-700">
      <div className="relative flex flex-1 flex-col gap-4 overflow-hidden bg-primary p-4 text-black first:rounded-l-lg last:rounded-r-lg">
        <div className="flex gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-primary">
            <PresentationChartBarIcon className="h-4 w-4" />
          </div>
          Total sales
        </div>
        <div className="text-2xl font-bold">$825,491.73</div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ArrowTrendingUpIcon className="h-3 w-3" />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
        <div className="absolute bottom-4 right-1 h-20 w-20 rotate-45 bg-gradient-to-br from-sky-300"></div>
        <div className="absolute -bottom-8 right-1 h-20 w-20 rotate-45 bg-gradient-to-br from-sky-300"></div>
      </div>
      <div className="group flex flex-1 cursor-pointer flex-col gap-4 bg-gray-800 p-4 transition-colors first:rounded-l-lg last:rounded-r-lg hover:bg-primary hover:text-black">
        <div className="flex gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-colors group-hover:text-primary">
            <PresentationChartBarIcon className="h-4 w-4" />
          </div>
          Total sales
        </div>
        <div className="text-2xl font-bold">$825,491.73</div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ArrowTrendingUpIcon className="h-3 w-3" />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
      </div>
      <div className="group flex flex-1 cursor-pointer flex-col gap-4 bg-gray-800 p-4 transition-colors first:rounded-l-lg last:rounded-r-lg hover:bg-primary hover:text-black">
        <div className="flex gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-colors group-hover:text-primary">
            <PresentationChartBarIcon className="h-4 w-4" />
          </div>
          Total sales
        </div>
        <div className="text-2xl font-bold">$825,491.73</div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ArrowTrendingUpIcon className="h-3 w-3" />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
      </div>
      <div className="group flex flex-1 cursor-pointer flex-col gap-4 bg-gray-800 p-4 transition-colors first:rounded-l-lg last:rounded-r-lg hover:bg-primary hover:text-black">
        <div className="flex gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-colors group-hover:text-primary">
            <PresentationChartBarIcon className="h-4 w-4" />
          </div>
          Total sales
        </div>
        <div className="text-2xl font-bold">$825,491.73</div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ArrowTrendingUpIcon className="h-3 w-3" />
            20.9%
          </div>
          <div>+18.4K this week</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

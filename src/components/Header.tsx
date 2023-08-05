import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { BellIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className='flex items-center justify-between mb-6'>
      <div className='flex flex-col gap-2'>
        <div className='font-bold text-3xl'>Welcome back, Jenny</div>
        <div className='text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className='flex gap-7 items-center'>
        <MagnifyingGlassIcon className='w-5 h-5' />
        <div className='relative'>
          <BellIcon className='w-5 h-5' />
          <div className='absolute -top-[1px] -right-[1px] rounded-full w-2 h-2 bg-red-500'></div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='rounded-full bg-slate-500 w-7 h-7'></div>
          Jenny Wilson
          <ChevronDownIcon className='w-5 h-5' />
        </div>
      </div>
    </header>
  );
};

export default Header;

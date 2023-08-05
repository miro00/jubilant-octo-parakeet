import {
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import {
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className='w-1/6 border-r border-gray-700 flex flex-col'>
      <div className='font-bold text-2xl py-8 border-b border-gray-700 rounded-br-[34px] flex gap-2 items-center'>
        <AcademicCapIcon className='w-5 h-5' />
        salence
      </div>
      <nav className='flex text-lg flex-col border-t border-b border-gray-700 rounded-r-[34px] py-4 flex-1 -mt-[1px] -mb-[1px]'>
        <a href='#' className='flex gap-4 items-center py-4 font-bold'>
          <ChartBarIcon className='w-4 h-4 text-primary' /> Overview
        </a>
        <div className='flex justify-between items-center py-4 pr-8'>
          <div className='flex gap-4 items-center'>
            <ShoppingBagIcon className='w-4 h-4' />
            Product
          </div>
          <ChevronDownIcon className='w-5 h-5' />
        </div>
        <div className='flex justify-between items-center py-4 pr-8'>
          <div className='flex gap-4 items-center'>
            <UserIcon className='w-4 h-4' />
            Customers
          </div>
          <ChevronDownIcon className='w-5 h-5' />
        </div>
        <a href='#' className='flex justify-between items-center py-4 pr-8'>
          <div className='flex gap-4 items-center'>
            <ClipboardDocumentCheckIcon className='w-4 h-4' />
            Orders
          </div>
          <div className='p-1 rounded bg-red-500 w-5 h-5 text-sm flex items-center justify-center'>
            2
          </div>
        </a>
        <a href='#' className='flex gap-4 items-center py-4'>
          <ShoppingCartIcon className='w-4 h-4' />
          Checkout
        </a>
        <a href='#' className='flex gap-4 items-center py-4'>
          <Cog6ToothIcon className='w-4 h-4' />
          Settings
        </a>
      </nav>
      <div className='flex flex-col py-4 mt-auto border-t border-gray-700 rounded-tr-[34px] text-lg'>
        <div className='flex gap-4 items-center py-4'>Help</div>
        <div className='flex gap-4 items-center py-4'>Contact us</div>
        <div className='flex gap-4 items-center py-4'>
          <ArrowRightOnRectangleIcon className='w-4 h-4' />
          Log out
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

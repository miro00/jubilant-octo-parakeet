import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { PrinterIcon } from "@heroicons/react/20/solid";

const TopProducts = () => {
  return (
    <div className='w-9/12 flex flex-col justify-between bg-gray-800 rounded-lg py-4 px-6'>
      <div className='flex justify-between items-center'>
        <div className='font-bold text-lg'>Top products</div>
        <div className='flex gap-4'>
          <div className='relative w-96'>
            <MagnifyingGlassIcon className='w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3' />
            <input
              type='text'
              placeholder='Search'
              className='w-full bg-gray-800 py-2 pl-9 pr-4 border-gray-700 outline-none rounded-lg border'
            />
          </div>
          <div className='bg-gray-800 py-2 px-6 border-gray-700 border rounded-lg flex items-center gap-2'>
            This week
            <ChevronDownIcon className='w-4 h-4' />
          </div>
        </div>
      </div>
      <div className='w-full mt-4'>
        <table className='w-full'>
          <thead>
            <th className='text-left font-normal text-gray-600'>
              Product name
            </th>
            <th className='text-left font-normal text-gray-600'>Order ID</th>
            <th className='text-left font-normal text-gray-600'>Price</th>
            <th className='text-left font-normal text-gray-600'>Sold</th>
            <th className='last:text-right font-normal text-gray-600'>Sales</th>
          </thead>
          <tbody>
            <tr className='h-10'>
              <td>
                <div className='flex gap-4 items-center'>
                  <PrinterIcon className='w-5 h-5' />
                  <span className='font-bold'>MacBook Air</span>{" "}
                  <span className='text-gray-600'>AAPL</span>
                </div>
              </td>
              <td>#719261</td>
              <td>$1,846</td>
              <td>9,971</td>
              <td className='last:text-right'>$15,308,94</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;

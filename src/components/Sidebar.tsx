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
    <aside className="flex w-1/6 flex-col border-r border-gray-700">
      <div className="-mr-[1px] flex items-center gap-2 rounded-br-[34px] border-b border-r border-gray-700 py-8 text-4xl font-bold">
        <AcademicCapIcon className="h-6 w-6" />
        salence
      </div>
      <nav className="-mb-[1px] -mr-[1px] -mt-[1px] flex flex-1 flex-col rounded-r-[34px] border-b border-r border-t border-gray-700 py-4 text-lg">
        <a
          href="#"
          className="flex items-center gap-4 py-4 font-bold transition-colors hover:text-primary"
        >
          <ChartBarIcon className="h-4 w-4 text-primary" /> Overview
        </a>
        <div className="flex cursor-pointer items-center justify-between py-4 pr-8">
          <div className="flex items-center gap-4">
            <ShoppingBagIcon className="h-4 w-4" />
            Product
          </div>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center justify-between py-4 pr-8">
          <div className="flex items-center gap-4">
            <UserIcon className="h-4 w-4" />
            Customers
          </div>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        <a
          href="#"
          className="group group flex items-center justify-between py-4 pr-8 transition-colors"
        >
          <div className="flex items-center gap-4 group-hover:text-primary">
            <ClipboardDocumentCheckIcon className="h-4 w-4" />
            Orders
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded bg-red-500 p-1 text-sm">
            2
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-4 py-4 transition-colors hover:text-primary"
        >
          <ShoppingCartIcon className="h-4 w-4" />
          Checkout
        </a>
        <a
          href="#"
          className="flex items-center gap-4 py-4 transition-colors hover:text-primary"
        >
          <Cog6ToothIcon className="h-4 w-4" />
          Settings
        </a>
      </nav>
      <div className="-mr-[1px] mt-auto flex flex-col rounded-tr-[34px] border-r border-t border-gray-700 py-4 text-lg">
        <a
          href="#"
          className="flex items-center gap-4 py-4 transition-colors hover:text-primary"
        >
          Help
        </a>
        <a
          href="#"
          className="flex items-center gap-4 py-4 transition-colors hover:text-primary"
        >
          Contact us
        </a>
        <a
          href="#"
          className="flex items-center gap-4 py-4 transition-colors hover:text-primary"
        >
          <ArrowRightOnRectangleIcon className="h-4 w-4" />
          Log out
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { IoSearch } from "react-icons/io5";
import { cn } from "../utils/cn";

type Props = {
  className?: string;
  value: string;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
    | undefined;
  onSubmit: React.SubmitEventHandler<HTMLFormElement> | undefined;
};

function SearchBox(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        props.className,
      )}
    >
      <input
        type="text"
        value={props.value}
        placeholder="Search location..."
        onChange={props.onChange}
        className="px-4 py-2 w-57.5 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full "
      />

      <button className="px-4 py-2.25 bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-500 whitespace-nowrap h-full">
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchBox;

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton 1',
    title: 'Front-end Developer',
    email: 'lindsay.walton1@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton 2',
    title: 'Front-end Developer',
    email: 'lindsay.walton2@example.com',
    role: 'Member',
  },
  {
    name: 'Lindsay Walton 3',
    title: 'Front-end Developer',
    email: 'lindsay.walton3@example.com',
    role: 'Member',
  },
]
const UserList = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 bg-white mt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                <tr>
                  <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">

                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className='whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900'>
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                    <td>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className="flex h-8 w-8 items-center justify-center focus-visible:outline-0 rounded-md border transition-colors hover:bg-muted">
                          <Icons.ellipsis className="h-4 w-4"/>
                          <span className="sr-only">Open</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            className="flex cursor-pointer items-center"
                          >
                            <Icons.pencil className="mr-2 h-4 w-4"/>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator/>
                          <DropdownMenuItem
                            className="flex cursor-pointer items-center"
                          >
                            <Icons.delete className="mr-2 h-4 w-4"/>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
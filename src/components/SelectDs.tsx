import React, { useState } from 'react';
import { BsDatabase } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import DbEnter from './DbEnter';

function SelectDs() {
  const sources = [
    {
      db: 'MongoDB',
      icon: <DiMongodb className="text-green-600" size={24} />,
    },
    {
      db: 'Postgres',
      icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
    },
    {
      db: 'Postgres',
      icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
    },
    {
      db: 'Postgres',
      icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
    },
    {
      db: 'Postgres',
      icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
    },
    {
      db: 'Postgres',
      icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
    },
    {
      db: 'Postgres',
      icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
    },
    {
      db: 'Postgres',
      icon: <BiLogoPostgresql className="text-blue-600" size={24} />,
    },
  ];
  const [selectedSource, setSelectedSource] = useState<number>(-1);
  return (
    <div className="">
      <div>
        <DbEnter page={1} />
      </div>
      <div className="content-center h-[80vh] justify-center flex items-center">
        <div className="border border-gray-300 rounded-md w-[35vw] h-[60vh]">
          <div className="flex items-center justify-between border-b p-2 border-gray-300">
            <div className="flex items-center">
              <div className="p-2 border rounded-md border-gray-300">
                <BsDatabase className="text-blue-600" size={20} />
              </div>
              <div className="ml-2">
                <h1 className="font-mono ml-2 text-blue-600 text-lg font-light">Select Source</h1>
              </div>
            </div>
            <div className="content-end transition-opacity duration-200">
              <div className="flex transition-all duration-200 justify-end items-center">
                <Link to={`/connection/${sources[selectedSource === -1 ? 0 : selectedSource].db}`}>
                  <button className="p-2 rounded-md border transition-all duration-200 border-gray-300 hover:bg-gray-100">
                    <h1 className="font-mono text-sm font-light">Continue</h1>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-3">
            <form className=" max-w-xl mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-1 font-mono ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search.."
                  required
                />
                {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-mono rounded-md text-sm px-4 py-2">Search</button> */}
              </div>
            </form>
          </div>
          <div className="flex-row px-3 max-h-[44vh] overflow-y-scroll">
            {sources.map((source, idx) => {
              return (
                <>
                  {selectedSource === idx ? (
                    <div key={idx} className="flex px-3 py-3 mt-2 rounded-md bg-gray-100 items-center">
                      <button className="flex items-center" onClick={() => setSelectedSource(idx)}>
                        <div className="border rounded-md border-gray-300 p-2">{source.icon}</div>
                        <div>
                          <h1 className="font-mono font-light ml-2 text-xl">{source.db}</h1>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div
                      key={idx}
                      className="flex px-3 mt-2 py-3 rouned-md hover:rounded-md transition-all duration-150 ease-in hover:bg-gray-100 items-center"
                    >
                      <button className="flex items-center" onClick={() => setSelectedSource(idx)}>
                        <div className="border rounded-md border-gray-300 p-2">{source.icon}</div>
                        <div>
                          <h1 className="font-mono ml-2 font-light text-xl">{source.db}</h1>
                        </div>
                      </button>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectDs;
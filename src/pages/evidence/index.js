import Layout from "../../api/layout/layout";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { FcOpenedFolder } from "react-icons/fc";
import { ImFileText2 } from "react-icons/im";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Evidence() {
  let [categories] = useState({
    Videos: [
      {
        id: 1,
        icon: <FcOpenedFolder size={90} />,
      },
      {
        id: 2,
        icon: <FcOpenedFolder size={90} />,
      },
    ],
    Audio: [
      {
        id: 1,
        icon: <FcOpenedFolder size={90} />,
      },
      {
        id: 2,
        icon: <FcOpenedFolder size={90} />,
      },
    ],
    PdfFiles: [
      {
        id: 1,
        icon: <ImFileText2 size={90} />,
      },
      {
        id: 2,
        icon: <ImFileText2 size={90} />,
      },
    ],
  });

  return (
    <Layout>
      <div className="w-full  max-w-md px-2 py-16 sm:px-0 ml-[500px] justify-center">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 w-[900px]">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx}>
                <div className="flex  space-x-9 justify-center ml-72">
                  {posts.map((post) => (
                    <div key={post.id}>{post.icon}</div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
}

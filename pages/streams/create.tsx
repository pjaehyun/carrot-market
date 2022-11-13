import type { NextPage } from "next";
import Layout from "../../components/layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-5">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <input
              id="name"
              type="email"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <div className="rounded-md shadow-sm relative flex items-center">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              id="price"
              type="text"
              className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="0.00"
            />
            <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
              <span className="">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <div>
            <textarea
              id="description"
              className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
              rows={4}
            />
          </div>
        </div>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Go Live!
        </button>
      </div>
    </Layout>
  );
};

export default Create;

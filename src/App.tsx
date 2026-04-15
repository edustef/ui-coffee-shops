import { ShopList } from './components/shopList'

import { Filters } from './components/filters'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:p-6">
      <h1 className="mt-6 md:mt-12 text-center text-3xl md:text-5xl font-bold text-gray-900 mb-6">
        Coffee Addicts
      </h1>

      <div className="mt-6 md:mt-12 mx-auto max-w-7xl flex flex-col md:flex-row gap-8 md:gap-12 w-full md:justify-around">
        {/* Filters */}
        <div className="w-full md:max-w-xs">
          <h2 className="font-bold text-2xl">Filter</h2>
          <Filters />
        </div>

        {/* Shops */}
        <div className="w-full md:max-w-md">
          <h2 className="font-bold text-2xl">Shops</h2>
          <ShopList className="mt-4" />
        </div>
      </div>
    </div>
  )
}

export default App

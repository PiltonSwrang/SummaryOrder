import './App.css';
function App() {
    return (
        <div className="flex justify-center items-center h-screen sm:px-6 z-10">
            <div className="border-2 rounded-2xl shadow-2xl p4 lg:w-3/12">
                <img className="rounded-tr-2xl rounded-tl-2xl w-full" src="/images/hero.svg" alt="" />
                <div className="px-4 text-center">
                    <h1 className="capitalize text-2xl mb-2 mt-4 font-bold">order summary</h1>
                    <p className="text-gray-600 px-2">You can now listen to million of songs, audiobooks, and podcasts on any device anywhere you like!</p>

                    <div className="w-full mt-6 mb-2 shadow-sm bg-gray-100 text-gray-600 rounded-md px-4 py-2 font-semibold flex justify-between items-center">
                        <img src="/images/music.svg" alt="" />
                        <div className="relative right-6">
                            <h1 className="font-bold">Annual Plan</h1>
                            <h1>$59.99/year</h1>
                        </div>
                        <a href="#!">
                            <p className="text-blue-800 hover:text-blue-500 underline">Change</p>
                        </a>
                    </div>

                    <button className="bg-blue-700 hover:bg-blue-600 w-full mt-4 mb-2 shadow-xl text-white rounded-md px-4 py-2 font-semibold">Proceed to Payment</button>
                    <button className="w-full mb-4 text-gray-700 hover:text-gray-600 px-4 py-2 font-semibold">Cancel to Order</button>
                </div>
            </div>
        </div>
    );
}

export default App;

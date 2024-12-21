
function Navbar() {
    return (
        <div className='flex justify-between items-center w-[90%] mx-auto py-4'>
            <h1 className="font-bold text-2xl cursor-pointer">PayUp</h1>
            <ul className='flex gap-6 *:hover:cursor-pointer'>
                <li>Service</li>
                <li>How It Work</li>
                <li>Benefits</li>
                <li>Pricing</li>
            </ul>
            <div className='flex gap-4'>
                <button>Login</button>
                <button className="border border-[#D1B65B] px-2 rounded-sm py-1">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
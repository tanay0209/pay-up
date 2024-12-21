import './App.css'
import Navbar from './Navbar'
import card from "./assets/credit-card.png"
function App() {

  return (
    <div className='min-h-dvh w-full bg-[#2A2A2A] text-white flex flex-col pb-12'>
      <Navbar />
      <div className='flex relative flex-col items-center justify-center'>
        <div className='absolute w-full h-dvh bg-[radial-gradient(50%_65%_at_70%_60%,#D1B65B,#D1B65B8F,transparent)] blur-xl' />
        <div className='flex items-center justify-center'>
          <div className='w-1/3 flex flex-col ml-24 space-y-8'>
            <h1 className='font-bold text-6xl'>Fast and Simple Digital Payment Solution</h1>
            <p>Many credit cards are lost by the users, stolen or expired. But, these cards can still be used by others. This app can provide you with a card and necessary information. They also offer burner credit cards (single use virtual cards).</p>
            <div className='flex gap-4 *:px-3 *:py-1 *:rounded-sm'>
              <button className='text-black bg-[#D1B65B]'>Get it Now</button>
              <button className='border-[#D1B65B] border'>Download App</button>
            </div>
          </div>
          <div className='w-2/3 z-10'>
            <img
              src={card}
              alt="Credit Card"
              className='w-full'
            />
          </div>
        </div>
        <div className='flex justify-between w-[80%] mx-auto items-center'>
          <div className='flex gap-3 items-start'>
            <div className='flex flex-col flex-wrap'>
              <h2 className='text-[#D1B65B] font-semibold text-2xl'>01</h2>
              <h4 className='font-medium text-lg'>Financial Transactions</h4>
              <p className='w-1/2 text-sm'>Manage everything from the letter app or website</p>
            </div>
            <div className='flex flex-col flex-wrap'>
              <h2 className='text-[#D1B65B] font-semibold text-2xl'>02</h2>
              <h4 className='font-medium text-lg'>Easy To Use System</h4>
              <p className='w-1/2 text-sm'>Each card can have its own unique card holder name balance</p>
            </div>
          </div>
          <div className='flex flex-col text-center space-y-1 text-white z-20'>
            <h5 className='font-semibold text-3xl px-3 py-2 bg-[#D1B65B]'>1.24M</h5>
            <h6 className='text-xs'>World Active User</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

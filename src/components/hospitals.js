const Hostpitals = () => {
    return <div>
        <div class='flex flex-col overflow-hidden w-full bg-white min-h-[400px]  border-2 border-red-400 rounded-md border-dotted '>
            <div className='h-[250px] w-auto  overflow-hidden  bg-red-200'>
                <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" className="h-full w-full object-cover"></img>
            </div>
            <div className='flex flex-col justify-center items-center text-red-500 mt-4'>
                <h1 className='italic font-semibold text-xl text-black'>Appolo Hospital</h1>
                <h1 className='italic font-semibold text-l text-red-500'>Banglore</h1>
            </div>
        </div>
        
    </div>
}

export default Hostpitals
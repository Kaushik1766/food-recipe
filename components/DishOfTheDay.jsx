import React from 'react'

function DishOfTheDay() {
    return (
        <div className=" hero min-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <img src="https://assets.vogue.in/photos/5ebe697e1e1bf8da0f205095/2:3/w_2560%2Cc_limit/lassi%2520buttermilk%2520chaas%2520recipes%2520for%2520home.jpg" className='h-full' alt="" />
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/3'>
                    <h1 className="text-5xl font-bold">Dish of the Day</h1>
                    <p className="py-6">Lassi is a traditional Indian beverage made from yogurt or buttermilk, enjoyed across the Indian subcontinent. Typically served chilled, lassi offers a refreshing and creamy texture that balances sweet and savory flavors. The drink can be infused with various ingredients, such as fruit, spices, or herbs. A sweet lassi might be blended with sugar, cardamom, and rosewater, while a savory version, known as salted lassi, often includes cumin, coriander, and salt. Some lassis are even made with fruit like mango, creating a deliciously tangy and sweet treat. It's a popular choice to cool down in the summer heat or to complement spicy foods. The versatility of lassi makes it a cherished part of Indian cuisine, appealing to a wide range of palates.</p>
                </div>
            </div>
        </div>
    )
}

export default DishOfTheDay
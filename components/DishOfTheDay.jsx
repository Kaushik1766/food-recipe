import React from 'react'

function DishOfTheDay() {
    return (
        <div className=" hero min-h-screen bg-base-300 w-10/12 mx-auto my-20 rounded-2xl shadow-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <div className='h-full w-full bg-center bg-cover bg-no-repeat' style={{
                                backgroundImage: `url(https://assets.bonappetit.com/photos/58c94cc584ebdb0ec55e3656/1:1/w_2560%2Cc_limit/frozen-rum-mango-lassi.jpg)`
                            }}>

                            </div>
                            {/* <img src="https://assets.vogue.in/photos/5ebe697e1e1bf8da0f205095/2:3/w_2560%2Cc_limit/lassi%2520buttermilk%2520chaas%2520recipes%2520for%2520home.jpg" className='h-full' alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/3'>
                    <h1 className="text-5xl font-bold">Dish of the Day: Mango Lassi</h1>
                    <p className="py-6">Mango lassi is a delightful and refreshing Indian beverage that combines the creamy texture of yogurt with the sweet and tangy flavor of ripe mangoes. This popular drink is often served chilled, making it a perfect choice to beat the heat on a hot day or to accompany spicy dishes. The key ingredients include fresh or canned mango pulp, yogurt, sugar, and sometimes a hint of cardamom or rosewater for added aroma. Blended to a smooth consistency, mango lassi has a vibrant orange color and a taste that balances the creaminess of yogurt with the tropical sweetness of mangoes. Its versatility and appealing flavor make it a favorite at Indian restaurants and a staple during mango season.</p>
                </div>
            </div>
        </div>
    )
}

export default DishOfTheDay
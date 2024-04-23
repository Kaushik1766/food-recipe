import React from 'react'

const regions = [
    {
        "title": "North Indian",
        "content": "North Indian cuisine is characterized by rich, creamy dishes often incorporating dairy products like cream and ghee. Popular dishes include butter chicken, paneer tikka, and tandoori dishes, reflecting a Mughlai influence. Bread, such as naan and roti, is a staple, and spices like cumin, coriander, and garam masala are commonly used.",
        "link": "https://assets.vogue.com/photos/6352ccb841ea2bd565be085f/master/w_2560%2Cc_limit/GettyImages-1223580360.jpg"
    },
    {
        "title": "South Indian",
        "content": "South Indian cuisine is known for its extensive use of rice, lentils, and coconut. Dishes like dosa, idli, and sambhar are iconic, often served with coconut chutney. The cuisine is generally spicier and features tamarind and curry leaves. The use of fermented foods is common, lending a unique tangy flavor to many dishes.",
        "link": "https://i0.wp.com/swadishta.de/wp-content/uploads/2021/01/Idle.jpg"
    },
    {
        "title": "East Indian",
        "content": "East Indian cuisine is influenced by its proximity to the Bay of Bengal, leading to a focus on seafood and rice. Bengali sweets like rasgulla and sandesh are renowned, and dishes often feature mustard oil and poppy seeds. Fish dishes, like fish curry and fish fry, are widely enjoyed, while vegetarian dishes also have a strong presence.",
        "link": "https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1681669088131.jpg-org"
    },
    {
        "title": "West Indian",
        "content": "West Indian cuisine encompasses a variety of flavors and styles. Maharashtra and Gujarat are known for their vegetarian dishes, while Goan cuisine has Portuguese influences, resulting in a diverse array of seafood and meat dishes like vindaloo and sorpotel. The cuisine often features tangy and spicy flavors, with a heavy use of coconut and kokum.",
        "link": "https://miro.medium.com/v2/resize:fit:1200/1*UegPuEE-nV5Nv_M734AVng.jpeg"
    }
]


function Regions() {
    return (
        <>
            <div className='w-4/5 mx-auto bg-base-200 shadow-xl p-10 rounded-2xl my-20'>
                <h1 className='text-center text-5xl font-bold w-full'>Dishes around India</h1>
                <div className='grid grid-cols-2 w-[50rem] my-10 mx-auto items-center gap-10'>
                    {
                        regions.map((item, idx) => {
                            return <div className="card rounded-2xl overflow-hidden w-96 bg-base-100 shadow-xl image-full mx-auto" key={idx}>
                                <figure className='blur-[3px]'><img src={item.link} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.content}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Regions
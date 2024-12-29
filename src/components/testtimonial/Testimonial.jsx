/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/461943235_2047264759122196_53201498049207818_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGGaJsb7Ro_MWBRdwMF1vsrsB0cwtJjb1awHRzC0mNvVlhr9oCOb46eHizvoKz8QZ4ZvBB5gkO_LGG2hn6Ks5gf&_nc_ohc=ZWyUmigaeR0Q7kNvgEhv36B&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=A3Cs8xE-GnOR5u9Q02kSrkv&oh=00_AYATlBqERqenPWj_kDWekT5ElOhLnQrtKaIazCBVrKsdlw&oe=6777A588" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Md Alhaz</h2>
                                <p className="text-gray-500">Senior App Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/411907067_370108515602540_8808047955025577315_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEccpaW0Pf5U9fECeurhWrgk291-flY0TOTb3X5-VjRM13y0eDLUjqJfIrY9628vih6wZ03IAlF3Z2seiHOdaWt&_nc_ohc=h6vq5XyCw94Q7kNvgFLn_8S&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AJrLyA5NYeQ1ENNup4qDaZP&oh=00_AYChPxSQZA9Ltm5mCAluEqWge5f291oBYH7UthshJgLhOA&oe=6777ADBE" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sofaran Akter</h2>
                                <p className="text-gray-500">Network Engineer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/467515881_1812393599570480_1781948974553013374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFemhLy-d7n-1M91lMlFE1hyZ_3YWP3N_bJn_dhY_c39oQC1sLnkV0gG91xFHgjvVakQvTrhGI-1eXTkKpQ8PCR&_nc_ohc=id-TctZWjNwQ7kNvgFn9P5T&_nc_zt=23&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AQaAp1IFsYOvOlNpVJex8Rg&oh=00_AYDXXrc9tkI_G8EQTyRjyyaQ7x0FIhSTrd-A4Mv_nOw15g&oe=6777792D" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Abu Bakar Siddique Rakib</h2>
                                <p className="text-gray-500">Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
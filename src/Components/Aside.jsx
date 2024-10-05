import React from 'react';
import { GoSearch } from "react-icons/go";
import {  IoIosArrowForward } from "react-icons/io";


const Aside = () => {
    return (
        <div>
            <div>
                <h6 className='m-3' style={{fontSize:'13px'}}>TOP CATEGORIES</h6>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <img src="https://n1.sdlcdn.com/imgs/k/v/x/Men_sitenavigation-b972a.jpg" alt="" width={30}  style={{borderRadius:'50%'}} />
                        <h6 style={{fontSize:'13px'}}>Men's Fashion</h6>
                    </div>
                    <div class="asideChild col-8 position-absolute top-0 z-3 py-2 bg-body-tertiary" >
                        <div class="col-3 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>FOOTWEAR</a></li>
                                <li><a href="">Sport Shoes</a></li>
                                <li><a href="">Casual Shoes</a></li>
                                <li><a href="">Slippers & Flip Flops</a></li>
                                <li><a href="">Sandals & Floaters</a></li>
                                <li><a href="">Formal Shoes</a></li>
                                <li><a href="">Loafers</a></li>
                                <li><a href="">Sneakers</a></li>
                                <li><a href="">Ethnic Footwear</a></li>
                                <li><a href="">Shoe Accessories</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>BAGS & LUGGAGE</a></li>
                                <li><a href="">Backpacks</a></li>
                                <li><a href="">Laptop Bags</a></li>
                                <li><a href="">Hiking bags</a></li>
                                <li><a href="">Luggage & Suitcase</a></li>
                                <li><a href="">Travel Accessories</a></li>
                                <li><a href="">Office Bags</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3" style={{borderLeft:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>CLOTHING</a></li>
                                <li><a href="">T-Shirts & Polos</a></li>
                                <li><a href="">Shirts</a></li>
                                <li><a href="">Jeans</a></li>
                                <li><a href="">Trousers & Chinos</a></li>
                                <li><a href="">Innerwear & Sleepwear</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>WINTER WEAR</a></li>
                                <li><a href="">Jackets</a></li>
                                <li><a href="">Sweatshirts</a></li>
                                <li><a href="">Sweaters</a></li>
                                <li><a href="">Thermals</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>SPORTS WEAR</a></li>
                                <li><a href="">T-Shirts & Polos</a></li>
                                <li><a href="">Trackpants & Track suits</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>MEN'S GROOMING</a></li>
                                <li><a href="">Shaving Creams & Gels</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                        <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>EYE WEAR</a></li>
                                <li><a href="">Sunglasses</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>WATCHES</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>JWELLERY & CUFFLINKS</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>ACCESSORIES</a></li>
                                <li><a href="">Wallets</a></li>
                                <li><a href="">Belts</a></li>
                                <li><a href="">Hats & Caps</a></li>
                                <li><a href="">Gift Sets</a></li>
                                <li><a href="">Neckties</a></li>
                                <li><a href="">Card Holders</a></li>
                                <li><a href="">Keychains</a></li>
                                <li><a href="">Suspenders</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>FRAGRANCES</a></li>
                                <li><a href="">Perfumes</a></li>
                                <li><a href="">Doedorants</a></li>
                                <li><a href="">Attars (Non-Alcoholic))</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                            <img src="https://n3.sdlcdn.com/imgs/i/x/e/MensFashion_29thSep-a3126.jpg" height={'100%'} width={'100%'} alt="" />
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <img src="https://n1.sdlcdn.com/imgs/k/v/x/WoMen_sitenav-5a8ca.jpg" alt="" width={30}  style={{borderRadius:'50%'}}/>
                        <h6 style={{fontSize:'13px'}}>Women's Fashion</h6>
                    </div>
                    <div class="asideChild col-8 position-absolute top-0 z-3 py-2 bg-body-tertiary" >
                        <div class="col-3 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>ETHNIC WEAR</a></li>
                                <li><a href="">Sarees</a></li>
                                <li><a href="">Kurtas & Kurtis</a></li>
                                <li><a href="">Lehangas</a></li>
                                <li><a href="">Salwar Suits</a></li>
                                <li><a href="">Salwars & Leggings</a></li>
                                <li><a href="">Bloues & Petticoats</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>FOOTWEAR</a></li>
                                <li><a href="">Heels</a></li>
                                <li><a href="">Flats & Sandals</a></li>
                                <li><a href="">Slippers & Flip Flops</a></li>
                                <li><a href="">Ballerinas</a></li>
                                <li><a href="">Casual Shoes</a></li>
                                <li><a href="">Sports Shoes</a></li>
                                <li><a href="">Ethnic Footwear</a></li>
                                <li><a href="">Floater Sandal</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>PERFUMES & FRAGRENCES</a></li>
                                <li><a href="">Perfumes</a></li>
                                <li><a href="">Doedorants</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3" style={{borderLeft:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>WESTERN WEARS</a></li>
                                <li><a href="">Dresses</a></li>
                                <li><a href="">Tops & Tunics</a></li>
                                <li><a href="">T-Shirts</a></li>
                                <li><a href="">Denims & Trousers</a></li>
                                <li><a href="">Pants & Palazzos</a></li>
                                <li><a href="">Innerwear</a></li>
                                <li><a href="">Nightwear</a></li>
                                <li><a href="">Spotswear</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>WINTER WEAR</a></li>
                                <li><a href="">Outwear & Jackets</a></li>
                                <li><a href="">Sweatshirts</a></li>
                                <li><a href="">Cardigans & Pullovers</a></li>
                                <li><a href=""> Shrugs & Waistcoats</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>MATERNITY WEAR</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>HANDBAGS & CLUTCHES</a></li>
                                <li><a href="">Handbags</a></li>
                                <li><a href="">Wallets</a></li>
                                <li><a href="">Clutches</a></li>
                                <li><a href="">Utility Bags</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                        <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>EYE WEAR</a></li>
                                <li><a href="">Sunglasses</a></li>
                                <li><a href="">Spectacle Frames</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>WATCHES</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>GOLD COINS & BARS</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>FASHION JWELLERY</a></li>
                                <li><a href="">Necklaces & Sets</a></li>
                                <li><a href="">Earrings</a></li>
                                <li><a href="">Bangles & Bracelets</a></li>
                                <li><a href="">Pendants & sets</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>FASHION & ACCESSORIES</a></li>
                                <li><a href="">Hair Accessories</a></li>
                                <li><a href="">Stoles & Scarves</a></li>
                                <li><a href="">Socks & Stockings</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                            <img src="https://n1.sdlcdn.com/imgs/i/n/g/MS_WomenWatches_LeftNav1Aug-e15a1.jpg" height={'100%'} width={'100%'} alt="" />
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <img src="https://n1.sdlcdn.com/imgs/k/v/x/HOme_sitenavigation-d7a00.jpg" alt="" width={30}  style={{borderRadius:'50%'}}/>
                        <h6 style={{fontSize:'13px'}}>Home and Kitchen</h6>
                    </div>
                    <div class="asideChild col-8 position-absolute top-0 z-3 py-2 bg-body-tertiary " >
                        <div class="col-3 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>KITCHEN APPLIANCES</a></li>
                                <li><a href="">Juicer Mixer Grinders</a></li>
                                <li><a href="">Gas Stoves & Hobs</a></li>
                                <li><a href="">Chimneys</a></li>
                                <li><a href="">Induction Cooktops</a></li>
                                <li><a href="">Kettles & Coffee Makers</a></li>
                                <li><a href="">Choppers & Blenders</a></li>
                                <li><a href="">Sandwich Makers</a></li>
                                <li><a href="">Roti Makers</a></li>
                                <li><a href="">Electic Cookers</a></li>
                                <li><a href="">Aur Fryers</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>KITCHENWARE</a></li>
                                <li><a href="">Cookware & Bakeware</a></li>
                                <li><a href="">Kitchen Storage</a></li>
                                <li><a href="">Dining & Serving</a></li>
                                <li><a href="">Pressure Cookers</a></li>
                                <li><a href="">Water Bottles</a></li>
                                <li><a href="">Tea & Coffeeware</a></li>
                                <li><a href="">Bar Accessories</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3" style={{borderLeft:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>HOME FRNISHING</a></li>
                                <li><a href="">Bed Linen</a></li>
                                <li><a href="">Bath Linen</a></li>
                                <li><a href="">Blankets & Quilts</a></li>
                                <li><a href="">Curtains & Accessories</a></li>
                                <li><a href="">Mattresses</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>FURNITURE</a></li>
                                <li><a href="">Storage & Display</a></li>
                                <li><a href="">Bean Bag</a></li>
                                <li><a href="">Tablets & Desks</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>HOME DECOR</a></li>
                                <li><a href="">Lightning Fixtures</a></li>
                                <li><a href="">Wall Decor</a></li>
                                <li><a href="">Gifts & Decor</a></li>
                                <li><a href="">Religion & Spirituality</a></li>
                                <li><a href="">LED Bulbs</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                        <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>HOME IMPROVEMENT</a></li>
                                <li><a href="">Home Utility</a></li>
                                <li><a href="">Cleaning Mops</a></li>
                                <li><a href="">Plants & Gardening</a></li>
                                <li><a href="">Ironing Boards</a></li>
                                <li><a href="">Home Cleaning</a></li>
                                <li><a href="">Laundry Accessories</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>TOOLS & HARDWARE</a></li>
                                <li><a href="">Power & Hand Tools</a></li>
                                <li><a href="">Bathroom Accessories</a></li>
                                <li><a href="">Electrical</a></li>
                                <li><a href="">Taps & Showers</a></li>
                                <li><a href="">Safes Locks & Door Fitting</a></li>
                                <li><a href="">Sanitaryware</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>PET SUPPLIES</a></li>
                                <li><a href="">Dog Supplies</a></li>
                                <li><a href="">Cat Supplies</a></li>
                                <li><a href="">Fish & Aquatic Supplies</a></li>
                                <li><a href="">Bird Supplies</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                            <img src="https://n1.sdlcdn.com/imgs/i/1/r/GM_28oct-e8cd1.jpg" height={'100%'} width={'100%'} alt="" />
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <img src="https://n4.sdlcdn.com/imgs/k/v/x/Toys_Sitenavigation-ef666.jpg" alt="" width={30}  style={{borderRadius:'50%'}}/>
                        <h6 style={{fontSize:'13px'}} className='text-truncate'>Toys ,Kid's Fashion & more</h6>
                    </div>
                    <div class="asideChild col-8 position-absolute top-0 z-3 py-2 bg-body-tertiary " >
                        <div class="col-3 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>TOYS</a></li>
                                <li><a href="">Toy Cars</a></li>
                                <li><a href="">Electronic Toys</a></li>
                                <li><a href="">Action Toys & Figures</a></li>
                                <li><a href="">Ride On & Scooters</a></li>
                                <li><a href="">Outdoor Toys</a></li>
                                <li><a href="">Soft Toys</a></li>
                                <li><a href="">Educational Toys</a></li>
                                <li><a href="">Toddler Toys</a></li>
                                <li><a href="">Dolls & Doll Houses</a></li>
                                <li><a href="">Activity Sets</a></li>
                                <li><a href="">Indoor & Board Games</a></li>
                                <li><a href="">Party Supplies</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BICYCLES & TRYCYCLES</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>KID'S FOOTWEAR </a></li>
                                <li><a href="">Boys Footwears</a></li>
                                <li><a href="">Girls Footwears</a></li>
                                <li><a href="">Baby Footwears</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>ACCESSORIES</a></li>
                                <li><a href="">Eyewear</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>KID'S WATCHES</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3" style={{borderLeft:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>KID'S CLOTHING</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>GIRL'S CLOTHING</a></li>
                                <li><a href="">Frocks & Dresses</a></li>
                                <li><a href="">Lehanga Cholis & Sarees</a></li>
                                <li><a href="">Jeans & Pants</a></li>
                                <li><a href="">Suit Cases</a></li>
                                <li><a href="">Tops, Tees & Shirts</a></li>
                                <li><a href="">Leggings & Jeggings</a></li>
                                <li><a href="">Top & Bottom Sets</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BOY'S CLOTHING</a></li>
                                <li><a href="">Top Wear</a></li>
                                <li><a href="">Top & Bottom Sets</a></li>
                                <li><a href="">Bottom Wear</a></li>
                                <li><a href="">Ethnicwear</a></li>
                                <li><a href="">Innerwear</a></li>
                                <li><a href="">Nightwear</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>BABY CLOTHING</a></li>
                                <li><a href="">Top & Bottom Sets</a></li>
                                <li><a href="">Frocks, Dresses & Skirts</a></li>
                                <li><a href="">Rompers % Body Suits</a></li>
                                <li><a href="">Shirts, T-shirts & Tops </a></li>
                                <li><a href="">Bottom Wear</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BABY CARE</a></li>
                                <li><a href="">Baby Mosquito Nets</a></li>
                                <li><a href="">Baby Blankets</a></li>
                                <li><a href="">Baby Carriers</a></li>
                                <li><a href="">Baby Stollers</a></li>
                                <li><a href="">Walkers</a></li>
                                <li><a href="">Freeding & Nursing</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>LAB EQUIPMENT</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>STATIONARY</a></li>
                                <li><a href="">Pens & Markers</a></li>
                                <li><a href="">Pencil Boxes</a></li>
                                <li><a href="">Files & Folders</a></li>
                                <li><a href="">Calculators</a></li>
                                <li><a href="">Diaries & Planners</a></li>
                                <li><a href="">Printing Papers</a></li>
                                <li><a href="">Notebooks & Writing Pads</a></li>
                                <li><a href="">Art & Craft Supplies</a></li>
                                <li><a href="">Photo Papers</a></li>
                                <li><a href="">Tapes</a></li>
                                <li><a href="">Card Holders</a></li>
                                <li><a href="">Staplers</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                            <img src="https://n1.sdlcdn.com/imgs/i/8/f/KidsNewLauchLeftNav-6aef1.jpg" height={'100%'} width={'100%'} alt="" />
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <img src="https://n2.sdlcdn.com/imgs/k/v/x/Beauty_Site_navigation-5f3be.jpg" alt="" width={30}  style={{borderRadius:'50%'}}/>
                        <h6 style={{fontSize:'13px'}} className='text-truncate'>Beauty,Health & Daily Needs</h6>
                    </div>
                    <div class="asideChild col-8 position-absolute top-0 z-3 py-2 bg-body-tertiary " >
                        <div class="col-3 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BEAUTY</a></li>
                                <li><a href="">Face</a></li>
                                <li><a href="">Eyes</a></li>
                                <li><a href="">Lips</a></li>
                                <li><a href="">Nails</a></li>
                                <li><a href="">Makeup Palettes</a></li>
                                <li><a href="">Brushers & Applicators</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>PERSONAL CARE & GROOMING</a></li>
                                <li><a href="">Skin Care</a></li>
                                <li><a href="">Hair Care</a></li>
                                <li><a href="">Bath & Shower</a></li>
                                <li><a href="">Oral Care</a></li>
                                <li><a href="">Men's Grooming</a></li>
                                <li><a href="">Feminine Hygiene</a></li>
                                <li><a href="">Waxing & Hair Removal</a></li>
                                <li><a href="">Deodorants & Roll-ons</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>SEXUAL WELLNESS</a></li>
                                <li><a href="">Condoms</a></li>
                                <li><a href="">Lubes</a></li>
                                <li><a href="">Adult Sex Toys</a></li>
                                <li><a href="">Performance & Enlargment</a></li>
                                <li><a href="">Sexy Lingerie</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3" style={{borderLeft:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>FOOD & GOURMENT</a></li>
                                <li><a href="">Tea, Coffee & Beevarges</a></li>
                                <li><a href="">Noodles, Soups & Pastas</a></li>
                                <li><a href="">Biscuits</a></li>
                                <li><a href="">Breakfast foods</a></li>
                                <li><a href="">Ready to Cook & Eat</a></li>
                                <li><a href="">Souces & Dressings</a></li>
                                <li><a href="">Baking Essentials</a></li>
                                <li><a href="">Chocolates & Candies</a></li>
                                <li><a href="">Staples, Oils & Spices </a></li>
                                <li><a href="">Dry Fruits & Gifts Boxes</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>NUTRITION & SUPPLEMENTS</a></li>
                                <li><a href="">Proteins</a></li>
                                <li><a href="">Vitamins & Minerals</a></li>
                                <li><a href="">Health Drinks</a></li>
                                <li><a href="">Meal Replacements</a></li>
                                <li><a href="">Weight Gainers</a></li>
                                <li><a href="">Workout Supplements</a></li>
                                <li><a href="">Muscle Support</a></li>
                                <li><a href="">Shakers</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                        <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>HEALTH MONITORING DEVICES</a></li>
                                <li><a href="">BP Monitors</a></li>
                                <li><a href="">Diabetic Care</a></li>
                                <li><a href="">Weighing Scales</a></li>
                                <li><a href="">Body Fat Analysers</a></li>
                                <li><a href="">Respiratory & Heart Care</a></li>
                                <li><a href="">Thermometers</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>GENERAL WILLNESS</a></li>
                                <li><a href="">Massagers & Pain Relief</a></li>
                                <li><a href="">Mobility Rehabilitation</a></li>
                                <li><a href="">First Aid</a></li>
                                <li><a href="">Nicotine Gums</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BABY CARE</a></li>
                                <li><a href="">Diapers & Potty Training</a></li>
                                <li><a href="">Bath, skin & Healyh Care</a></li>
                                <li><a href="">Baby Food</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>HOUSEHOLD ESSENTIALS</a></li>
                                <li><a href="">Detergents & Fabric Care</a></li>
                                <li><a href="">House & Kitchen Cleaners</a></li>
                                <li><a href="">Repellents</a></li>
                                <li><a href="">Air Fresheners</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                            <img src="http://n1.sdlcdn.com//imgs/i/1/o/fmcg-0f707.jpg" height={'100%'} width={'100%'} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            
            <div>
                <h6 className='m-3' style={{fontSize:'13px'}}>MORE CATEGORIES</h6>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <h6 style={{fontSize:'13px'}}>Automotives</h6>
                    </div>
                    <div class="asideChild col-8 position-absolute top-0 z-3 py-2 bg-body-tertiary" style={{height:'600px'}} >
                        <div class="col-3 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>AUTOMOTIVE ACCESSORIES</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>CAR & EHICLE ELECTRONICS</a></li>
                                <li><a href="">Car Stereo & Monitors</a></li>
                                <li><a href="">Car Speakers & Tweeters</a></li>
                                <li><a href="">Bluetooth Devices</a></li>
                                <li><a href="">Car GPS Navigation</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>CAR ACCESSORIES</a></li>
                                <li><a href="">Car Body Covers</a></li>
                                <li><a href="">Car Mobile Chargers</a></li>
                                <li><a href="">Car Mobile Holders</a></li>
                                <li><a href="">Car Foot Mats</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>TYRE INFLATORS</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3" style={{borderLeft:'1px solid lightgrey',borderRight:'1px solid lightgrey'}}>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>CAR FRESHENERS</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>AIR PURIFIERS & IONIZERS</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BIKER GEAR & ACCESSORIES</a></li>
                                <li><a href="">Bike Body Covers</a></li>
                                <li><a href="">Bike Protective Gear</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BIKER RAINCOATS</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>HELMET & ACCESSORIES</a></li>
                                <li><a href="">Helmet Accessories</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>PARTS & SPARES</a></li>
                                <li><a href="">Filters</a></li>
                                <li><a href="">Lighting</a></li>
                                <li><a href="">External Parts</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                        <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>TYRES & ALLOYS</a></li>
                                <li><a href="">Car Tyres</a></li>
                                <li><a href="">Bike Tyres</a></li>
                            </ul>
                        </div>
                        <div class="col-3 px-3">
                            <img src="https://n2.sdlcdn.com/imgs/i/1/o/Car_bike-925b8.jpg" height={'100%'} width={'100%'} alt="" />
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <h6 style={{fontSize:'13px'}}>Mobile & Accessories</h6>
                    </div>
                    <div class="asideChild col-2 position-absolute top-0 z-3 py-2 bg-body-tertiary" style={{height:'600px'}} >
                        <div class="col-12 px-3 ">
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>MOBILE CASES & COVERS</a></li>
                                <li><a href="">Printed Back Covers</a></li>
                                <li><a href="">Plain Back Covers</a></li>
                                <li><a href="">Flip Covers</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                                <li><a href="">Power Banks</a></li>
                                <li><a href="">Ambrane</a></li>
                                <li><a href="">Intex</a></li>
                                <li><a href="">Syska</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <h6 style={{fontSize:'13px'}}>Electronics</h6>
                    </div>
                    <div class="asideChild col-2 position-absolute top-0 z-3 py-2 bg-body-tertiary" style={{height:'600px'}} >
                        <div class="col-12 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>SPEAKERS</a></li>
                                <li><a href="">Home Audio Systems</a></li>
                                <li><a href="">Bluetooth Speakers</a></li>
                                <li><a href="">2.0 Speakers</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>HEADPHONES & EARPHONES</a></li>
                                <li><a href="">Headphones</a></li>
                                <li><a href="">Earohones</a></li>
                                <li><a href="">Headsets with Mic</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>AUDIO & VIDEO</a></li>
                                <li><a href="">MP3 & Media Player</a></li>
                                <li><a href="">Projectors</a></li>
                                <li><a href="">Audio & Video Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <h6 style={{fontSize:'13px'}}>Sport, Fitness & Outdoor</h6>
                    </div>
                    <div class="asideChild col-2 position-absolute top-0 z-3 py-2 bg-body-tertiary" style={{height:'600px'}} >
                        <div class="col-12 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>SPORTS & FITNESS</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>GET FIT AT HOME</a></li>
                                <li><a href="">Home Gym</a></li>
                                <li><a href="">Dumbbells</a></li>
                                <li><a href="">Treadmills</a></li>
                                <li><a href="">Abdominal Exercisers</a></li>
                                <li><a href="">Exercise Bikes</a></li>
                                <li><a href="">Yoga Mats</a></li>
                                <li><a href="">Exercise Benches</a></li>
                                <li><a href="">Weighing Scales</a></li>
                                <li><a href="" style={{color:'blue'}} className='d-flex'><p>View All</p><IoIosArrowForward size={18}/></a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>GET READY FOR GYM</a></li>
                                <li><a href="">Sports Footwear</a></li>
                                <li><a href="">Fitness Gadgets</a></li>
                                <li><a href="">Sippers</a></li>
                                <li><a href="">Gym Gloves</a></li>
                                <li><a href="">Sports Nutrition</a></li>
                                <li><a href="">Gym Bags</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <h6 style={{fontSize:'13px'}}>Computers & Gaming</h6>
                    </div>
                    <div class="asideChild col-2 position-absolute top-0 z-3 py-2 bg-body-tertiary" style={{height:'600px'}} >
                        <div class="col-12 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="">Printer Inks & Toners</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>STORAGE</a></li>
                                <li><a href="">External Hard Drives</a></li>
                                <li><a href="">Memory Cards</a></li>
                                <li><a href="">Pen Drives</a></li>
                                <li><a href="">SSD</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>NETWORKING DEVICES</a></li>
                                <li><a href="">Data Cards</a></li>
                                <li><a href="">Dongles</a></li>
                                <li><a href="">Routers</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>OFFICE EQUIPMENTS & SUPPLY</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <h6 style={{fontSize:'13px'}}>Books, Media & Music</h6>
                    </div>
                    <div class="asideChild col-2 position-absolute top-0 z-3 py-2 bg-body-tertiary" style={{height:'600px'}}>
                        <div class="col-12 px-3 ">
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold d-flex'><p>View All</p> BOOKS</a></li>
    18                 </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>TOP EXAMS</a></li>
                                <li><a href="">GATE</a></li>
                                <li><a href="">IIT JEE</a></li>
                                <li><a href="">NEET</a></li>
                                <li><a href="">BANK PO</a></li>
                                <li><a href="">UGC Net</a></li>
                                <li><a href="">UPSC</a></li>
                            </ul>
                            <ul className='list-unstyled border-bottom'>
                                <li><a href="" className='text-black fw-bold'>BROWS BY GENRE</a></li>
                                <li><a href="">School Tests</a></li>
                                <li><a href="">Competetive Exams</a></li>
                                <li><a href="">Academic & Professional</a></li>
                                <li><a href="">Children & Young Adults</a></li>
                                <li><a href="">Non-Fiction</a></li>
                                <li><a href="">Literature & fiction</a></li>
                                <li><a href="">Self Help</a></li>
                                <li><a href="">References</a></li>
                            </ul>
                            <ul className='list-unstyled'>
                                <li><a href="" className='text-black fw-bold'>ONLINE EDUCATION</a></li>
                                <li><a href="">Courses Under Rs 99</a></li>
                                <li><a href="">School Learning Online</a></li>
                                <li><a href="">Online Test Preperation</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='aside'>
                    <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center list'>
                        <h6 style={{fontSize:'13px'}}>Hobbies</h6>
                    </div>
                    <div class="asideChild col-2 position-absolute top-0 z-3 py-2 bg-body-tertiary" style={{height:'600px'}} >
                        <div class="col-12 px-3 ">
                            <ul className='list-unstyled'>
                                <li><a href="">Arts & Crafts</a></li>
                                <li><a href="">Collectribles</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h6 className='m-3' style={{fontSize:'13px'}}>TRENDING CATEGORIES</h6>
                <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center' style={{cursor:'pointer'}}>
                <GoSearch size={15} className='pb-1'/>
                    <h6 style={{fontSize:'13px',color:'grey'}}>Kitchen Product</h6>
                </div>
                <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center' style={{cursor:'pointer'}}>
                    <GoSearch size={15} className='pb-1'/>
                    <h6 style={{fontSize:'13px',color:'grey'}}>Shoes For Men</h6>
                </div>
                <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center' style={{cursor:'pointer'}}>
                    <GoSearch size={15} className='pb-1'/>
                    <h6 style={{fontSize:'13px',color:'grey'}}>Kurti Set</h6>
                </div>
                <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center' style={{cursor:'pointer'}}>
                    <GoSearch size={15} className='pb-1'/>
                    <h6 style={{fontSize:'13px',color:'grey'}}>Sandal Men</h6>
                </div>
                <div className='ms-2 py-1 px-3 d-flex gap-2 align-items-center' style={{cursor:'pointer'}}>
                    <GoSearch size={15} className='pb-1'/>
                    <h6 style={{fontSize:'13px',color:'grey'}}>Sport Shoe Men</h6>
                </div>
            </div>
            <div className='bg-body-secondary h-50 w-100 mt-4 py-5 d-flex gap-3' style={{cursor:'default'}}>
                <div><img src="https://i1.sdlcdn.com/img/snapdeal/barCode_Home1x.png" alt="" /></div>
                <div><span style={{fontSize:'13px'}}>Enjoy Convenient Order Tracking</span><br /> <span style={{fontSize:'12px',color:'grey'}}>Scan to download app</span></div>
            </div>
        </div>
    );
}

export default Aside;

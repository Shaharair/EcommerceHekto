import React from 'react'

const Checkout = () => {
    return (
        <section>
            <div className="bg-[#F6F5FF] lg:py-[100px] py-[30px] text-center">
                <h3 className="font-dm-sans font-bold lg:text-[48px] text-[24px] text-[#151875]">Checkout</h3>
                <p className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#151875]">Home  &#62;	Checkout</p>
            </div>
            <div className="container px-3 lg:px-0 mx-auto">
                <h4 className="font-dm-sans font-medium text-[16px] text-[#767676] lg:mt-[60px] mt-[20px]">Have a coupon? <span className="font-dm-sans font-semibold lg:text-[18px] text-[14px] text-[#262626]">Click here to enter your code</span></h4>
                <form>
                    <h3 className="font-dm-sans font-semibold lg:text-[36px] text-[24px] text-[#262626] lg:py-[50px] py-[15px]">Billing Details</h3>
                    <div className="w-[70%]">
                        <div className="flex items-center justify-between">
                            <div className="lg:w-[50%] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">First Name *</h3>
                                <input type="text" placeholder="First Name" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                            <div className="lg:w-[50%] lg:border-b-2 border-b-[1px] mx-[20px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Last Name *</h3>
                                <input type="text" placeholder="Last Name" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[70%] w-full">
                        <div className="lg:w-full lg:mt-[20px] mt-[10px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Companye Name (optional)</h3>
                            <input type="text" placeholder="Company Name" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="flex items-center justify-between relative">
                            <div className="w-full lg:mt-[20px] mt-[10px] lg:border-b-2 border-b-[1px]">
                                <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[#262626] lg:pb-[10px]">Country *</h3>
                                <input type="text" placeholder="Your Country" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                            </div>
                            <div className="">
                                <select className="absolute top-[60px] lg:left-[700px] font-dm-sans font-semibold lg:text-[20px] text-[16px] text-[#262626] outline-none">
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Afghanistan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Albania</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Algeria</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Andorra</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Angola</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Antigua and Barbuda</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Argentina</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Armenia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Australia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Austria</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Azerbaijan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Bahamas</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Bahrain</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Bangladesh</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Barbados</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Belarus</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Belgium</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Belize</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Benin</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Bhutan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Bolivia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Bosnia and Herzegovina</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Botswana</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Brazil</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Brunei</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Bulgaria</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Burkina Faso</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Burundi</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Cote d'Ivoire</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Cabo Verde</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Cambodia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Cameroon</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Canada</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Central African Republic</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Chad</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Chile</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">China</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Colombia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Comoros</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Congo-Brazzaville</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Costarica</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Croatia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Cuba</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Cyprus</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Czechia Republic</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Democratic Republic of the Congo</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Denmark</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Djibouti</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Dominica</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Dominican Republic</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Ecuador</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Egypt</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Elsalvador</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Equatorial Guinea</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Eritrea</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Estonia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Eswatini</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Ethiopia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Fiji</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Findland</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">France</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Gabon</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Gambia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Georgia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Germany</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Ghana</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Greece</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Grenada</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Guatemala</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Guinea</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Guinea-Bissau</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Guyana</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Haiti</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Holy See</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Honduras</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Hungary</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Iceland</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">India</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Indonesia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Iran</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]"> Iraq</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Ireland</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Israel</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Italy</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Jamaica</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Japan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Jordan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Kazakistan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Laos</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Latvia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Lebanon</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Lesotho</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Liberia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Libya</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Liechtenstein</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Lithuania</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Luxembourg</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Madagascar</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Malaysia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Maldives</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Mail</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Malta</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Marshall Islands</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Mauritania</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Mauritius</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Mexico</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Micronesia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Moldova</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Monaca</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Mongolia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Montenegro</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Morocco</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Mozambique</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Myanmar</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Namibia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Nauru</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Nepal</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Netherlands</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">New Zealand</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Nicaragua</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Niger</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Nigeria</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">North Korea</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">North Macedonia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Norway</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Oman</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Pakistan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Palau</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Palestine State</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Panama</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Papua New Guinea</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Praguay</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Peru</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Philippines</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Poland</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Portugal</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Qatar</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Romania</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Ryssua</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Rwanda</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Saint Kitts and Nevis</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Saint Lucia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Saint Vinecnt and the Grenadins=es</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Samoa</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">San Marino</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Sao Tome and Principe</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Saudi Arabia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Senegal</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Serbia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Seychelles</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Sierra Leaone</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Singapore</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Slovakia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Slovenia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Solomon Islands</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Somalia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">South Africa</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">South Korea</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">South Sudan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Spain</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Srilanka</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Sudan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Suriname</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Sweden</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Switezerland</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Syria</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Tajikistan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Tnazania</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Thailand</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Timor-Leste</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Tongo</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Togo</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Trindad and Tobago</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Tunisia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Turkey</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Turkmeniatan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Tuvalu</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Uganda</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Ukraine</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">United Arab Emirates</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">United Kingdom</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">United States of America</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Uruguay</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Uzbekistan</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Vanuatu</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Venezuela</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Vietnam</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Yemen</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Zambia</option>
                                    <option value="" className="font-dm-sans font-semibold text-[18px] text-[#767676]">Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full lg:mt-[20px] mt-[10px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Street Address *</h3>
                            <input type="text" placeholder="House number and street name" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="w-full lg:mt-[20px] mt-[10px] text-[10px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Town/City *</h3>
                            <input type="text" placeholder="Town/City" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="w-full lg:mt-[20px] mt-[10px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">County (optional)</h3>
                            <input type="text" placeholder="Your County" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="w-full lg:mt-[20px] mt-[10px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Post Code *</h3>
                            <input type="text" placeholder="Your Post Code" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="w-full lg:mt-[20px] mt-[10px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Phone Number *</h3>
                            <input type="text" placeholder="Your Number" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="w-full lg:mt-[20px] mt-[10px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Email Address *</h3>
                            <input type="text" placeholder="Your Email" className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="lg:mt-[100px] mt-[20px] lg:border-b-2 border-b-[1px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[36px] text-[24px] text-[#262626] lg:pb-[50px] pb-[20px]">Additional Information</h3>
                            <h4 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:pb-[10px]">Other Notes (optional)</h4>
                            <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pb-[20px] pb-[10px] outline-none" />
                        </div>
                        <div className="lg:mt-[100px] mt-[30px]">
                            <h3 className="font-dm-sans font-semibold lg:text-[36px] text-[24px] lg:pb-[50px] pb-[20px]">Your Order:</h3>
                            <div className="lg:w-[60%] w-full lg:border-2 border-[1px]">
                                <div className="flex items-center justify-between lg:border-b-2 border-b-[1px]">
                                    <div className="">
                                        <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:mx-[30px] mx-[20px] lg:py-[20px] py-[10px]">Product:</h3>
                                    </div>
                                    <div className="">
                                        <p className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[30px] pr-[20px]">Total</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between  lg:border-b-2 border-b-[1px]">
                                    <div className="">
                                        <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:mx-[30px] mx-[20px] lg:py-[20px] py-[10px]">Product name x 1:</h3>
                                    </div>
                                    <div className="">
                                        <p className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[30px] pr-[20px]">389.99 $</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between  lg:border-b-2 border-b-[1px]">
                                    <div className="">
                                        <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:mx-[30px] mx-[20px] lg:py-[20px] py-[10px]">Subtotal:</h3>
                                    </div>
                                    <div className="">
                                        <p className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[30px] pr-[20px]">389.99 $</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="">
                                        <h3 className="font-dm-sans font-semibold lg:text-[24px] text-[18px] text-[#262626] lg:mx-[30px] mx-[20px] lg:py-[20px] py-[10px]">Total:</h3>
                                    </div>
                                    <div className="">
                                        <p className="font-dm-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[30px] pr-[20px]">389.99 $</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pt-[50px] pt-[20px] lg:pb-[100px] pb-[40px]">
                            <button className="font-dm-sans font-semibold lg:text-[18px] text-[16px] text-[white] bg-[#262626] lg:px-[60px] px-[40px] py-3">Proceed to Bank</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Checkout
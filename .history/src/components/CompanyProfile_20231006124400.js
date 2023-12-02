import React from 'react'
import "./CompanyProfile.css"
import location from "../Img/icon/location.png"
import webtoon from "../Img/icon/webton.png";
import blackCircle from "../Img/icon/black-circle.png";
import facebook from "../Img/icon/facebook.png";
import instagram from "../Img/icon/instagram.png";
import twitter from "../Img/icon/twitter.png";


const CompanyProfile = () => {
  return (
    <div>
        <div>
            <section>
                <div id='mainContainer' >
                    <div id='innerContainer'>
                        <div id='companyLeftContainer'>
                            <div className='flexBox'>
                                <div>
                                    <img id='companyIcon' src={webtoon} alt="" />
                                </div>
                                <div>
                                    <div id='companyName' className='companyAllTitle'>Webtoon</div>
                                    <div className='flexBox lI-LN'>
                                        <img id='locationIcon' className='iconSize' src={location} alt="" />
                                        <div id='locationName' className='companyPara'>Bengaluru, India</div>
                                    </div>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='companyAllTitle'>Company Description</div>
                            <p className='companyPara'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae totam, laboriosam illum quia ullam incidunt. Voluptate consectetur odio ullam natus dolore voluptatum dolor incidunt. Iste laboriosam repellat neque necessitatibus nisi?
                            Maiores, ullam laboriosam? Laudantium consectetur voluptatem illo, eos maiores autem ipsum vero expedita, voluptas aliquid blanditiis velit necessitatibus maxime quasi neque aperiam numquam laborum adipisci perspiciatis assumenda excepturi, harum rerum.</p>
                            <div className='companyAllTitle'>Job Description</div>
                            <p className='companyPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut recusandae minima quidem rem et eos explicabo sit sapiente libero dolorum, maxime ex natus amet aperiam inventore vitae consequatur nisi.</p>
                            <div className='companyAllTitle'>Required Skills</div>
                            <p className='companyPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti odit, earum consequatur laboriosam adipisci tempora, eligendi temporibus ipsum accusamus, dicta iste fuga! Omnis facilis saepe recusandae dicta impedit accusantium molestiae.
                            Laborum sint voluptates dolore dicta velit sunt nostrum, ipsa consequuntur doloribus? Quos ut itaque nam ipsam voluptatem magnam natus tempora amet. Blanditiis consectetur temporibus cum necessitatibus, laudantium ducimus maiores consequuntur.</p>
                        </div>
                        <div id='companyRightContainer'>
                            <div id='companyRightUpperContainer'>
                                <div className='companyAllTitle'>Company Summary</div>
                                <div className='line'></div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSize'  src={blackCircle} alt="" />
                                    <div className='rightMargin'>Address:</div>
                                <div>Bengaluru, India</div>
                                </div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSize' src={blackCircle} alt="" />
                                    <div className='rightMargin'>Email:</div>
                                    <div>test@gmail.com</div>
                                </div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSize' src={blackCircle} alt="" />
                                    <div className='rightMargin'>Phone No:</div>
                                    <div>+91-1234567890</div>
                                </div>
                                <div className='flexBox rightSideMarginClass rightCompanyPara'>
                                    <img className='iconSize' src={blackCircle} alt="" />
                                    <div className='rightMargin'>Website URL:</div>
                                    <div>webtoon.com</div>
                                </div>
                            </div> 
                            <div id='companyRightLowerContainer'>
                                <div className='rightCompanyPara flexBox socialMedia'>
                                   <div className='rightMargin'>Media Account:</div>
                                   <img className='rightMargin' src={facebook} alt="" />
                                   <img className='rightMargin' src={instagram} alt="" />
                                   <img className='rightMargin' src={twitter} alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default CompanyProfile
import React from 'react';
import emailjs from 'emailjs-com';
import Head from 'next/head'
import Link from "next/link"






export default function Home() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7vn9rb5', 'template_ou2nn5s', e.target, 'user_Ux6zxyWjGsbgsdvPNymfp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

  

  return (
    <>
      <Head>
        <title>AspenHill Capital</title>
        <link rel="icon" href="/images/favicon.png"/>
        
      </Head>
      

    <h1> We Buy Houses For Cash</h1>
  

    <div id = "contact-container">
      <div className = 'contact-info'>
      <h4> Sell Your House Fast In Minneapolis, MN </h4>
      <h5>You’ll Get A Fair Offer – You Choose The Closing Date. We Pay All Costs!</h5>
      <h6> No Fees. No Commissions. Put More Cash In Your Pocket.</h6>
      <p>Fill out the short form…</p>
      <div className = 'icon-text'>
        <i class='fa fa-phone' aria-hidden='true'></i>
        <span>Call us at 612-226-6210 </span>
      </div>
      <div className = 'icon-text'>
        <i class='fa fa-envelope-o' aria-hidden='true'></i>
        <span> Email us at Info@aspenhillcapital.com</span>
      </div>


      </div>
      <form onSubmit = {sendEmail}>
        <div className = "col-1">
          <div className = "form-group">
            <label>First Name</label>
            <input type="text" required name = "firstname" placeholder = "John"></input>
          </div>
          <div className = "form-group">
            <label>Last Name</label>
            <input type="text" required name = "lastname" placeholder = "AppleSeed"></input>
          </div>
          
        </div>
        <div className = "col-1">
          <div className = "form-group">
            <label>Phone Number</label>
            <input type="text" required name= "phone" placeholder = "111-111-1111"></input>
          </div>
          <div className = "form-group">
            <label>Property Address</label>
            <input type="text" required name= "address" placeholder = "1234 Main St Mn 55555"></input>
          </div>
          
        </div>
        <div className = "col-1">
          <div className = "form-group solo">
            <label> Enter Any Additional Information</label>
            <textarea name = "message" placeholder = "Enter any additional information you might like to add here"></textarea>
          </div>

          <div clas='field'>
            <div data-netlify-recaptcha="true"></div>
          </div>
          
        </div>
        <div className = "col-1">
          <div className = "form-group solo right">
            <button className= 'primary'> Complete </button>

            
          </div>
        
        </div>




        <div className = "col-1">
          <div className = "form-group up">
            <Link href = "/privacypolicy" className = "form-group solo right up"><a>Privacy Policy </a></Link>
          </div>
        </div>
        
        
          
 
        

      
        
      </form>
  </div>

    </>
  )
}

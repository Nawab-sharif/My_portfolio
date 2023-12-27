import React from "react";
export default function Contact(){
    return(<>
            <div className="contact">
                <div className="form">
                <h3 className="text-center">Contact Us</h3>
                    <form action="">
                        
                        <label htmlFor="Name">Name*</label><br />
                        <input type="text" placeholder="Name.." /><br />
                        <label htmlFor="Contact">Contact*</label><br />
                        <input type="Number" placeholder="Contact.." /><br />
                        <label htmlFor="email">E-mail*</label><br />
                        <input type="email" placeholder="E-mail.." /><br />
                        <label htmlFor="Message">Message*</label><br />
                        <input type="text" name="" id="" placeholder="Message.."/>
                        <input className=" mt-3" type="button" value="Submit" />
                    </form>
                </div>
            </div>
    </>);
}
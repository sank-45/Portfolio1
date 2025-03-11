import './Contact.scss';
import Img from "../../Component/Assets/email.png";
import Img1 from "../../Component/Assets/phone.png";
import Img2 from "../../Component/Assets/location.png";
import {useForm} from "react-hook-form";

const Contact = () => {

    // const{
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState:{errors},
    // }=useForm(); 

    // function onSubmit(data){
    //     console.log("Submitting the Form",data)

    // }

    // }
    return (
        <section className="contact">
            <div className="contact_container wrapper">
                <h1>Just Say Hello</h1>
                <p>Feel free to reach out to me for any inquiries or collaborations.</p>

                <div className="contact_content">
                    {/* Contact Form */}
                    <form className="contact_form" > 
                        {/* onSubmit={handleSubmit(onSubmit)} */}
                        <div className="form_group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form_group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form_group">
                            <input type="text" placeholder="Your Subject" required />
                        </div>
                        <div className="form_group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="contact_button">
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="contact_info">
                        <h2>Contact Info :</h2>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla
                            tincidunt id faucibus sed suscipit feugiat.
                        </p> */}
                        <ul>
                            <li>
                                <img src={Img} alt="email" />
                                <strong>Email:</strong> sank4patil@gmail.com
                            </li>
                            <li>
                                <img src={Img1} alt="Phone" />
                                <strong>Phone:</strong> +91 7249774554
                            </li>
                            <li>
                                <img src={Img2} alt="Address" />
                                <strong>Address:</strong> Mahrashtra,Sindhudurg
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
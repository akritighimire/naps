import React,{useState} from 'react'
import img1 from "../assets/img1team.jpg"
import img2 from "../assets/img2team.png"
// import "../css/LandingPage2.css"
import picture1 from "../assets/executive/pic1.jpg"
import picture2 from "../assets/executive/picture2.jpg"
import picture3 from "../assets/executive/picture3.jpg"
import picture4 from "../assets/executive/picture4.png"
import picture5 from "../assets/executive/picture6.png"
import picture6 from "../assets/executive/picture7.jpg"
import picture7 from "../assets/executive/picture8.jpeg"
import picture8 from "../assets/executive/picture9.jpg"
import picture9 from "../assets/executive/picture10.jpg"
import picture10 from "../assets/executive/picture11.jpg"
// import picture11 from "../assets/executive/picture1.png"


// import  '../css/LandingPage2.css'
import "../css/Responsive.css"
import desc from "../assets/desc.jpg"


const Landingpage2= () => {
        const [formData, setFormData] = useState({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Submitted: ", formData);
        }
    return (
        <>
            <div className='whole'>
                <div className='main'>
                    <div className='container'>
                        <h2 >Lorem ipsum dolor sit amet consectetur </h2>
                        <p style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse laborum pariatur ea temporibus expedita. Voluptas quasi consectetur itaque tempore, quod, similique, neque maiores fuga aperiam reprehenderit quas? Eos, quos minus!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum amet harum non repellendus numquam animi, ab in vitae voluptatum molestias est quaerat maiores sit aliquid excepturi dolorum modi reiciendis voluptatibus?
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente quis eligendi perferendis explicabo quasi cumque repellendus, laborum dolor fugiat, velit sequi minus tempora harum nisi quidem incidunt consequatur ad!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam consectetur neque maiores? Modi voluptatem ab neque sed cum saepe, aliquam qui fuga, repellat dicta at? Quam corporis tenetur dolores.

                        </p>

                    </div>
                    <div className='img'>
                        <img src={desc} alt='' />
                    </div>
                </div>
                <div className="section2">
  <h1>Meet Our Team</h1>
  <p className='p'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, <br />
    sed perferendis voluptate dolorem illum repellendus dolor rem repre.
  </p>
  <div className="img2">
    <div>
      <img src={picture1} alt="Prof. Dr. Rameshwar Prasad Pokharel" />
      <h4>Prof. Dr. Rameshwar Prasad Pokharel</h4>
      <p>President</p>
    </div>
    <div>
      <img src={picture2} alt="Prof. Dr. Ramnandan Chaudhary" />
      <h4>Prof. Dr. Ramnandan Chaudhary</h4>
      <p>Immediate Past President</p>
    </div>
    <div>
      <img src={picture3} alt="Dr. Anupama Thapa" />
      <h4>Dr. Anupama Thapa</h4>
      <p>Vice President</p>
    </div>
    <div>
      <img src={picture4} alt="Prof. Dr. Bijay Thapa" />
      <h4>Prof. Dr. Bijay Thapa</h4>
      <p>General Secretary</p>
    </div>
  </div>
  <div className="img3">
    <div>
      <img src={picture5} alt="Dr. Ramana Rajkarnikar" />
      <h4>Dr. Ramana Rajkarnikar</h4>
      <p>Secretary</p>
    </div>
    <div>
      <img src={picture6} alt="Dr. Dinesh Prasad Koirala" />
      <h4>Dr. Dinesh Prasad Koirala</h4>
      <p>Treasurer</p>
    </div>
    <div>
      <img src={picture7} alt="Dr. Jasmine Bajracharya" />
      <h4>Dr. Jasmine Bajracharya</h4>
      <p>Joint Treasurer</p>
    </div>
    <div>
      <img src={picture8} alt="Dr. Puskar Pokharel" />
      <h4>Dr. Puskar Pokharel</h4>
      <p>Member</p>
    </div>
  </div>
  <div className="img3">
    <div>
      <img src={picture9} alt="Dr Suman Bikram Adhikari" />
      <h4>Dr Suman Bikram Adhikari</h4>
      <p>Member</p>
    </div>
    <div>
      <img src={picture10} alt="Dr.Nripesh Rajbhandari" />
      <h4>Dr.Nripesh Rajbhandari</h4>
      <p>Member</p>
    </div>
    <div>
      <img src={picture10} alt="Dr. Shirish Silwal" />
      <h4>Dr. Shirish Silwal</h4>
      <p>Member</p>
    </div>
  </div>
</div>
<div className='section'>

                <h1 className='h1' style={{ color: "#a01f62" }}>Enquiry Form</h1>
                <div className='line'></div>

                <div className="formsection">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="E-mail *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.436279523537!2d85.3258971740543!3d27.73468642428775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193c042a6e29%3A0x64f289c5109f3317!2sKanti%20Children&#39;s%20Hospital!5e0!3m2!1sen!2snp!4v1734951486133!5m2!1sen!2snp" ></iframe>
    </div>
            </div>
            </div>
        </>
    )
}

export default Landingpage2
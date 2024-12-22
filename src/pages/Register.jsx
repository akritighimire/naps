import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    category: "",
    salutation: "",
    designation: "",
    organization: "",
    pressConference: "",
    registrationType: "",
    fullName: "",
    email: "",
    phone: "",
    affiliation: "",
    speciality: "",
    paperCategory: "",
    session: "",
    paperTitle: "",
    abstract: "",
    spouse: false,
    accDesignation: "",
    country: "Nepal",
    file: null,
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <>
      <Header />

      <main className="main" id="main">
        <section>
          <div>
            <div className="registration-section">
              <div className="overlay">
                <h1>Registration</h1>
                <p className="sub-title">
                  Please enter your details to register for the conference.
                  Please note that registration is mandatory for approval of the
                  submitted abstract and also for participation in the
                  conference. Early bird registration closes on 21st September,
                  2024.
                </p>
                <p className="sub-title note">
                  (Please book your hotels and flight tickets early as November
                  is a peak tourist season in Pokhara. For details, please
                  contact our travel desk.)
                </p>
              </div>
            </div>

            <div className="section form-section">
              <form onSubmit={handleSubmit}>
                <div className="content-row">
                  <div className="row-item category">
                    <label>Category:</label>
                    <select
                      className="box-field"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Choose</option>
                      <option value="SSN Members">SSN Members</option>
                      <option value="  Associate Members/Residents">
                        Associate Members/Residents
                      </option>
                      <option value="SAARC Delegates">SAARC Delegates</option>
                      <option value="International Deligates apart from SAARC">
                        International Deligates apart from SAARC
                      </option>
                      <option value="SSN-Non Members">SSN-Non Members</option>
                      <option value="Nurses">Nurses</option>
                      <option value="SAARC Residents">SAARC Residents</option>
                    </select>
                  </div>
                  <div className="row-item">
                    <div className="registration-fee">Registration Fees:</div>
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item">
                    <label>Designation:</label>
                    <input
                      className="box-field"
                      placeholder="Designation"
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row-item">
                    <label>Organization:</label>
                    <input
                      className="box-field"
                      placeholder="Organization"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row-item">
                    <label>Are you attending the press conference event?</label>
                    <div className="radio-btn">
                      <label>
                        <input
                          type="radio"
                          name="pressConference"
                          value="Yes"
                          checked={formData.pressConference === "Yes"}
                          onChange={handleChange}
                        />
                        <span
                          className="txt
                        "
                        >
                          Yes
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="pressConference"
                          value="No"
                          checked={formData.pressConference === "No"}
                          onChange={handleChange}
                        />
                        <span
                          className="txt
                        "
                        >
                          No
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="content-row">
                  <div className="salutation row-item">
                    <label>Salutation:</label>
                    <select
                      className="box-field"
                      name="salutation"
                      value={formData.salutation}
                      onChange={handleChange}
                    >
                      <option value="">Choose</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Mr">Mr.</option>
                      <option value="Mrs">Mrs.</option>
                      <option value="Miss">Miss.</option>
                    </select>
                  </div>
                  <div className="row-item">
                    <label>Full Name :</label>
                    <input
                      className="box-field"
                      placeholder="Full Name"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row-item">
                    <label>Email :</label>
                    <input
                      className="box-field"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item category">
                    <label>Phone :</label>
                    <input
                      className="box-field"
                      placeholder="Phone"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item">
                    <label>Registration:</label>
                    <div className="radio-btn">
                      <label>
                        <input
                          type="radio"
                          name="registrationType"
                          value="without abstract"
                          checked={
                            formData.registrationType === "without abstract"
                          }
                          onChange={handleChange}
                        />
                        <span
                          className="txt
                        "
                        >
                          without abstract
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="registrationType"
                          value="with abstract"
                          checked={
                            formData.registrationType === "with abstract"
                          }
                          onChange={handleChange}
                        />
                        <span
                          className="txt
                        "
                        >
                          with abstract
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item category">
                    <label>Affiliation :</label>
                    <input
                      className="box-field"
                      placeholder="Affiliation"
                      type="text"
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row-item category">
                    <label>Speciality/ Subspeciality:</label>
                    <input
                      className="box-field"
                      placeholder="Speciality/ Subspeciality"
                      type="text"
                      name="speciality"
                      value={formData.speciality}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item">
                    <label>Category:</label>

                    <div className="radio-btn">
                      <label>
                        <input
                          type="radio"
                          name="paperCategory"
                          value="Guest Paper"
                          checked={formData.paperCategory === "Guest Paper"}
                          onChange={handleChange}
                        />
                        <span
                          className="txt
                        "
                        >
                          Guest Paper
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="paperCategory"
                          value="Free Paper"
                          checked={formData.paperCategory === "Free Paper"}
                          onChange={handleChange}
                        />

                        <span
                          className="txt
                        "
                        >
                          {" "}
                          Free Paper
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="paperCategory"
                          value="Award Paper"
                          checked={formData.paperCategory === "Award Paper"}
                          onChange={handleChange}
                        />
                        <span
                          className="txt
                        "
                        >
                          Award Paper
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="paperCategory"
                          value="Poster"
                          checked={formData.paperCategory === "Poster"}
                          onChange={handleChange}
                        />
                        <span
                          className="txt
                        "
                        >
                          {" "}
                          Poster
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item category">
                    <label>Session:</label>
                    <select
                      className="box-field"
                      name="session"
                      value={formData.session}
                      onChange={handleChange}
                    >
                      <option value="">Select any option</option>
                      <option value="Session 1">
                        General paediatric surgery
                      </option>
                      <option value="Neonatal surgery">Neonatal surgery</option>
                      <option value="Oncology/ oncosurgery">
                        Oncology/ oncosurgery
                      </option>
                      <option value="Paediatric urology">
                        Paediatric urology
                      </option>
                      <option value="Colorectal/ GI/ hepato">
                        Colorectal/ GI/ hepato
                      </option>
                      <option value="Paediatric nursing">
                        Paediatric nursing
                      </option>
                      <option value="Diagnostics">Diagnostics</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="row-item category">
                    <label>Title of the paper:</label>
                    <input
                      className="box-field"
                      type="text"
                      name="paperTitle"
                      value={formData.paperTitle}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item category">
                    <label>Abstract (max 300 words):</label>
                    <textarea
                      className="abstract-section"
                      name="abstract"
                      value={formData.abstract}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="content-row">
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="spouse"
                        checked={formData.spouse}
                        onChange={handleChange}
                      />

                      <span className="txt">
                        {" "}
                        I have an accompanying spouse/person
                      </span>
                    </label>
                  </div>
                </div>
                <div className="content-row">
                  {/* <div className="salutation row-item category">
                    <label>Salutation:</label>
                    <select
                      className="box-field"
                      name="salutation"
                      value={formData.salutation}
                      onChange={handleChange}
                    >
                      <option value="">Choose</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Mr">Mr.</option>
                      <option value="Mrs">Mrs.</option>
                      <option value="Miss">Miss.</option>
                    </select>
                  </div> */}
                  <div className="row-item category">
                    <label>Full Name :</label>
                    <input
                      className="box-field"
                      placeholder="Full Name"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row-item category">
                    <label>Designation :</label>
                    <input
                      className="box-field"
                      placeholder="Designation"
                      type="text"
                      name="acc-designation"
                      value={formData.accDesignation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item category">
                    <label>Country:</label>
                    <select
                      className="box-field"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="Nepal">Nepal</option>
                      <option value="India">India</option>
                      <option value="Other-countries">Others</option>
                    </select>
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item category">
                    <label>Payment Method: </label>
                    <input
                      className="box-field"
                      type="text"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="content-row">
                  <div className="row-item">
                    <label>Upload Voucher:</label>
                    <input type="file" name="file" onChange={handleChange} />
                    <span className="alert-txt">Only pdf, jpg, png files are accepted.</span>
                  </div>
                  
                </div>
                <div className="content-row txt-btn-holder">
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                      />
                      <span className="txt">
                        I agree to receive updates to the email address provided
                        above.
                      </span>
                    </label>
                  </div>
                  <button className="primary-button" type="submit">
                    Next <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Register;

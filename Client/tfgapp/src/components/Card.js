import React, { useState } from 'react';
import QRCode from "react-qr-code";
import Footer from './Footer';
import { SketchPicker } from 'react-color'
import Header from './NavBar';
import { FaEnvelope, FaMapMarkerAlt, FaPhone,FaGlobe, FaBuilding , FaInfoCircle} from 'react-icons/fa';

const initialFormData = {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    company: "",
    photo: "",
    summary: "",
    logo: ""
};
function Card() {

    //formulario
    const [formData, setFormData] = React.useState(initialFormData);

    //color de fondo de la card de preview
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    //función que cambia el valor si cambia algun texto label del form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    const getObjectUrl = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        if (!file.type.startsWith('image/')) {
          alert('Only image files are allowed.');
          event.target.value = null; // Limpiar el input file si el archivo no es valido
        } else {
          reader.onload = (e) => {
            setFormData({ ...formData, photoFile: file });
          };
      
          reader.readAsDataURL(file);
        }
      };
      
    const photoDataURL = formData.photoFile
        ? URL.createObjectURL(formData.photoFile)
        : '';

    return (
        <div>
            <Header></Header>
            <div className='container-card'>
                <div class="row">
                    <div class="col-6">
                        <div class="form">
                            <h2 style={{ fontFamily: 'Poppins' }}>CV Card Form</h2>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="firstName">First Name:</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />

                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lastName">Last Name:</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            maxLength="40"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="phone">Phone:</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="address">Address:</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            maxLength="40"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="website">Website:</label>
                                        <input
                                            type="url"
                                            name="website"
                                            id="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            maxLength="50"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="website">Company:</label>
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            maxLength="50"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="website">Summary:</label>
                                        <input
                                            type="text"
                                            name="summary"
                                            id="summary"
                                            value={formData.summary}
                                            onChange={handleChange}
                                            maxLength="50"
                                        />
                                    </div>
                                </div>
                            </form>
                            <h2 style={{ fontFamily: 'Poppins' }}>Custome your card</h2>
                            <div className="row">
                                <div className='col-3' style={{ width: '210px', overflow: 'hidden' }}>

                                    <SketchPicker
                                        color={backgroundColor}
                                        onChangeComplete={color => setBackgroundColor(color.hex)}
                                        disableAlpha={true}
                                    />
                                </div>
                                <div className='col-3'>
                                    <h1> </h1>
                                </div>
                            </div>
                            <div className='photos'>
                                <h2 style={{ fontFamily: 'Poppins' }}>Photos</h2>
                                <h5 style={{ fontFamily: 'Poppins',marginTop:4 }}>Your Logo</h5>
                                <input type="file" onChange={async (e) => setFormData({ ...formData, logo: await getObjectUrl(e.target.files[0]) })} />
                                <h5 style={{ fontFamily: 'Poppins',marginTop:8 }}>Your personal photo</h5>
                                <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="preview" style={{ maxHeight: '500px', overflowY: 'auto', paddingBottom: '20px' }}>
                                <h2 style={{ fontFamily: 'Poppins' }}>Card Preview</h2>
                                <div className="card" style={{ backgroundColor: backgroundColor }}>
                                    <div className="card-body" style={{ maxWidth: "600px" }}>
                                        <div className="row">
                                            <div className="col">
                                                <div className='square' style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 100 }}>
                                                    <img className="square-logo" src={formData.logo} alt="Logo" style={{ objectFit: 'cover', width: '100%', height: '100%', marginInline: '50%' }} />
                                                </div>
                                                <div className='circle'>
                                                    <img className="circle-photo" src={photoDataURL} style={{ borderRadius: '50%' }} alt="Foto" />
                                                </div>
                                                <h4 className="card-title">{formData.firstName} {formData.lastName}</h4>
                                                <h5 className="card-subtitle">{formData.title}</h5>
                                                <hr />
                                                <p className="card-text"><FaEnvelope></FaEnvelope> {formData.email}</p>
                                                <p className="card-text"><FaPhone></FaPhone> {formData.phone}</p>
                                                <p className="card-text"><FaMapMarkerAlt></FaMapMarkerAlt> {formData.address}</p>
                                                <p className="card-text"><FaGlobe></FaGlobe> {formData.website}</p>
                                                <p className="card-text"><FaBuilding></FaBuilding> {formData.company}</p>
                                                <p className="card-text"><FaInfoCircle></FaInfoCircle> {formData.summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className="qr-code">
                                        <QRCode value={`BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=utf-8:${formData.firstName} ${formData.lastName}\nTEL:${formData.phone}\nADR:${formData.address}\nEMAIL:${formData.email}\nURL:${formData.website}\nPHOTO;ENCODING=BASE64;TYPE=JPEG:${photoDataURL}\nEND:VCARD`} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Card
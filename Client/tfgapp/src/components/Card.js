import React, { useState } from 'react';
import QRCode from "react-qr-code";
import Footer from './Footer';
import { SketchPicker } from 'react-color'
import Header from './NavBar';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe, FaBuilding, FaInfoCircle, FaPlus, FaCloudUploadAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import square1 from '../assets/img/squaresCardPhotos/foto1.png'
import square2 from '../assets/img/squaresCardPhotos/foto2.jpg'
import square3 from '../assets/img/squaresCardPhotos/foto3.jpg'
import square4 from '../assets/img/squaresCardPhotos/foto4.jpg'
import square5 from '../assets/img/squaresCardPhotos/foto5.jpg'
import square6 from '../assets/img/squaresCardPhotos/foto6.jpg'
import square7 from '../assets/img/squaresCardPhotos/foto7.jpg'
import square8 from '../assets/img/squaresCardPhotos/foto8.jpg'
import square9 from '../assets/img/squaresCardPhotos/foto9.jpg'

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
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    logo: ""
};
function getContrastColor(hexColor) {
    // Convertir el color hexadecimal a RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    // Calcular la luminosidad del color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Devolver blanco (#FFF) para colores oscuros y negro (#000) para colores claros
    return luminance > 0.5 ? "#000" : "#FFF";
}



function Card() {

    //formulario
    const [formData, setFormData] = React.useState(initialFormData);

    //color de fondo de la card de preview
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState("#000");


    const handleChangeComplete = (color) => {
        setBackgroundColor(color.hex);
        setTextColor(getContrastColor(color.hex));
    };


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

    const [backgroundImage, setBackgroundImage] = useState(null);

    const handleSquareClick = (image) => {
        setBackgroundImage(`url(${image})`);
    };

    const handlePhotoChange2 = (event) => {
        const selectedFile = event.target.files[0];
        const objectUrl = URL.createObjectURL(selectedFile);
        setBackgroundImage(`url(${objectUrl})`);
    };

    return (
        <div>
            <Header></Header>
            <div className='container-card'>
                <div className="row">
                    <div className="col-6">
                        <div className="form">
                            <h2 style={{ fontFamily: 'Poppins', marginLeft: 20 }}>Create your CV card</h2>
                            <div class="form-container">
                                <h2 style={{ marginBottom: 10, fontSize: 18 }}>General information</h2>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstName">First Name:</label>
                                            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} placeholder='Rut' />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="lastName">Last Name:</label>
                                            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} placeholder='Yela' />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="email">Email:</label>
                                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} maxLength="40" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required placeholder='user@gmail.com' />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="phone">Phone:</label>
                                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder='673987654' />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="address">Address:</label>
                                            <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} maxLength="40" placeholder='Calle anónima' />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="website">Website:</label>
                                            <input type="url" name="website" id="website" value={formData.website} onChange={handleChange} maxLength="50" placeholder='https://inventada.com' />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="website">Company:</label>
                                            <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} maxLength="50" placeholder='Compañia S.A' />
                                        </div>
                                        <div class="form-group">
                                            <label for="website">Summary:</label>
                                            <textarea type="text" name="summary" cols="30" rows="1" id="summary" value={formData.summary} onChange={handleChange} maxLength="50" placeholder="Write about you and your company"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="form-container">
                                <h2 style={{ fontFamily: 'Poppins', fontSize: 18 }}>Design and customize</h2>
                                <div className="row">
                                    <div className='col-9' >
                                        <div className='photos2'>
                                            <h2 style={{ fontFamily: 'Poppins', fontSize: 18 }}>Background picture</h2>
                                            <div className='row' style={{ marginLeft: 250 }}>
                                                <div className='col-md-9'>
                                                    <ul className='borderbox qr_bg_wrapper' data-type='bg'>
                                                    </ul>
                                                </div>
                                                <div className='col-md-3'>
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <div
                                                                className="square-1" style={{ backgroundImage: `url(${square1})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover', }} onClick={() => handleSquareClick(square1)}></div>
                                                            <div className='square-4' style={{ backgroundImage: `url(${square4})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square4)}></div>
                                                            <div className='square-7' style={{ backgroundImage: `url(${square7})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square7)}></div>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className="square-3" style={{ backgroundImage: `url(${square3})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover', }} onClick={() => handleSquareClick(square3)}></div>
                                                            <div className='square-5' style={{ backgroundImage: `url(${square5})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square5)}></div>
                                                            <div className='square-8' style={{ backgroundImage: `url(${square8})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square8)}></div>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className='square-2' style={{ backgroundImage: `url(${square2})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square2)}></div>
                                                            <div className='square-6' style={{ backgroundImage: `url(${square6})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square6)}></div>
                                                            <div className='square-9' style={{ backgroundImage: `url(${square9})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square9)}></div>
                                                        </div>
                                                        <div className='square-10' style={{ backgroundColor: '#f8f8f8', width: 100, height: 100, marginRight: 4, marginBottom: 4, border: '2px dashed #ddd', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                                                            <input id='file' type="file" accept='' onChange={handlePhotoChange2} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
                                                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                                                                <span style={{ fontFamily: 'Poppins-light', marginLeft: 10 }}>Add Image</span>
                                                                <FaPlus size={20} style={{ marginBottom: 0 }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-3' style={{}}>
                                            <h2 style={{ fontFamily: 'Poppins', fontSize: 18 }}>Card background color </h2>
                                            <div className='row' style={{ width: '210px', overflow: 'hidden' }}>
                                                <SketchPicker
                                                    color={backgroundColor}
                                                    onChangeComplete={handleChangeComplete}
                                                    disableAlpha={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='photos'>
                                    <h2 style={{ fontFamily: 'Poppins', fontSize: 18, marginLeft: 4 }}>Photos</h2>
                                    <h5 style={{ fontFamily: 'Poppins-light', marginTop: 4, marginLeft: 12 }}>Your Logo</h5>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <label htmlFor="photo" className="custom-file-upload">
                                            <span><FaCloudUploadAlt /> Upload photo</span>
                                        </label>
                                        <input
                                            style={{ display: 'none' }}
                                            type="file"
                                            id="photo"
                                            name="photo"
                                            accept="image/*"
                                            onChange={async (e) => setFormData({ ...formData, logo: await getObjectUrl(e.target.files[0]) })}
                                        />
                                    </div>
                                    <h5 style={{ fontFamily: 'Poppins-light', marginTop: 8, marginLeft: 12 }}>Your personal photo</h5>
                                    <label htmlFor="personal-photo" className="custom-file-upload">
                                        <span><FaCloudUploadAlt /> Upload photo</span>
                                    </label>
                                    <input
                                        style={{ display: 'none' }}
                                        type="file"
                                        id="personal-photo"
                                        name="personal-photo"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        className="custom-file-input"
                                    />
                                </div>
                            </div>
                            <div class="form-container">
                                <h2 style={{ fontFamily: 'Poppins', fontSize: 18 }}>Social Networks</h2>
                                <div className="social-container">
                                    <div className="social-media-card">
                                        <div className="social-media-icon">
                                            <FaFacebook />
                                        </div>
                                        <div className="social-media-info">
                                            <h3 className="social-media-name">Facebook</h3>
                                            <input type='text' name="facebook" id="facebook" onChange={handleChange} value={formData.facebook} className="social-media-handle" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="social-media-card">
                                        <div className="social-media-icon">
                                            <FaInstagram />
                                        </div>
                                        <div className="social-media-info">
                                            <h3 className="social-media-name">Instagram</h3>
                                            <input type='text' name="instagram" id="instagram" onChange={handleChange} value={formData.instagram} className="social-media-handle" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="social-media-card">
                                        <div className="social-media-icon">
                                            <FaLinkedin />
                                        </div>
                                        <div className="social-media-info">
                                            <h3 className="social-media-name">LinkedIn</h3>
                                            <input type='text' name="linkedin" id="linkedin" onChange={handleChange} value={formData.linkedin} className="social-media-handle" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="social-media-card">
                                        <div className="social-media-icon">
                                            <FaTwitter />
                                        </div>
                                        <div className="social-media-info">
                                            <h3 className="social-media-name">Twitter</h3>
                                            <input type='text' name="twitter" id="twitter" onChange={handleChange} value={formData.twitter} className="social-media-handle" placeholder="Username" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="preview" style={{ maxHeight: '500px', overflowY: 'auto', paddingBottom: '20px' }}>
                                <div className="card-preview">
                                    <h2 style={{ fontFamily: 'Poppins' }}>Card Preview</h2>

                                    <div style={{ backgroundColor: 'black', backgroundImage: backgroundImage, width: 400, height: 200, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundSize: 'cover' }}>
                                        <div className='circle'>
                                            {photoDataURL ? (
                                                <img className="circle-photo" alt=' ' src={photoDataURL} style={{ borderRadius: '50%', fontFamily: 'Poppins-light', marginTop: 155, marginLeft: 163, border: 'solid 5px white' }} />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', borderRadius: '50%' }}></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="card" style={{ backgroundColor: backgroundColor }}>
                                        <div className="card-body" style={{ maxWidth: "600px" }}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className='square' style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 95 }}>
                                                        <img className="square-logo" src={formData.logo} alt=' ' style={{ objectFit: 'cover', width: '100%', height: '100%', marginInline: '50%', }} />
                                                    </div>
                                                    <h4 className="card-title" style={{ color: textColor }}>{formData.firstName} {formData.lastName}</h4>
                                                    <h5 className="card-subtitle" style={{ color: textColor }}>{formData.title}</h5>
                                                    <hr />
                                                    <p className="card-text" style={{ color: textColor }}><FaEnvelope></FaEnvelope> {formData.email}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaPhone></FaPhone> {formData.phone}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaMapMarkerAlt></FaMapMarkerAlt> {formData.address}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaGlobe></FaGlobe> {formData.website}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaBuilding></FaBuilding> {formData.company}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaInfoCircle></FaInfoCircle> {formData.summary}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaFacebook></FaFacebook> {formData.facebook}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaInstagram></FaInstagram> {formData.instagram}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaLinkedin></FaLinkedin> {formData.linkedin}</p>
                                                    <p className="card-text" style={{ color: textColor }}><FaTwitter></FaTwitter> {formData.twitter}</p>
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
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Card
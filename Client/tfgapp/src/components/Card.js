import React, { useState } from 'react';
import QRCode from "react-qr-code";
import Footer from './Footer';
import { SketchPicker } from 'react-color'
import Header from './NavBar';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe, FaBuilding, FaInfoCircle, FaPlus, FaMinus, FaCloudUploadAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import square1 from '../assets/img/squaresCardPhotos/foto1.png'
import square2 from '../assets/img/squaresCardPhotos/foto2.jpg'
import square3 from '../assets/img/squaresCardPhotos/foto3.jpg'
import square4 from '../assets/img/squaresCardPhotos/foto4.jpg'
import square5 from '../assets/img/squaresCardPhotos/foto5.jpg'
import square6 from '../assets/img/squaresCardPhotos/foto6.jpg'
import square7 from '../assets/img/squaresCardPhotos/foto7.jpg'
import square8 from '../assets/img/squaresCardPhotos/foto8.jpg'
import square9 from '../assets/img/squaresCardPhotos/foto9.jpg'

/**
 * Inicializamos los datos del form
 */
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

/**
 * 
 * @param {*} hexColor 
 * @returns
 * Funcíon que convierte el color hexadecimal en RGB y luego calcula la luminosidad del color 
 * utilizando una fórmula que compara la luminosidad del color con un umbral (0.5) para decidir
 * si el color de contraste adecuado es blanco para colores oscuros o negro para colores claros. 
 */
function getContrastColor(hexColor) {
    // Convertir el color hexadecimal a RGB.
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    // Calcular la luminosidad del color.
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Devolver blanco o negro 
    return luminance > 0.5 ? "#000" : "#FFF";
}

function Card() {

    /**
     *  Variable del formulario.
     */
    const [formData, setFormData] = React.useState(initialFormData);

    /**
     * Variable del color de fondo de la card de preview.
     */
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    /**
     * variable que recoge el color del texto de la card.
     */
    const [textColor, setTextColor] = useState("#000");

    const handleChangeComplete = (color) => {
        setBackgroundColor(color.hex);
        setTextColor(getContrastColor(color.hex));
    };


    /**
     * 
     * @param {*} event 
     * Función que cambia el valor si cambia algun texto label del form.
     */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    /**
     * 
     * @param {*} file 
     * @returns 
     * Función que toma un objeto File como entrada y devuelve una 
     * promesa que es una cadena de texto que representa la URL del objeto File para que pueda ser leida.
    */
    const getObjectUrl = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    /**
     * Función que verifica si es imagen y si lo es crea un objeto FileReader para leer el 
     * archivo, se actualiza el estado del formData con el archivo seleccionado, convirtiéndolo 
     * en una URL base64.
     **/
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        if (!file.type.startsWith('image/')) {
            alert('Only image files are allowed.');
            event.target.value = null; // Limpia el input file si el archivo no es valido
        } else {
            reader.onload = (e) => {
                setFormData({ ...formData, photoFile: file });
            };

            reader.readAsDataURL(file);
        }
    };

    /**
     * Si formData.photoFile existe, entonces se crea una URL de objeto para ese archivo 
     * utilizando la función URL.createObjectURL(). De lo contrario, se asigna una cadena vacía.
     * La función URL.createObjectURL() crea una URL de objeto para el archivo especificado.
     */
    const photoDataURL = formData.photoFile
        ? URL.createObjectURL(formData.photoFile)
        : '';


    /**
     * varible de la imagen de fondo de la card.
     */
    const [backgroundImage, setBackgroundImage] = useState(null);

    /**
     * 
     * @param {*} image 
     * Función que cambia la imágen cuando clica sobre algun square (coge la imagen de ese 
     * square y la pone de fondo de la card).
     */
    const handleSquareClick = (image) => {
        setBackgroundImage(`url(${image})`);
    };

    /**
     * 
     * @param {*} event 
     * Función que se ejecuta cuando no hemos elegido una imagen predeterminada y subimos 
     * una de nuestros archivos(coge el archivo y crea su url para que pueda ser leido y puesto 
     * como fondo).
     */
    const handlePhotoChange2 = (event) => {
        const selectedFile = event.target.files[0];
        const objectUrl = URL.createObjectURL(selectedFile);
        setBackgroundImage(`url(${objectUrl})`);
    };

    /**
     * Variable que recoge si el desplegable esta abierto o cerrado
     */
    const [showForm, setShowForm] = useState(true);

    /**
     * Función que cambia el estado del desplegable a abierto o cerrado (true o false)
     */
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const [showDesign, setShowDesign] = useState(false);
    const toggleDesign = () => {
        setShowDesign(!showDesign);
    };

    const [showSocialNetwork, setShowSocialNetwork] = useState(false);
    const toggleSocialNetwork = () => {
        setShowSocialNetwork(!showSocialNetwork);
    };

    return (
        <div>
            <Header></Header>
            <div className='container-card'>
                <div style={{ marginLeft: 20, marginBottom: '1rem', position: 'relative' }}>
                    <h2 style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '2rem', letterSpacing: '0.5px' }}>
                        Create your business card
                    </h2>
                    <hr className='titulo-page' style={{ border: 'none', backgroundColor: '#FFC300', height: '2px', borderRadius: '2px', margin: 0, position: 'absolute', bottom: '-10px', left: 0, }} />
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form">
                            <div class="form-toggle" onClick={toggleForm}>
                                <h2 class="form-toggle-text">General information</h2>
                                <button class="form-toggle-button" style={{ background: 'white' }}>{showForm ? <FaMinus /> : <FaPlus />}</button>
                            </div>
                            {showForm && (
                                <div class="form-container">
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
                            )}
                        </div>
                        <div class="form-toggle" onClick={toggleDesign}>
                            <h2 class="form-toggle-text">Design and customize</h2>
                            <button class="form-toggle-button" style={{ background: 'white' }}>{showDesign ? <FaMinus /> : <FaPlus />}</button>
                        </div>
                        {showDesign && (
                            <div class="form-container">
                                <div className='container-design'>
                                    <div className="row">
                                        <div className='col-lg-9 col-md-12' >
                                            <div className='photos2'>
                                                <h2 style={{ fontFamily: 'Poppins-light', fontSize: 16 }}>Background picture</h2>
                                                <div className='row'>
                                                    <div className='col-md-9'>
                                                        <ul className='borderbox qr_bg_wrapper' data-type='bg'>
                                                        </ul>
                                                    </div>
                                                    <div className='col-md-3'>
                                                        <div className='row'>
                                                            <div className='col-md-5'>
                                                                <div className="square-1" style={{ backgroundImage: `url(${square1})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square1)}></div>
                                                                <div className='square-4' style={{ backgroundImage: `url(${square4})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square4)}></div>
                                                                <div className='square-7' style={{ backgroundImage: `url(${square7})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square7)}></div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div className="square-3" style={{ backgroundImage: `url(${square3})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square3)}></div>
                                                                <div className='square-5' style={{ backgroundImage: `url(${square5})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square5)}></div>
                                                                <div className='square-8' style={{ backgroundImage: `url(${square8})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square8)}></div>
                                                            </div>
                                                            <div className='col-md-4'>
                                                                <div className='square-2' style={{ backgroundImage: `url(${square2})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square2)}></div>
                                                                <div className='square-6' style={{ backgroundImage: `url(${square6})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square6)}></div>
                                                                <div className='square-9' style={{ backgroundImage: `url(${square9})`, width: 100, height: 100, marginRight: 4, marginBottom: 4, backgroundSize: 'cover' }} onClick={() => handleSquareClick(square9)}></div>
                                                            </div>
                                                            <label htmlFor="file" style={{ display: 'inline-block' }}>
                                                                <div className='square-10' style={{ backgroundColor: '#f8f8f8', width: 100, height: 100, marginRight: 4, marginBottom: 4, border: '2px dashed #ddd', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                                                                    <input id='file' type="file" accept='' onChange={handlePhotoChange2} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
                                                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                                                                        <span style={{ fontFamily: 'Poppins-light', marginLeft: 10 }}>Add Image</span>
                                                                        <FaPlus size={20} style={{ marginBottom: 0 }} />
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3" >
                                                <h2 style={{ fontFamily: 'Poppins-light', fontSize: 16, color: '#212529', marginBottom: '1rem' }}>Card background color</h2>
                                                <div className='row' style={{ maxWidth: '100%', overflowX: 'auto', marginLeft: '-1rem', marginRight: '-1rem' }}>
                                                    <div className='col-6 col-md-12' style={{ paddingRight: '1rem', paddingLeft: '3rem', marginBottom: '0.5rem' }}>
                                                        <div className='colors' style={{ display: 'flex', alignItems: 'center' }}>
                                                            <div style={{ backgroundColor: backgroundColor, width: '20px', height: '20px', borderRadius: '50%', marginRight: '1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}></div>
                                                            <span style={{ fontFamily: 'Poppins-light', fontSize: '14px', fontWeight: 'bold', color: '#6C757D' }}>{backgroundColor.toUpperCase()}</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-6 col-md-12' style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
                                                        <div style={{ width: '100%', maxWidth: '200px', position: 'relative', height: 330, marginTop: 10 }}>
                                                            <SketchPicker
                                                                color={backgroundColor}
                                                                onChangeComplete={handleChangeComplete}
                                                                disableAlpha={true}
                                                                style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '4px', position: 'absolute', top: '100%', left: '0' }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6" style={{ padding: '1rem' }}>
                                        <div className='photos' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <h2 style={{ fontFamily: 'Poppins-light', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Photos</h2>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                                <h5 style={{ fontFamily: 'Poppins-light', marginTop: '0.25rem' }}>Your Logo</h5>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label htmlFor="photo" className="custom-file-upload" style={{ marginRight: '0.5rem', fontSize: '0.9rem' }}>
                                                        <span><FaCloudUploadAlt className="cloud-icon" /> Upload photo</span>
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
                                                <h5 style={{ fontFamily: 'Poppins-light', marginTop: '0.5rem' }}>Your personal photo</h5>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <label htmlFor="personal-photo" className="custom-file-upload" style={{ marginRight: '0.5rem', fontSize: '0.9rem' }}>
                                                        <span><FaCloudUploadAlt className="cloud-icon" /> Upload photo</span>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div class="form-toggle" onClick={toggleSocialNetwork}>
                            <h2 class="form-toggle-text">Social Networks</h2>
                            <button class="form-toggle-button" style={{ background: 'white' }}>{showSocialNetwork ? <FaMinus /> : <FaPlus />}</button>
                        </div>
                        {showSocialNetwork && (
                            <div className="form-container">
                                <div className="social-container">
                                    <div className="social-media-card" style={{ width: '100%' }}>
                                        <div className="social-media-icon">
                                            <FaFacebook />
                                        </div>
                                        <div className="social-media-info">
                                            <h3 className="social-media-name">Facebook</h3>
                                            <input
                                                type='text'
                                                name="facebook"
                                                id="facebook"
                                                onChange={handleChange}
                                                value={formData.facebook}
                                                className="social-media-handle"
                                                placeholder="Username"
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="social-media-card" style={{ width: '100%' }}>
                                        <div className="social-media-icon">
                                            <FaInstagram />
                                        </div>
                                        <div className="social-media-info">
                                            <h3 className="social-media-name">Instagram</h3>
                                            <input
                                                type='text'
                                                name="instagram"
                                                id="instagram"
                                                onChange={handleChange}
                                                value={formData.instagram}
                                                className="social-media-handle"
                                                placeholder="Username"
                                                style={{ width: '100%' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="social-media-card" style={{ width: '100%' }}>
                                        <div className="social-media-icon">
                                            <FaLinkedin />
                                        </div>
                                        <div className="social-media-info">
                                            <h3 className="social-media-name">LinkedIn</h3>
                                            <input type='text' name="linkedin" id="linkedin" onChange={handleChange} value={formData.linkedin} className="social-media-handle" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="social-media-card" style={{ width: '100%' }}>
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
                        )}
                    </div>
                    <div className='row'>
                        <div className="col-12 col-md-6">
                            <div className="preview" style={{ maxHeight: '500px', overflowY: 'auto', marginBottom: '30px' }}>
                                <div className="card-preview">
                                    <h2 style={{ fontFamily: 'Poppins', marginTop: -7.5, marginBottom: 22 }}>Card Preview</h2>
                                    <div className='image-card' style={{ width: 400, backgroundColor: 'black', backgroundImage: backgroundImage, height: 200, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundSize: 'cover', zIndex: 1, marginBottom: -10 }}>
                                        <div className='circle'>
                                            {photoDataURL ? (
                                                <img className="circle-photo" alt=' ' src={photoDataURL} style={{ borderRadius: '50%', fontFamily: 'Poppins-light', marginTop: 155, marginLeft: 160, border: 'solid 5px white' }} />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', borderRadius: '50%' }}></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="card " style={{ backgroundColor: backgroundColor }}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className='square' style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 95 }}>
                                                        <img className="square-logo" src={formData.logo} alt=' ' style={{ objectFit: 'cover', width: '100%', height: '100%', marginInline: '50%', }} />
                                                    </div>
                                                    <h4 className="card-title" style={{ color: textColor }}>{formData.firstName} {formData.lastName}</h4>
                                                    <h5 className="card-subtitle" style={{ color: textColor }}>{formData.title}</h5>
                                                    <hr />
                                                    {formData.email &&
                                                        <p className="card-text" style={{ color: textColor }}><FaEnvelope></FaEnvelope> {formData.email}</p>
                                                    }
                                                    {formData.phone &&
                                                        <p className="card-text" style={{ color: textColor }}><FaPhone></FaPhone> {formData.phone}</p>
                                                    }
                                                    {formData.address &&
                                                        <p className="card-text" style={{ color: textColor }}><FaMapMarkerAlt></FaMapMarkerAlt> {formData.address}</p>
                                                    }
                                                    {formData.website &&
                                                        <p className="card-text" style={{ color: textColor }}><FaGlobe></FaGlobe> {formData.website}</p>
                                                    }
                                                    {formData.company &&
                                                        <p className="card-text" style={{ color: textColor }}><FaBuilding></FaBuilding> {formData.company}</p>
                                                    }
                                                    {formData.summary &&
                                                        <p className="card-text" style={{ color: textColor }}><FaInfoCircle></FaInfoCircle> {formData.summary}</p>
                                                    }
                                                    {formData.facebook &&
                                                        <p className="card-text" style={{ color: textColor }}><FaFacebook></FaFacebook> {formData.facebook}</p>
                                                    }
                                                    {formData.instagram &&
                                                        <p className="card-text" style={{ color: textColor }}><FaInstagram></FaInstagram> {formData.instagram}</p>
                                                    }
                                                    {formData.linkedin &&
                                                        <p className="card-text" style={{ color: textColor }}><FaLinkedin></FaLinkedin> {formData.linkedin}</p>
                                                    }
                                                    {formData.twitter &&
                                                        <p className="card-text" style={{ color: textColor }}><FaTwitter></FaTwitter> {formData.twitter}</p>}
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
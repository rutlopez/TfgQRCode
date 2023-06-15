import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";
import Footer from './Footer';
import { SketchPicker } from 'react-color';
import Header from './NavBar';
import { FaEnvelope, FaMapMarkerAlt, FaTrash, FaPhone, FaGlobe, FaBuilding, FaInfoCircle, FaPlus, FaMinus, FaCloudUploadAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPinterest, FaYoutube, FaReddit, FaSkype, FaTiktok, FaTwitch, FaGithub, FaShopify, FaEtsy, FaAmazon, FaSnapchat } from 'react-icons/fa';
import { SiUbereats } from 'react-icons/si';
import square1 from '../assets/img/squaresCardPhotos/foto1.png'
import square2 from '../assets/img/squaresCardPhotos/foto2.jpg'
import square3 from '../assets/img/squaresCardPhotos/foto3.jpg'
import square4 from '../assets/img/squaresCardPhotos/foto4.jpg'
import square5 from '../assets/img/squaresCardPhotos/foto5.jpg'
import square6 from '../assets/img/squaresCardPhotos/foto6.jpg'
import square7 from '../assets/img/squaresCardPhotos/foto7.jpg'
import square8 from '../assets/img/squaresCardPhotos/foto8.jpg'
import square9 from '../assets/img/squaresCardPhotos/foto9.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toPng } from 'html-to-image';


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
    photoFile: null,
    summary: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    pinterest: "",
    youtube: "",
    reddit: "",
    tiktok: "",
    skype: "",
    twitch: "",
    github: "",
    shopify: "",
    etsy: "",
    amazon: "",
    snapchat: "",
    ubereats: "",
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
            event.target.value = null;
        } else {
            reader.onload = (e) => {
                const base64Image = reader.result; // Representación en base64 de la imagen
                setFormData({ ...formData, photoFile: file, photoDataURL: base64Image });
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
    console.log(formData.photoFile)



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

    /**
     *  Función que se encarga de generar la imagen del código QR y descargarla como un archivo PNG.
     */
    const handleDownloadQRCode = () => {
        const qrCodeContainer = document.getElementById('qr-code-container');//obtiene el elemento del DOM que tiene el ID "qr-code-container".

        if (qrCodeContainer) {
            toPng(qrCodeContainer)//Utiliza la función toPng de la librería html-to-image para convertir el contenido del contenedor del código QR a una imagen PNG.
                .then(function (dataUrl) {
                    const link = document.createElement('a');//Crea un elemento <a> (enlace) utilizando document.createElement
                    link.href = dataUrl;//Establece la URL de datos de la imagen como el valor del atributo href del enlace.
                    link.download = 'codigo-qr.png';//Establece el nombre de archivo sugerido para la descarga del enlace.
                    link.click();//Simula un clic en el enlace para iniciar la descarga del archivo
                })
                .catch(function (error) {
                    console.error('Error al generar la imagen del código QR:', error);
                });
        }
    };

    /**
     * Función que genera y descarga un archivo vCard (.vcf) 
     */
    function downloadVCard() {
        const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=utf-8:${formData.firstName} ${formData.lastName}\nTEL:${formData.phone}\nADR:${formData.address}\nEMAIL:${formData.email}\nURL:${formData.website}\nPHOTO;ENCODING=BASE64;TYPE=JPEG:${photoDataURL}\nX-SOCIALPROFILE;type=facebook:${formData.linkedin}\nX-SOCIALPROFILE;type=instagram:${formData.linkedin}\nX-SOCIALPROFILE;type=linkedin:${formData.linkedin}\nX-SOCIALPROFILE;type=twitter:${formData.twitter}\nEND:VCARD`;
        const element = document.createElement('a');//Se crea un elemento <a> utilizando document.createElement('a'). Este elemento se utilizará para la descarga del archivo vCard.
        const file = new Blob([vCardData], { type: 'text/vcard' });// (Blob representa el contenido del archivo vCard). El contenido se pasa a bytes, donde vCardData se convierte en el contenido del archivo de texto. Se especifica el tipo de archivo como 'text/vcard'
        element.href = URL.createObjectURL(file);//Esto crea una URL temporal que apunta al archivo vCard generado.
        element.download = 'mi_tarjeta.vcf';
        document.body.appendChild(element);//Esto especifica el nombre del archivo que se descargará cuando se haga clic en el enlace.
        element.click();//Inicia la descarga del archivo vCard con un click.
        document.body.removeChild(element);
    }

    /**
    *  Constante que recoge las redes sociales 
    */
    const [showUsername, setShowUsername] = useState({
        facebook: false,
        instagram: false,
        linkedin: false,
        twitter: false,
        pinterest: false,
        youtube: false,
        reddit: false,
        skype: false,
        tiktok: false,
        twitch: false,


    });
    /**
    *  Función que se encarga de abrir el input de la red social clicada para añadir el perfil 
    */
    const handleIconClick = (socialNetwork, showField = true) => {
        setShowUsername(prevState => ({
            ...prevState,
            [socialNetwork]: showField
        }));
    };
    /**
    *  Función que se encarga quitar el input de la red social clicada 
    */
    const handleRemoveClick = (socialNetwork) => {
        setShowUsername(prevState => ({
            ...prevState,
            [socialNetwork]: false,
        }));
        setFormData(prevFormData => ({
            ...prevFormData,
            [socialNetwork]: "",
        }));
    };

    /**
    *  Efectos visuales  
    */
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, [])

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
                {/* Columna de la izquierda */}
                <div className="row">
                    <div className="col-6">
                        {/* General Info section (formulario) */}
                        <div className="form">
                            <div class="form-toggle" data-aos="fade-right" onClick={toggleForm}>
                                <h2 class="form-toggle-text" data-aos="fade-right">General information </h2>
                                <button class="form-toggle-button" style={{ background: 'white' }}>{showForm ? <FaMinus /> : <FaPlus />}</button>
                            </div>
                            {showForm && (
                                <div class="form-container" data-aos="fade-right">
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
                        {/* Design and customize section (diseño de la tarjeta) */}
                        <div class="form-toggle" data-aos="fade-right" onClick={toggleDesign}>
                            <h2 class="form-toggle-text" data-aos="fade-right">Design and customize</h2>
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
                        {/*Social networks section (redes sociales) */}
                        <div class="form-toggle" data-aos="fade-right" onClick={toggleSocialNetwork}>
                            <h2 class="form-toggle-text" data-aos="fade-right" >Social Networks</h2>
                            <button class="form-toggle-button" style={{ background: 'white' }}>{showSocialNetwork ? <FaMinus /> : <FaPlus />}</button>
                        </div>
                        {showSocialNetwork && (
                            <div>
                                <div className="form-container">
                                    <div className="social-container">
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('facebook')}>
                                                <FaFacebook />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('instagram')}>
                                                <FaInstagram />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('linkedin')}>
                                                <FaLinkedin />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('twitter')}>
                                                <FaTwitter />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('pinterest')}>
                                                <FaPinterest />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('youtube')}>
                                                <FaYoutube />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('reddit')}>
                                                <FaReddit />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('skype')}>
                                                <FaSkype />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('tiktok')}>
                                                <FaTiktok />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('twitch')}>
                                                <FaTwitch />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('github')}>
                                                <FaGithub />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('shopify')}>
                                                <FaShopify />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('etsy')}>
                                                <FaEtsy />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('amazon')}>
                                                <FaAmazon />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('snapchat')}>
                                                <FaSnapchat />
                                            </div>
                                        </div>
                                        <div className="social-media-card">
                                            <div className="social-media-icon" onClick={() => handleIconClick('ubereats')}>
                                                <SiUbereats />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*iconos de redes sociales a elegir por el usuario */}
                                {showUsername.facebook && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20 }}>Enter your Facebook username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="facebook"
                                                id="facebook"
                                                onChange={handleChange}
                                                value={formData.facebook}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('facebook')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {showUsername.instagram && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',

                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20 }}>Enter your Instagram username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="instagram"
                                                id="instagram"
                                                onChange={handleChange}
                                                value={formData.instagram}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('instagram')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {showUsername.linkedin && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',

                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20 }}>Enter your Linkedin username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="linkedin"
                                                id="linkedin"
                                                onChange={handleChange}
                                                value={formData.linkedin}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('linkedin')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {showUsername.twitter && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',

                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20 }}>Enter your Twitter username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="twitter"
                                                id="twitter"
                                                onChange={handleChange}
                                                value={formData.twitter}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('twitter')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {showUsername.pinterest && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Pinterest username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="pinterest"
                                                id="pinterest"
                                                onChange={handleChange}
                                                value={formData.pinterest}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('pinterest')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.youtube && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Youtube username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="youtube"
                                                id="youtube"
                                                onChange={handleChange}
                                                value={formData.youtube}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('youtube')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.reddit && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Reddit username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="reddit"
                                                id="reddit"
                                                onChange={handleChange}
                                                value={formData.reddit}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('reddit')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.skype && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Skype username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="skype"
                                                id="skype"
                                                onChange={handleChange}
                                                value={formData.skype}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('skype')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.tiktok && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Tiktok username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="tiktok"
                                                id="tiktok"
                                                onChange={handleChange}
                                                value={formData.tiktok}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('tiktok')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.twitch && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Twitch username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="twitch"
                                                id="twitch"
                                                onChange={handleChange}
                                                value={formData.twitch}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('twitch')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.github && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Github username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="github"
                                                id="github"
                                                onChange={handleChange}
                                                value={formData.github}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('github')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.shopify && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Shopify username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="shopify"
                                                id="shopify"
                                                onChange={handleChange}
                                                value={formData.shopify}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('shopify')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.etsy && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Etsy username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="etsy"
                                                id="etsy"
                                                onChange={handleChange}
                                                value={formData.etsy}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('etsy')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.amazon && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Amazon username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="amazon"
                                                id="amazon"
                                                onChange={handleChange}
                                                value={formData.amazon}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('amazon')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.snapchat && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Snapchat username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="snapchat"
                                                id="snapchat"
                                                onChange={handleChange}
                                                value={formData.snapchat}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('snapchat')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {showUsername.ubereats && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <p className="social-media-name" style={{ fontFamily: 'Poppins-light', fontSize: 12, marginBottom: -20, }}>Enter your Uber Eats username </p>
                                        <div className="input-row">
                                            <input
                                                type="text"
                                                name="ubereats"
                                                id="ubereats"
                                                onChange={handleChange}
                                                value={formData.ubereats}
                                                className="social-media-handle"
                                                placeholder="Username"
                                            />
                                            <button className="remove-button" onClick={() => handleRemoveClick('ubereats')}>
                                                <FaTrash style={{ marginTop: 3 }} />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    {/* Columna de la derecha (preview) */}
                    <div className='row'>
                        <div className="col-12 col-md-6">
                            <div className="preview" style={{ maxHeight: '700px', overflowY: 'auto', marginBottom: '30px' }}>
                                <h2 style={{ fontFamily: 'Poppins', marginTop: -7.5, marginBottom: 22 }}>Card Preview</h2>
                                <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className='phone-preview'>
                                        <div className='phone-preview-bg'>
                                            <div className='item-container' >
                                                <div className='item-header'>
                                                    <div className='' style={{ backgroundColor: '#fecc00', width: '230px', height: 126, backgroundImage: backgroundImage, backgroundSize: 'cover' }}>
                                                        <div className="px-0 w-100">
                                                            <div className="text-center card-wrapper">
                                                                <div className="img-wrap">
                                                                    {photoDataURL ? (
                                                                        <div className='circle' >
                                                                            <img
                                                                                className="circle-photo"
                                                                                alt=""
                                                                                src={photoDataURL}
                                                                                style={{
                                                                                    borderRadius: '50%',
                                                                                    fontFamily: 'Poppins-light',
                                                                                    border: 'solid 3px white'
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    ) : (
                                                                        <div className='img-wrap'>
                                                                            <img className="img-body" style={{ backgroundImage: 'url(https://e7.pngegg.com/pngimages/323/705/png-clipart-user-profile-get-em-cardiovascular-disease-zingah-avatar-miscellaneous-white.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="p-0 card2-body">
                                                                    <h6 className="text-white card2-title"> </h6>
                                                                    <div className="mb-2 text-white card2-subtitle"></div>
                                                                </div>
                                                                <div className="vcard-functions" style={{ backgroundColor: backgroundColor, color: textColor }}>
                                                                    <div className="vcard-functions-wrapper" style={{ backgroundColor: backgroundColor, color: textColor }}>
                                                                        <a href={`tel:${formData.phone}`} style={{ color: textColor }}>
                                                                            <FaPhone className="qr-phone-call mr-1" />
                                                                            <small className="dynamicText" style={{ backgroundColor: backgroundColor, color: textColor }}>Phone</small>
                                                                        </a>
                                                                        <a target="_blank" rel="noreferrer" style={{ color: textColor }}>
                                                                            <FaEnvelope className="qr-email1 mr-1" />
                                                                            <small className="dynamicText" style={{ backgroundColor: backgroundColor, color: textColor }}>Email</small>
                                                                        </a>
                                                                        <a href={`${formData.website}`} target="_blank" class="border-right-0" rel="noreferrer" style={{ color: textColor }}>
                                                                            <FaGlobe className="qr-global mr-1" />
                                                                            <small className="dynamicText" style={{ backgroundColor: backgroundColor, color: textColor }}>Website</small>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='item-body' style={{ marginTop: 10 }}>
                                                        <div className="details-row w-100">
                                                            <small className="d-block text-center" >Personal description</small>
                                                        </div>
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <a className="details-info" >
                                                                <div>
                                                                    <small> Name:</small>
                                                                    <p style={{ fontFamily: 'Poppins-light' }}>{formData.firstName} {formData.lastName}</p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <div className="details-info">
                                                                <FaEnvelope className="qr-phone-call mr-3" />
                                                                <div>
                                                                    <small> Email:</small>
                                                                    <p style={{ fontFamily: 'Poppins-light' }}>{formData.email}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <div className="details-info" >
                                                                <FaPhone className="qr-phone-call mr-3" />
                                                                <div>
                                                                    <small> Phone:</small>
                                                                    <p style={{ fontFamily: 'Poppins-light' }}>{formData.phone}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <div className="details-info">
                                                                <FaMapMarkerAlt className="qr-phone-call mr-3" />
                                                                <div>
                                                                    <small>Adress:</small>
                                                                    <p style={{ fontFamily: 'Poppins-light' }}>{formData.address}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <div className="details-info">
                                                                <FaGlobe className="qr-phone-call mr-3" />
                                                                <div>
                                                                    <small>Website</small>
                                                                    <p style={{ fontFamily: 'Poppins-light' }}>{formData.website}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <div className="details-info" >
                                                                <FaBuilding className="qr-phone-call mr-3" />
                                                                <div>
                                                                    <small >Company</small>
                                                                    <p style={{ fontFamily: 'Poppins-light' }}>{formData.company}</p>
                                                                </div>
                                                                {formData.logo ? (
                                                                    <div className='square' >
                                                                        <img
                                                                            className="square-photo"
                                                                            alt=""
                                                                            src={formData.logo}
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <div className='img-wrap'>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <div className="details-info" >
                                                                <FaInfoCircle className="qr-phone-call mr-3" />
                                                                <div>
                                                                    <small>Summary</small>
                                                                    <p style={{ fontFamily: 'Poppins-light' }}>{formData.summary}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="details-row w-100">
                                                            <small className="d-block text-center" >Social media</small>
                                                        </div>
                                                        {/* Aquí saldran los iconos seleccionados por 
                                                         el usuario en la sección de social networks */}
                                                        <div className="details-row w-100" style={{ backgroundColor: '#f8f8f8' }}>
                                                            <div className="social-icons-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.facebook && (
                                                                        <a href={`https://www.facebook.com/${formData.facebook}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaFacebook className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.instagram && (
                                                                        <a href={`https://www.instagram.com/${formData.instagram}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaInstagram className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.linkedin && (
                                                                        <a href={`https://www.linkedin.com/${formData.linkedin}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaLinkedin className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.twitter && (
                                                                        <a href={`https://www.twitter.com/${formData.twitter}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaTwitter className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.pinterest && (
                                                                        <a href={`https://www.pinterest.com/${formData.pinterest}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaPinterest className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.youtube && (
                                                                        <a href={`https://www.youtube.com/@${formData.youtube}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaYoutube className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.reddit && (
                                                                        <a href={`https://www.reddit.com/${formData.reddit}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaReddit className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.skype && (
                                                                        <a href={`https://www.skype.com/${formData.skype}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaSkype className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.tiktok && (
                                                                        <a href={`https://www.tiktok.com/@${formData.tiktok}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaTiktok className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.twitch && (
                                                                        <a href={`https://www.twitch.tv/${formData.twitch}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaTwitch className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.github && (
                                                                        <a href={`https://www.github.com/${formData.github}`} target="_blank" rel="noopener noreferrer">
                                                                            <FaGithub className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.shopify && (
                                                                        <a target="_blank" rel="noopener noreferrer">
                                                                            <FaShopify className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.etsy && (
                                                                        <a target="_blank" rel="noopener noreferrer">
                                                                            <FaEtsy className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.amazon && (
                                                                        <a target="_blank" rel="noopener noreferrer">
                                                                            <FaAmazon className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.snapchat && (
                                                                        <a href={`https://www.snapchat.com/add/${formData.snapchat}?web_client_id=`} target="_blank" rel="noopener noreferrer">
                                                                            <FaSnapchat className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                                <div className="social-icon-wrapper">
                                                                    {formData.ubereats && (
                                                                        <a target="_blank" rel="noopener noreferrer">
                                                                            <SiUbereats className="social-icon" />
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Código QR */}
                                        <div className="qr-code">
                                            <QRCode id="qr-code-container"
                                                value={`BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=utf-8:${formData.firstName} ${formData.lastName}\nTEL:${formData.phone}\nADR:${formData.address}\nEMAIL:${formData.email}\nURL:${formData.website}\nNOTE:${formData.summary}\nPHOTO;ENCODING=BASE64;TYPE=JPEG:${photoDataURL}${formData.facebook ? `\nX-SOCIALPROFILE;type=facebook:${formData.facebook}` : ''}${formData.instagram ? `\nX-SOCIALPROFILE;type=instagram:${formData.instagram}` : ''}${formData.linkedin ? `\nX-SOCIALPROFILE;type=linkedin:${formData.linkedin}` : ''}${formData.twitter ? `\nX-SOCIALPROFILE;type=twitter:${formData.twitter}` : ''}${formData.pinterest ? `\nX-SOCIALPROFILE;type=pinterest:${formData.pinterest}` : ''}${formData.youtube ? `\nX-SOCIALPROFILE;type=youtube:${formData.youtube}` : ''}${formData.reddit ? `\nX-SOCIALPROFILE;type=reddit:${formData.reddit}` : ''}${formData.skype ? `\nX-SOCIALPROFILE;type=skype:${formData.skype}` : ''}${formData.tiktok ? `\nX-SOCIALPROFILE;type=tiktok:${formData.tiktok}` : ''}${formData.twitch ? `\nX-SOCIALPROFILE;type=twitch:${formData.twitch}` : ''}${formData.github ? `\nX-SOCIALPROFILE;type=github:${formData.github}` : ''}${formData.shopify ? `\nX-SOCIALPROFILE;type=shopify:${formData.shopify}` : ''}${formData.etsy ? `\nX-SOCIALPROFILE;type=etsy:${formData.etsy}` : ''}${formData.amazon ? `\nX-SOCIALPROFILE;type=amazon:${formData.amazon}` : ''}${formData.snapchat ? `\nX-SOCIALPROFILE;type=snapchat:${formData.snapchat}` : ''}${formData.ubereats ? `\nX-SOCIALPROFILE;type=ubereats:${formData.ubereats}` : ''}\nEND:VCARD`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Botones de descarga */}
                            <div className="button-container">
                                <div className="button-row">
                                    <button className="button-download" onClick={handleDownloadQRCode}>Download QR Code</button>
                                    <button className="button-download" onClick={downloadVCard}>Download vCard</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Card
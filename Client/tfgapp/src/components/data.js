/**
 * @fileoverview Exporta la constante featureList que contiene la lista de características.
 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
import { FaBolt, FaQrcode } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineShareAlt } from 'react-icons/ai';

export const featureList = [
    {
        id: 1,
        icon: <FaBolt color='black' size={22} />,
        heading: "Fast and easy to use",
        text: "Our app allows you to create and design your own business cards with QR codes quickly and easily."
    },
    {
        id: 2,
        icon: <FaQrcode color='black' size={22} />,
        heading: "QR code integration",
        text: "Easily add QR codes to your business cards to make it easy for people to quickly access your contact information."
    },
    {
        id: 3,
        icon: <FiEdit color='black' size={22} />,
        heading: "Customizable templates",
        text: "Choose from a variety of pre-designed templates or create your own unique design to make your business card stand out."
    },
    {
        id: 4,
        icon: <AiOutlineShareAlt color='black' size={22} />,
        heading: "Digital sharing options",
        text: "Share your business card digitally through email or social media with just a few clicks."
    },
]
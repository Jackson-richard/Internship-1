import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919884488747?text=Hi%20KK%20International%2C%20I'd%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float group"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle size={28} />
            <span className="whatsapp-tooltip">Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;

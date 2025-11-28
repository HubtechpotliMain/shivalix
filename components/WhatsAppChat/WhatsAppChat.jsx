"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { fxServices } from "@/constants";
import Image from "next/image";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import "./WhatsAppChat.scss";

const WhatsAppChat = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      disablePageScroll();
    } else {
      enablePageScroll();
    }

    return () => {
      enablePageScroll();
    };
  }, [isOpen, selectedService]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    scrollToBottom();
  };

  const handleWhatsAppRedirect = (service) => {
    const phone = "919599516159";
    const message = `Hi Shivalix Forex, I'm interested in ${service.title}.\n\nDescription: ${service.description}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  if (!isOpen || !mounted) return null;

  const chatContent = (
    <>
      {/* Backdrop */}
      <div
        className="whatsapp-chat-backdrop"
        onClick={onClose}
      />
      
      {/* Chat Container */}
      <div
        className="whatsapp-chat-container"
        ref={chatContainerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Header */}
        <div className="whatsapp-chat-header">
          <div className="whatsapp-chat-header-info">
            <div className="whatsapp-chat-avatar">
              <div className="whatsapp-chat-avatar-inner">
                <span>SF</span>
              </div>
            </div>
            <div className="whatsapp-chat-header-text">
              <h3>Shivalix Forex</h3>
              <p>Online</p>
            </div>
          </div>
          <div className="whatsapp-chat-header-actions">
            <button
              onClick={onClose}
              className="whatsapp-chat-close-btn"
              aria-label="Close chat"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="whatsapp-chat-messages">
          {/* Welcome Message */}
          <div className="whatsapp-message whatsapp-message-received">
            <div className="whatsapp-message-bubble whatsapp-message-bubble-received">
              <p>Hello! 👋</p>
              <p>Welcome to Shivalix Forex. How can I help you today?</p>
            </div>
            <span className="whatsapp-message-time">Just now</span>
          </div>

          {/* Services Message */}
          {!selectedService && (
            <div className="whatsapp-message whatsapp-message-received">
              <div className="whatsapp-message-bubble whatsapp-message-bubble-received">
                <p>Please select a service you're interested in:</p>
              </div>
              <span className="whatsapp-message-time">Just now</span>
            </div>
          )}

          {/* Service Selection */}
          {!selectedService ? (
            <div className="whatsapp-services-list">
              {fxServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className="whatsapp-service-card"
                >
                  <div className="whatsapp-service-card-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                  <div className="whatsapp-service-card-arrow">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <>
              {/* User Selected Service Message */}
              <div className="whatsapp-message whatsapp-message-sent">
                <div className="whatsapp-message-bubble whatsapp-message-bubble-sent">
                  <p>I'm interested in: {selectedService.title}</p>
                </div>
                <span className="whatsapp-message-time">Just now</span>
              </div>

              {/* Service Details */}
              <div className="whatsapp-message whatsapp-message-received">
                <div className="whatsapp-message-bubble whatsapp-message-bubble-received">
                  <div className="whatsapp-service-details">
                    <h4>{selectedService.title}</h4>
                    <p className="whatsapp-service-badge">{selectedService.badge}</p>
                    <p>{selectedService.description}</p>
                    {selectedService.highlights && selectedService.highlights.length > 0 && (
                      <div className="whatsapp-service-highlights">
                        <p><strong>Key Features:</strong></p>
                        <ul>
                          {selectedService.highlights.map((highlight, index) => (
                            <li key={index}>✓ {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <span className="whatsapp-message-time">Just now</span>
              </div>

              {/* Continue on WhatsApp Message */}
              <div className="whatsapp-message whatsapp-message-received">
                <div className="whatsapp-message-bubble whatsapp-message-bubble-received">
                  <p>Great choice! Would you like to continue this conversation on WhatsApp?</p>
                </div>
                <span className="whatsapp-message-time">Just now</span>
              </div>
            </>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Footer */}
        <div className="whatsapp-chat-footer">
          {selectedService ? (
            <>
              <button
                onClick={handleBackToServices}
                className="whatsapp-chat-back-btn"
              >
                ← Back to Services
              </button>
              <button
                onClick={() => handleWhatsAppRedirect(selectedService)}
                className="whatsapp-chat-continue-btn"
              >
                Continue on WhatsApp
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </button>
            </>
          ) : (
            <div className="whatsapp-chat-footer-placeholder">
              <p>Select a service to continue</p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return typeof window !== 'undefined' ? createPortal(chatContent, document.body) : null;
};

export default WhatsAppChat;


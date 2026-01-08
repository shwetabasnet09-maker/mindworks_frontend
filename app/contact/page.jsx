"use client";
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Bannermain from '../component/Banner/pagebanner';
import ContactSection from '../component/gobalcomponent/contact_form';
import Contact from '../component/contact/ContactSection';
import ContactForm from '../component/gobalcomponent/contact_form';

export default function ContactPage() {
 

  return (
    <div className=" bg-black text-white">
        <Bannermain backgroundImg="/contact.png" title="Contact-Us" />
      <div className="wrapper mx-auto px-4 py-16">

      <ContactForm/>
       <Contact/>
      </div>
    </div>
  );
}
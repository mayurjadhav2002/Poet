"use client"
import React from 'react';
import { motion } from 'framer-motion';
import "@/styles/InputField.min.css";

const InputField = ({ placeholder, type = 'text', name, className, value, ...rest }) => {
  return (
    <motion.div 
      className="input-container"
      initial={{ opacity: 0.3, x: '-100vh' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="input-wrapper">
        <input
          className={`inputField ${className}`}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          aria-label={placeholder || name}
          {...rest}
        />
        <label className={`input-label ${value || rest.defaultValue ? 'filled' : ''}`}>
          {placeholder}
        </label>
      </div>
    </motion.div>
  );
};


export default InputField;

'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();

  const handleRetry = () => {
    router.back();
  };

  return (
    <div className='flex justify-center items-center w-full h-screen flex-col'>
      <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Oops!</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>Sorry, something went wrong.</p>
      <button 
        onClick={handleRetry} 
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px', 
          backgroundColor: '#0070f3', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Retry
      </button>
    </div>
  );
}
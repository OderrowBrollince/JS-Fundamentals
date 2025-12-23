import React from 'react';

interface QRCodeDisplayProps {
  code: string;
  size?: number;
}

export function QRCodeDisplay({ code, size = 200 }: QRCodeDisplayProps) {
  // Using a QR code API service for demonstration
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(code)}`;

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl border-2 border-gray-200">
      <img
        src={qrCodeUrl}
        alt={`QR Code for ${code}`}
        className="w-full max-w-[200px] h-auto"
      />
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-1">Verification Code</p>
        <p className="font-mono bg-gray-100 px-4 py-2 rounded-lg">{code}</p>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function UploadMeeting() {
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    if (file) formData.append('meeting', file);
    if (link) formData.append('link', link);

    try {
      const res = await fetch('https://real-quickrecap-backend.onrender.com/summarize-meeting', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      setResponse(data.summary || 'No summary returned.');
    } catch (error) {
      setResponse('Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Your First Meeting</h1>

      <input
        type="file"
        accept="video/mp4, audio/m4a"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <input
        type="text"
        placeholder="...or paste a Loom, Zoom, or Meet link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Summarizing...' : 'Generate Recap'}
      </button>

      {response && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <strong>Summary:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

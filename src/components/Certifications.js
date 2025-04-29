import React from 'react';
import './Certifications.css';


function Certifications() {
  const handleImageClick = (imgSrc) => {
    window.open(imgSrc, '_blank');
  };

  const handleDownload = (imgSrc) => {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = imgSrc.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="certifications">
      <div className="certification-item">
        <img
          src="/certi/cert_pages-to-jpg-0001.jpg"
          alt="Certification 1"
          onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0001.jpg")}
          className="certification-image"
        />
        <button 
          className="download-button"
          onClick={(e) => {
            e.stopPropagation();
            handleDownload("/certi/cert_pages-to-jpg-0001.jpg");
          }}
        >
          Download
        </button>
      </div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0002.jpg"
    alt="Certification 2"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0002.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0002.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0022.png"
    alt="Certification 18"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0022.png")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0022.png");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0003.jpg"
    alt="Certification 3"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0003.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0003.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0021.png"
    alt="Certification 18"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0021.png")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0021.png");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0004.jpg"
    alt="Certification 4"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0004.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0004.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0005.jpg"
    alt="Certification 5"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0005.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0005.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0006.jpg"
    alt="Certification 6"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0006.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0006.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0007.jpg"
    alt="Certification 7"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0007.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0007.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0008.jpg"
    alt="Certification 8"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0008.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0008.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0009.jpg"
    alt="Certification 9"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0009.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0009.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0010.jpg"
    alt="Certification 10"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0010.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0010.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0011.jpg"
    alt="Certification 11"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0011.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0011.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0012.jpg"
    alt="Certification 12"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0012.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0012.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0013.jpg"
    alt="Certification 13"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0013.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0013.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0014.jpg"
    alt="Certification 14"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0014.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0014.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0015.jpg"
    alt="Certification 15"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0015.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0015.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0016.jpg"
    alt="Certification 16"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0016.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0016.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0017.jpg"
    alt="Certification 17"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0017.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0017.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0018.jpg"
    alt="Certification 18"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0018.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0018.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0019.jpg"
    alt="Certification 18"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0019.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0019.jpg");
    }}
  >
    Download
  </button>
</div>
<div className="certification-item">
  <img
    src="/certi/cert_pages-to-jpg-0020.jpg"
    alt="Certification 18"
    onClick={() => handleImageClick("/certi/cert_pages-to-jpg-0020.jpg")}
    className="certification-image"
  />
  <button 
    className="download-button"
    onClick={(e) => {
      e.stopPropagation();
      handleDownload("/certi/cert_pages-to-jpg-0020.jpg");
    }}
  >
    Download
  </button>
</div>
    </div>
  );
}

export default Certifications;
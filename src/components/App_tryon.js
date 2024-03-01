import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios with `npm install axios`
import styled from 'styled-components';
import './apptryon.css'

const StyledImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin: 5px; // Added for spacing between images
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProcessedImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Wrap images if they don't fit in a single row
  justify-content: start;
  align-items: center;
  margin-left: 20px; // Added to create some space between the sections
`;

const ProgressBar = () => (
    <div className="ProgressBarContainer">
        <div className="ProgressBar"></div>
    </div>
);

const ImageGallery = ({ onSelectDress }) => {
    
    const dresses= [
            process.env.PUBLIC_URL + '/Dress_1.jpg',
            process.env.PUBLIC_URL + '/Dress_2.jpg',
            process.env.PUBLIC_URL + '/Dress_3.jpg',
            process.env.PUBLIC_URL + '/Dress_4.jpg',
            process.env.PUBLIC_URL + '/Dress_5.jpg',
            process.env.PUBLIC_URL + '/Dress_6.jpg',
            process.env.PUBLIC_URL + '/Dress_7.jpg',
            process.env.PUBLIC_URL + '/Dress_8.jpg',
            process.env.PUBLIC_URL + '/Dress_9.jpg',
        process.env.PUBLIC_URL + '/Dress_10.jpg',
        process.env.PUBLIC_URL + '/Dress_14.jpg',
        process.env.PUBLIC_URL + '/Dress_16.jpg',
        process.env.PUBLIC_URL + '/Dress_11.jpg',
        // Add more dress image paths here
    ];
   

  return (
    <div className="image-gallery">
      {dresses.map((dress, index) => (
        < StyledImage
          key={index}
          src={dress}
          alt={`Dress ${index}`}
          onClick={() => onSelectDress(dress)}
        />
      ))}
    </div>
  );
};

const ImageUpload = ({ onFileSelect }) => {
  return (
    <input
      type="file"
      onChange={(e) => onFileSelect(e.target.files[0])}
    />
  );
};

const Apptryon = () => {
  const [selectedDress, setSelectedDress] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [processedImages, setProcessedImages] = useState([]);
  const [userImagePreview, setUserImagePreview] = useState('');
    
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

    const onSelectDress = async (dressUrl) => {
        setSelectedDress(dressUrl);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmissionMessage('Try on submitted. Please wait to see yourself in the selected dress...');

        if (!selectedDress || !userImage) {
            alert('Please select a dress and upload an image.');
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData();
        // Convert selectedDress (URL) to Blob and append to formData
        try {
            const response = await fetch(selectedDress);
            const blob = await response.blob();
            formData.append('dressImage', new File([blob], "dressImage.jpg", { type: "image/jpeg" }));
        } catch (error) {
            console.error('Error fetching dress image:', error);
            setIsSubmitting(false);
            return;
        }

        formData.append('userImage', userImage);

        try {
            const response = await axios.post('http://34.130.118.198:8080/proc', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            setSubmissionMessage('Success! Check out how you look in the selected dress.');
            setProcessedImages(response.data.processedImages);
        } catch (error) {
            console.error('Error uploading images:', error);
            setSubmissionMessage('Failed to process your request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const onFileSelect = (file) => {
        setUserImage(file);
        // Generate a preview URL for the uploaded image
        const reader = new FileReader();
        reader.onloadend = () => {
            setUserImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };


    return (
        <div>
            <ImageGallery onSelectDress={onSelectDress} />
            <ImageUpload onFileSelect={onFileSelect} />
            <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
            {isSubmitting && <ProgressBar /> && <p> {submissionMessage} </p>}

            <Container>
                <ImagePreviewContainer>
                    {selectedDress && <StyledImage src={selectedDress} alt="Selected Dress" />}
                    {userImagePreview && <StyledImage src={userImagePreview} alt="Uploaded Image" />}
                </ImagePreviewContainer>
                <ProcessedImagesContainer>
                    {processedImages.map((imageSrc, index) => (
                        <StyledImage key={index} src={imageSrc} alt={`Processed ${index + 1}`} />
                    ))}
                </ProcessedImagesContainer>
            </Container>
        </div>
    );
};

export default Apptryon;

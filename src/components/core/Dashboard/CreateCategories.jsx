import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addCategoryDetails } from '../../../services/operations/jobDetailsAPI';

const CreateCategories = () => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const { token } = useSelector((state) => state.auth)

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('categories', categoryName);
    formData.append('description', description);
    formData.append('image', image);

    try {
      // Assuming addCategoryDetails is an async function that makes API call
      console.log(formData)
      await addCategoryDetails(formData,token);

      // Optionally, you can reset the form after successful submission
      setCategoryName('');
      setDescription('');
      setImage(null);

      // Handle any other actions after successful submission
    } catch (error) {
      console.error('Error adding category:', error);
      // Handle error if needed
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} id="form" className="flex flex-col">
          <label htmlFor="categories">Job Category Name</label>
          <input
            type="text"
            name="categories"
            placeholder="Category Name"
            id="categories"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <label htmlFor="image">Category Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="submit" className="bg-blueMain">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategories;

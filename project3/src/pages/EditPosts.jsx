import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const EditPosts = () => {
  const [title, setTitle] =useState('');
  const [category, setCategory] = useState('Uncategorized')
  const [description,setDescription] = useState('')
  const [thumbnail, setThumbnail] =useState('')
 
  const postCategories = ["Data Analytics", "Data Science", "Digital Marketing", "Product Management", "Software Engineer", "Uncategorized"]

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

    const formats = [
      'header',
      'bold', ' italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]

  return (
    <section className='edit_post'>
      <div className='container'>
        <h2>Edit Post</h2>
        <p className='form_error_message'>
          This is an error
        </p>
        <form className='form create_post_form'>
          <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map(cat => <option key={cat}>{cat}</option>)
            }
          </select> 
          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />
            <input type='file' onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
            <button type='submit' className='btn primary'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditPosts
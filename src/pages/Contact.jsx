import React from 'react'


const Contact = () => {

  const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
  }


  return (
    <section>
        <div className='flex justify-center  flex-col gap-20' >
          <h1 className='text-6xl sm:text-8xl text-center contact-heading'>Contact Us</h1>
          <form action={handleFormSubmit} className='flex flex-col  items-center gap-8 '>
            <input
              type="text"
              required
              autoComplete='off' 
              placeholder='Enter Your Name'
              name='username'
              className='border text-white w-[80%] sm:w-[30%] contact-input'

            />
             <input
              type="email"
              required
              autoComplete='false' 
              placeholder='Enter Your email'
              name='email'
              className='border text-white w-[80%] sm:w-[30%] contact-input'

            />
            <textarea
              rows={10}
              name="message"
              placeholder='Enter Your message'
              required
              autoComplete='false'
              className='border text-white w-[80%] sm:w-[30%] contact-input h-150'
            
            >

            </textarea>
            <button type='submit' value="send" >Send</button>
          </form>

        </div>
    </section>
  )
}

export default Contact

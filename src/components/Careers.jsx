import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'

const Careers = () => {
  const [active, setactive] = useState('internship')

  return (
    <div>
      <div className="careers">
        <div className="md:w-1/2 sm:w-3/4 w-5/6 m-auto">
          <h1 className="text-white text-4xl pt-14">Be part of our mission</h1>
          <p className="text-white pt-5">
            We are looking for passionate people to join us on our mission. We
            value hard working proffesionals, clear communication, full
            ownership and responsibilities
          </p>
          <div className="flex flex-col justify-evenly mt-14">
            <button
              type="button"
              className={
                active === 'internship'
                  ? 'focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                  : 'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              }
              onClick={() => setactive('internship')}
            >
              Apply for Internship
            </button>
            <button
              type="button"
              className={
                active === 'fullTime'
                  ? 'my-6 focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                  : 'py-2.5 px-5 me-2 my-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              }
              onClick={() => setactive('fullTime')}
            >
              Apply for Full Time Role
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="md:w-1/2 sm:w-3/4 w-5/6 m-auto">
          {active === 'internship' ? <InternshipForm /> : <FullTimeRoleForm />}
        </div>
      </div>
    </div>
  )
}

const InternshipForm = () => {
  const [internshipDetails, setinternshipDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    degree: '',
    college: '',
    passingYear: '',
    resume: null,
  })

  const handleChangeInternForm = (event) => {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    setinternshipDetails((prev) => ({ ...prev, [name]: value }))
  }
  const [isLoading, setisLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setisLoading(true)
      const {
        firstName,
        lastName,
        email,
        degree,
        college,
        passingYear,
        resume,
      } = internshipDetails

      const formDataToSend = new FormData()
      formDataToSend.append('name', firstName + ' ' + lastName)
      formDataToSend.append('email', email)
      formDataToSend.append(
        'message',
        `Degree: ${degree}\n College: ${college}\n Year Of Passing: ${passingYear}`
      )
      formDataToSend.append('subject', 'Application for Internship')
      formDataToSend.append('resume', resume)
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }

      await axios.post(
        'http://localhost:5000/send-application',
        formDataToSend,
        config
      )
      setisLoading(false)
      alert('Application sent successfully!')
      setinternshipDetails({
        firstName: '',
        lastName: '',
        email: '',
        degree: '',
        college: '',
        passingYear: '',
        resume: null,
      })
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send email. Please try again later.')
    }
  }

  return (
    <div className="my-10 border rounded p-8 shadow">
      <h1 className="col-span-6 text-center text-3xl font-bold my-4">
        Apply For Internship
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-6 gap-x-6 gap-y-8 "
      >
        <div className="sm:col-span-3 col-span-6">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              onChange={handleChangeInternForm}
              value={internshipDetails.firstName}
              required
              type="text"
              name="firstName"
              id="firstName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>

        <div className="sm:col-span-3 col-span-6">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              onChange={handleChangeInternForm}
              value={internshipDetails.lastName}
              required
              type="text"
              name="lastName"
              id="lastName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>

        <div className="col-span-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              onChange={handleChangeInternForm}
              value={internshipDetails.email}
              required
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        {/* degree */}
        <div className="col-span-6">
          <label
            htmlFor="degree"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Highest Qualification Degree
          </label>
          <div className="mt-2">
            <input
              onChange={handleChangeInternForm}
              value={internshipDetails.degree}
              required
              type="text"
              name="degree"
              id="degree"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <label
            htmlFor="college"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            College
          </label>
          <div className="mt-2">
            <input
              onChange={handleChangeInternForm}
              value={internshipDetails.college}
              required
              type="text"
              name="college"
              id="college"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <label
            htmlFor="passingYear"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Year Of Passing
          </label>
          <div className="mt-2">
            <input
              onChange={handleChangeInternForm}
              value={internshipDetails.passingYear}
              required
              type="number"
              name="passingYear"
              id="passingYear"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="resume"
          >
            Upload Resume
          </label>
          <input
            onChange={(e) =>
              setinternshipDetails((prev) => ({
                ...prev,
                resume: e.target.files[0],
              }))
            }
            required
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="resume_help"
            id="resume"
            name="resume"
            type="file"
          ></input>
        </div>
        <div className="col-span-6">
          <button
            type="submit"
            className="w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            {isLoading && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

const FullTimeRoleForm = () => {
  const [fullTimeDetails, setfullTimeDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    degree: '',
    college: '',
    passingYear: '',
    score: '',
    resume: null,
  })

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    setfullTimeDetails((prev) => ({ ...prev, [name]: value }))
  }
  const [isLoading, setisLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setisLoading(true)
      const {
        firstName,
        lastName,
        email,
        degree,
        college,
        passingYear,
        score,
        resume,
      } = fullTimeDetails

      const formDataToSend = new FormData()
      formDataToSend.append('name', firstName + ' ' + lastName)
      formDataToSend.append('email', email)
      formDataToSend.append(
        'message',
        `Degree: ${degree}\n College: ${college}\n cgpa: ${score}\n Year Of Passing: ${passingYear}`
      )
      formDataToSend.append('subject', 'Application for full Time Role')
      formDataToSend.append('resume', resume)
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }

      await axios.post(
        'http://localhost:5000/send-application',
        formDataToSend,
        config
      )
      setisLoading(false)
      alert('Email sent successfully!')
      setfullTimeDetails({
        firstName: '',
        lastName: '',
        email: '',
        degree: '',
        college: '',
        passingYear: '',
        score: '',
        resume: null,
      })
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send Application. Please try again later.')
    }
  }

  return (
    <div className="my-10 border rounded p-8 shadow">
      <h1 className="col-span-6 text-center text-3xl font-bold my-4">
        Apply For Full Time Role
      </h1>
      <form
        className="grid grid-cols-6 gap-x-6 gap-y-8 "
        onSubmit={handleSubmit}
      >
        <div className="sm:col-span-3 col-span-6">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              required
              type="text"
              name="firstName"
              id="firstName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>

        <div className="sm:col-span-3 col-span-6">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              required
              type="text"
              name="lastName"
              id="lastName"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>

        <div className="col-span-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              required
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        {/* degree */}
        <div className="col-span-6">
          <label
            htmlFor="degree"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Highest Qualification Degree
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              required
              type="text"
              name="degree"
              id="degree"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <label
            htmlFor="college"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            College
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              required
              type="text"
              name="college"
              id="college"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <label
            htmlFor="passingYear"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Year Of Passing
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              required
              type="number"
              name="passingYear"
              id="passingYear"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <label
            htmlFor="passingYear"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Percentage or GPA acquired
          </label>
          <div className="mt-2">
            <input
              onChange={handleChange}
              required
              type="number"
              name="score"
              id="score"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
        <div className="col-span-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="resume"
          >
            Upload Resume
          </label>
          <input
            onChange={(e) =>
              setfullTimeDetails((prev) => ({
                ...prev,
                resume: e.target.files[0],
              }))
            }
            required
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="resume_help"
            id="resume"
            type="file"
          ></input>
        </div>
        <div className="col-span-6">
          <button
            type="submit"
            className="w-full text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            {isLoading && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
export default Careers

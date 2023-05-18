import React, { useState } from 'react'

const Contact = () => {

    const [formData, setformData] = useState({
        email: '',
        subject: '',
        comment: '',
        reason: ''
    })


    const handleChange = (e) => {

        const name = e.target.name
        const value = e.target.value

        setformData({
            ...formData,
            [name]: value
        })

    }

    const handleForm = (e) => {
        e.preventDefault()

        fetch('mdrngroup.co.uk', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((response) => response.json())
            .then((formData) => {
                console.log(formData)
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
        console.log(formData)

    }



    return (
        <div className="dark:bg-gray-900">
            <div className="max-w-lg px-4 py-4 mx-auto lg:py-11">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-red-500 dark:text-white">Contact Us</h2>
                <p className="mb-6 font-light text-center text-gray-700 lg:mb-11 dark:text-gray-400 sm:text-lg">Got a technical issue? Want to send feedback ? Let us know.</p>
                <form onSubmit={handleForm} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                    </div>
                    <div>
                        <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reason</label>
                        <select id='reason'
                            value={formData.reason}
                            onChange={handleChange}
                            name='reason'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value=''>-- Choose --</option>
                            <option value='ip theft'>Ip Theft</option>
                            <option value='general question'>General Question</option>
                            <option value='feed back'>Feed Back</option>
                            <option value='report inquiry'>Report Inquiry</option>
                            <option value='report crime'>I've reported a crime and not heard back</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" value={formData.subject} onChange={handleChange} name='subject' className="block w-full p-6 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" value={formData.comment} onChange={handleChange} name='comment' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="px-5 py-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
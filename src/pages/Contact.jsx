import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import Alert from '../components/Alert';

const Contact = () => {

    const [alert, setAlert] = useState(false)

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8t80sjo', 'template_581vqgz', form.current, 'oonWFMs5G80pT6H5d')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (
        <div className="dark:bg-gray-900">

            <div className="max-w-lg px-4 py-4 mx-auto lg:py-11">
                <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-red-500 dark:text-white">Contact Us</h2>
                <p className="mb-6 font-light text-center text-gray-700 lg:mb-11 dark:text-gray-400 sm:text-lg">Got a technical issue? Want to send feedback ? Let us know.</p>
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Email</label>
                        <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required />
                    </div>
                    <div>
                        <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reason</label>
                        <select id='reason'
                            name='reason'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value=''>Select</option>
                            <option value='ip theft'>Ip Theft</option>
                            <option value='general question'>General Question</option>
                            <option value='feed back'>Feed Back</option>
                            <option value='report inquiry'>Report Inquiry</option>
                            <option value='report crime'>I've reported a crime and not heard back</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" name='subject' className="block w-full p-6 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="px-5 py-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact